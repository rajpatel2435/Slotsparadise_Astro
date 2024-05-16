import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";


export default defineConfig({
  integrations: [tailwind()],
  base: "/the-beach",
  trailingSlash: "always",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    port: 4321,
    host: "127.0.0.1",
  },
 
});
