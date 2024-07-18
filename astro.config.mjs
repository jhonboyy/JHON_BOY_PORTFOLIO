import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  output: 'server',
  adapter: vercel({    
    webAnalytics: {
    enabled: true,
   },
  }),
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
  integrations: [sitemap()]
});