import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000        
  },
  output: 'server',
  adapter: vercel(),

});
