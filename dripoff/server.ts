import * as routerRuntime from "react-router";
import * as serverBuild from "virtual:react-router/server-build";

type WorkerRouterRuntime = {
  createRequestHandler: (
    build: unknown,
    mode: string | undefined,
  ) => (request: Request, context: unknown) => Promise<Response> | Response;
  RouterContextProvider: new () => {
    waitUntil: ExecutionContext["waitUntil"];
  };
};

// These framework server exports are available at runtime but are not represented
// in React Router's base browser-facing declaration surface.
const { createRequestHandler, RouterContextProvider } =
  routerRuntime as unknown as WorkerRouterRuntime;

export default {
  async fetch(
    request: Request,
    _env: Record<string, never>,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const method = request.method;
      if ((method === "GET" || method === "HEAD") && request.body) {
        return new Response(`${method} requests cannot have a body`, { status: 400 });
      }

      const url = new URL(request.url);
      if (url.pathname.includes("//")) {
        return new Response(null, {
          status: 301,
          headers: { location: url.pathname.replace(/[/]+/g, "/") },
        });
      }

      if ((method === "GET" || method === "HEAD") && url.pathname === "/_app/health") {
        return new Response(method === "HEAD" ? null : "ok", {
          headers: {
            "cache-control": "no-store",
            "content-type": "text/plain; charset=utf-8",
          },
        });
      }

      const routerContext = new RouterContextProvider();
      routerContext.waitUntil = executionContext.waitUntil.bind(executionContext);
      const handleRequest = createRequestHandler(serverBuild, process.env.NODE_ENV);
      return handleRequest(request, routerContext);
    } catch (error) {
      console.error(error);
      return new Response("An unexpected error occurred", { status: 500 });
    }
  },
};
