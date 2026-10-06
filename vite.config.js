import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // The 3D scenes are lazy-loaded, so Vite would otherwise only discover these
    // mid-session and re-bundle them, breaking already-open pages ("Outdated Optimize Dep").
    include: ["three", "@react-three/fiber", "@react-three/drei", "maath"],
  },
});
