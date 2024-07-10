import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  output: 'server',
  adapter: vercel(),
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
});
