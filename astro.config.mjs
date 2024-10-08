import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
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
    sitemap(),
    compress({
      // Configuraciones opcionales
      css: true, // Comprime archivos CSS
      html: true, // Comprime archivos HTML
      js: true, // Comprime archivos JavaScript
      img: true, // Comprime imágenes
      svg: true, // Comprime archivos SVG
    })
  ]
});
