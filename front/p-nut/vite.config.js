import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/boards": {
        target: "http://j8a704.p.ssafy.io:9090",
      },
      "/survey": {
        target: "http://j8a704.p.ssafy.io:9090",
      },
    },
  },
});
