import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import compress from 'astro-compress';
import lottie from "astro-integration-lottie";


// https://astro.build/config
export default defineConfig({
  prefetchAll: true,
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
  integrations: [
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
