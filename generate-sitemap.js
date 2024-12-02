#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { projectDetails } from './src/data/ProjectsDetailData.js';
import { projects } from './src/data/ProjectsData.js';

// Base URL del sitio
const BASE_URL = 'https://jhonboy.com';

// Determinar la carpeta de salida estática para Vercel
const OUTPUT_DIR = path.resolve('.vercel/output/static');

// Procesar subrutas desde `projectDetails`
const worksSubroutes = Object.entries(projectDetails).map(([key, project]) => {
  const images = Array.isArray(project)
    ? project
    : [
        ...(project.images || []),
        ...(project.sketches || []),
      ];

  return {
    url: `/works/${key}`,
    images,
  };
});

// Procesar la ruta principal `/works` desde `projectsData`
const worksMainRoute = {
  url: '/works',
  images: projects.flatMap((project) => project.images || []),
};

// Páginas principales adicionales
const mainPages = [
  { url: '/', images: [] },
  {
    url: '/about/',
    images: [
      {
        src: '/images/jhon-boy-illustration-portrait.webp',
        alt: 'Portrait photo of Jhon Boy',
        width: 1296,
        height: 2048,
      },
      {
        src: '/images/jhon-boy-illustration-portrait-2.webp',
        alt: 'Alternate portrait photo of Jhon Boy',
        width: 1296,
        height: 2048,
      },
    ],
    description: `JHON BOY IS AN ILLUSTRATOR FROM TENERIFE, KNOWN FOR MINIMALIST VISUALS THAT INVITE REFLECTION. 
      COLLABORATED WITH UNIQLO, FRAMA, AND OTHER GLOBAL BRANDS. AWARDED BY D&AD (2023).`,
  },
];

// Combinar todas las rutas
const allPages = [...mainPages, worksMainRoute, ...worksSubroutes];

// Generar el contenido del sitemap
function generateSitemap() {
  const urls = allPages.map(({ url, images }) => {
    const imagesXML = (images || [])
      .map(
        (img) => `
        <image:image>
          <image:loc>${BASE_URL}${img.src}</image:loc>
          <image:caption>${img.alt}</image:caption>
          <image:width>${img.width}</image:width>
          <image:height>${img.height}</image:height>
        </image:image>
      `
      )
      .join('');

    return `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        ${imagesXML}
      </url>
    `;
  });

  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urls.join('')}
</urlset>
`.trim();

  // Verificar que la carpeta de salida existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const outputPath = path.resolve(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapContent, 'utf-8');
  console.log(`Sitemap generado correctamente en: ${outputPath}`);
}

// Ejecutar la función para generar el sitemap
generateSitemap();