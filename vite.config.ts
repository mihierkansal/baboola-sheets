import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  server: {
    host: "0.0.0.0",
    port: 3002,
    hmr: true,
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
