// @ts-check & testing
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://windbreeze1.github.io/allendb.github.io/',
  base: '/allendb.github.io/',
  vite: {
    plugins: [tailwindcss()],
  },
});