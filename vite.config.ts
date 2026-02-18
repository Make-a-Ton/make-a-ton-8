import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages configuration
  // If deploying to https://<username>.github.io/<repo-name>/, set base to '/<repo-name>/'
  // If deploying to a custom domain or https://<username>.github.io/, use '/'
  base: "/",
});
