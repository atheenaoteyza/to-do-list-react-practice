import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your preferred port
    host: "localhost", // Or use '0.0.0.0' for network access
  },
});
