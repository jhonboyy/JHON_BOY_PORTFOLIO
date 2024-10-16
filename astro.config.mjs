import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import lottie from "astro-integration-lottie";

const dynamicSlugs = ['lava-circular', 'frama', 'flourly'];

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  server: {
    host: '0.0.0.0',
    port: 4321
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
  site: 'https://jhonboy.com',
  output: 'server',
  integrations: [
    sitemap({
      customPages: dynamicSlugs.map((slug) => `https://jhonboy.com/works/${slug}`),
    }),
    lottie(),
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
    })
  ]
});
