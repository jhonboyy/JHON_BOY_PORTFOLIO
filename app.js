// Importaciones de Módulos Externos
import {
  index,
  writeText,
  animateHeader,
  updateAnimation,
  animateLines,
  introduceAnimationOnLoad,
} from './scripts/modules/index.mjs';

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

import { handleLocationChange, buttonsRouteInteraction } from './routes.js';
import { menuButtonResponse } from './scripts/modules/menuUpdates.mjs';



// Definir appContainer en un ámbito accesible
let appContainer;

// Funciones de Utilidad
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para establecer el esqueleto HTML inicial
function Skeleton() {
  appContainer = document.getElementById('app-container');
  appContainer.innerHTML = index();
}

Skeleton();

let isAnimated = false;
let isTextWritten = false;

async function ensureAnimationAndText() {
  if (!isAnimated) {
    await animateLines();
    isAnimated = true;
  }
  if (!isTextWritten) {
    appContainer.innerHTML = await writeText();
    isTextWritten = true;
  }
}

// Función para actualizar el head dinámicamente
function updateHead(title, description) {
  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', description);
    document.head.appendChild(meta);
  }
}

// Función para manejar la ruta de Home
export async function Home() {
  updateHead(
    'Welcome to Jhon Boy',
    'Jhon Boy is an illustrator and visual artist from Tenerife, Canary Islands. He creates flat and colourful illustrations for international clients.'
  );

  window.addEventListener('resize', updateAnimation);
  appContainer.innerHTML = index(); // Asegurarse de que el contenido de inicio se cargue correctamente
  animateLines();

  await delay(1100);
  appContainer.innerHTML = writeText();
  animateHeader();

  await delay(300);
  updateAnimation();
  introduceAnimationOnLoad();

  await delay(300);
  await buttonsRouteInteraction();
}

// Función para manejar la ruta de About
export async function About() {
  updateHead(
    'About - Jhon Boy',
    'Learn more about Jhon Boy, an illustrator and visual artist from Tenerife, Canary Islands.'
  );

  // Asegurarse de que las animaciones y el texto se han ejecutado una vez
  await ensureAnimationAndText();
  menuButtonResponse();
  // Simular el clic en el botón de works
  aboutButton.click();

}

// Función para manejar la ruta de Works
export async function Works() {
  updateHead(
    'Works - Jhon Boy',
    'Explore the works of Jhon Boy, an illustrator and visual artist from Tenerife, Canary Islands.'
  );

  // Asegurarse de que las animaciones y el texto se han ejecutado una vez
  await ensureAnimationAndText();
  menuButtonResponse();
  // Simular el clic en el botón de works
  worksButton.click();

}

// Manejar la ruta actual al cargar la página
async function init() {
  await handleLocationChange();
}

export function pageNotFound() {
  appContainer.innerHTML = `<h1>404 - You're in the bad way son</h1>`;
}

// Event Listener para la Carga del DOM
document.addEventListener('DOMContentLoaded', init);
