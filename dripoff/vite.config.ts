import { reactRouter } from "@react-router/dev/vite";
import { oxygen } from "@shopify/mini-oxygen/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const oxygenPlugins = oxygen();
const oxygenPlugin = oxygenPlugins.find((plugin) => plugin.name === "oxygen:main");

if (!oxygenPlugin?.api) {
  throw new Error("MiniOxygen plugin API is unavailable.");
}

// Keep an explicit compatibility date supported by the MiniOxygen runtime.
oxygenPlugin.api.registerPluginOptions({ compatibilityDate: "2026-04-01" });

export default defineConfig({
  plugins: [tailwindcss(), ...oxygenPlugins, reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    assetsInlineLimit: 0,
  },
  ssr: {
    optimizeDeps: {
      include: [
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom",
        "react-dom/server",
        "react-router > set-cookie-parser",
        "react-router > cookie",
        "react-router",
      ],
    },
  },
});
