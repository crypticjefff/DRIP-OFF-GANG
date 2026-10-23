import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("lookbook", "routes/lookbook.tsx"),
  route("design", "routes/design.tsx"),
  route("about", "routes/about.tsx"),
  route("*", "routes/catchall.tsx"),
] satisfies RouteConfig;
