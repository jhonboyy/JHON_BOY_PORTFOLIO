import { updateMenu } from './menuUpdates.mjs';
import { toggleContent } from './contentToggle.mjs';


export function menuLeftContainer() {
  return new Promise(resolve => {
      const aboutButton = document.getElementById('aboutButton');
      const worksButton = document.getElementById('worksButton');

      [aboutButton, worksButton].forEach(button => {
          button?.addEventListener('click', () => {
              updateMenu(button);
              toggleContent(button);
              resolve;
          });
      });
  });
}

