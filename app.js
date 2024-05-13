// ----------------------------------------------
// Importaciones de Módulos Externos
// ----------------------------------------------
import {
  index,
  writeText,
  animateHeader,
  updateAnimation,
  animateLines,
  introduceAnimationOnLoad,
} from './scripts/modules/index.mjs';

import { menuLeftContainer } from './scripts/modules/menu.mjs';

// ----------------------------------------------
// Funciones de Utilidad
// ----------------------------------------------
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ----------------------------------------------
// Función de Inicialización Principal
// ----------------------------------------------
async function init() {
  // Configurar animaciones y actualizar en respuesta a eventos
  window.addEventListener('resize', updateAnimation);

  // Configuración inicial del contenedor de la aplicación
  const appContainer = document.getElementById('app-container');
  appContainer.innerHTML = index();
  animateLines();

  // Secuencia de animaciones y texto
  await delay(1100);
  appContainer.innerHTML = writeText();
  animateHeader();

  // Actualizaciones y animaciones posteriores
  await delay(300);
  updateAnimation();
  introduceAnimationOnLoad();

  // Inicialización de controles de menú y contenido
  await delay(300);
  menuLeftContainer();
}

// ----------------------------------------------
// Event Listener para la Carga del DOM
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', init);
