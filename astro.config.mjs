import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind()],
  base: '/the-beach',
  trailingSlash: "ignore",
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});