import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  define: {
    __BACKEND_URL__: JSON.stringify('http://172.105.23.214:1337/'),
    __FRONTEND_URL__: JSON.stringify('http://localhost:3000/'),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Alias for src directory
      "@store": fileURLToPath(new URL("./src/stores", import.meta.url)), // Alias for store directory
    },
  },
});
