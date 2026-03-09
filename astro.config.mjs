// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://windbreeze1.github.io/allendb.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
