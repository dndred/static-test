/** @type {import('vite').UserConfig} */
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    cssCodeSplit: true,
    outDir: "../dist",
    minify: true,
    // cssMinify: true,
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
