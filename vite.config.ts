import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Never publish sourcemaps in production bundles.
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Use hash-only filenames to avoid exposing module intent in file names.
        entryFileNames: "assets/[hash].js",
        chunkFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
  esbuild: {
    // Strip debugging output from production bundles.
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
