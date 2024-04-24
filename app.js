import {
  index,
  writeText,
  animateHeader,
  updateAnimation,
  animateLines,
  introduceAnimationOnLoad,
} from './scripts/modules/index.mjs';

import { menuLeftContainer, toggleContent, toggleButtons } from './scripts/modules/menu.mjs';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
  
  window.addEventListener('resize', updateAnimation);

  const appContainer = document.getElementById('app-container');
  appContainer.innerHTML = index();
  animateLines();

  await delay(1100);

  appContainer.innerHTML = writeText();
  animateHeader();

  await delay(300);
  updateAnimation();
  introduceAnimationOnLoad();

  // LEFT MENU

  await delay(300);
  menuLeftContainer().then(toggleButtons);

}



document.addEventListener('DOMContentLoaded', init);




