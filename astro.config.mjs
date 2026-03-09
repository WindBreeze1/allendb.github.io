// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://windbreeze1.github.io',
  base: '/', // important for user site
  vite: {
    plugins: [tailwindcss()],
  },
});