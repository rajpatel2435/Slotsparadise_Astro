import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";
import netlify from "@astrojs/netlify/functions";


//https://docs.astro.build/en/guides/integrations-guide/sitemap/


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});