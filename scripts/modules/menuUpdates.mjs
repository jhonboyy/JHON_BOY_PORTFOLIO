import {
  cleanUpIndex,
  ensureImageContainerExists
} from './menuCleaning.mjs';
import {
  updateContentStylesBasedOnWidth
} from './about.mjs';

const buttonStates = {
  worksButton: false,
  aboutButton: false
};

let currentButton = null;

export function updateMenu(button) {
  const menuContainer = document.getElementById('mainContainer');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('ul');
  currentButton = button;

  cleanUpIndex(button.id);
  adjustMenuBasedOnWidth(nav, ul, menuContainer, button);

  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
      if ((lastWidth <= 900 && window.innerWidth > 900) || (lastWidth > 900 && window.innerWidth <= 900)) {
          if (aboutSectionCreated) {
              updateContentStylesBasedOnWidth();
          }
          updateImages(); // Forzar actualización de imágenes
          lastWidth = window.innerWidth;
      }
  });
}

function adjustMenuBasedOnWidth(nav, ul, menuContainer, button) {
  if (window.innerWidth <= 900) {
      adjustMenuForMobileOnWidth(ul, menuContainer, button);
  } else {
      adjustMenuForDesktopOnWidth(nav, ul, menuContainer, button);
  }
}

function adjustMenuForMobileOnWidth(ul, container, button) {
  ul.style.display = "grid";
  ul.style.gridTemplateRows = "1fr";
  ul.style.gridTemplateColumns = "repeat(5, 1fr)";
  container.style.display = "grid";
  container.style.width = "100%";
  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');

  worksButton.style.top = "0";
  worksButton.style.borderBottom = "0";
  worksButton.classList.remove("hideBefore");
  aboutButton.style.top = "1px";

  toggleButtonState(button.id);
}

function adjustMenuForDesktopOnWidth(nav, ul, container, button) {

  animateDesktopMenu(container, button);
}

function animateDesktopMenu(container, button) {

  gsap.to(container, {
      width: '50%',
      left: 0,
      duration: 0.2,
      onComplete: () => {
          animateMenuButton(button);
          buttonsBehaviour(container, button);
      }
  });
}

function toggleButtonState(buttonId) {
  Object.keys(buttonStates).forEach(key => {
      buttonStates[key] = (key === buttonId);
      document.getElementById(key).style.pointerEvents = buttonStates[key] ? 'none' : 'auto';
  });
}

function buttonsBehaviour(menuContainer, button) {
  if (buttonStates[button.id]) return;

  toggleButtonState(button.id);
  updateMenuStyle(button.id, menuContainer);
}

function updateMenuStyle(buttonId, menuContainer) {
  const settings = {
      worksButton: {
          borderBottom: "1px solid black",
          hideClass: 'hideBefore',
          afterHeight: 'calc(100vh - 50px)',
          paddingTop: "50px",
          paddingBottom: "250px",
          
      },
      aboutButton: {
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          hideClass: 'hideBefore',
          marginTop: "-1px",
          afterHeight: '100vh',
          paddingTop: "100px",
          paddingBottom: "150px",
      }
  };
  

  const config = settings[buttonId];
  const button = document.getElementById(buttonId);
  const container = document.querySelector('.menu-opened');
  const newImageContainer = ensureImageContainerExists(menuContainer);

  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');

  worksButton.style.borderBottom = settings.worksButton.borderBottom;
  aboutButton.style.borderBottom = settings.aboutButton.borderBottom;

  button.style.borderBottom = config.borderBottom;
  button.classList.add(config.hideClass);
  if (config.borderTop) button.style.borderTop = config.borderTop;
  if (config.marginTop) button.style.marginTop = config.marginTop;

  container.style.setProperty('--after-height', config.afterHeight);
  newImageContainer.style.paddingTop = config.paddingTop;
  newImageContainer.style.paddingBottom = config.paddingBottom;

  displayRelevantImage(buttonId, newImageContainer);
}

function animateMenuButton(targetButton) {
  const {
      id
  } = targetButton;
  const otherButton = (id === 'worksButton') ? 'aboutButton' : 'worksButton';
  const newPosition = 'calc(-100vh + 250px)';
  const otherPosition = (id === 'aboutButton') ? 'calc(-100vh + 250px)' : '0';

  animateButton(targetButton, newPosition);
  animateButton(document.getElementById(otherButton), otherPosition);

  animateMenuButtonToggle(targetButton, otherButton);
}

function animateMenuButtonToggle(targetButton, otherButton) {
  const isWorksButtonActive = (targetButton.id === 'worksButton');
  if (isWorksButtonActive) {
      animateButton(document.getElementById(otherButton), '1px');
  }
}

function animateButton(targetButton, newPosition) {
  gsap.to(targetButton, {
      css: {
          position: 'relative',
          top: newPosition
      },
      duration: 0.5,
      ease: 'power2.out',
  });
}

function displayRelevantImage(buttonId, imageContainer) {
  imageContainer.querySelectorAll('img').forEach(img => {
      img.style.display = 'none';
  });

  const relevantImage = imageContainer.querySelector(`img[data-button-id="${buttonId}"]`);
  if (relevantImage) {
      relevantImage.style.display = 'block';

      if (!imageContainer.dataset.animated) {
          gsap.fromTo(relevantImage, {
              opacity: 0
          }, {
              opacity: 1,
              duration: 1,
              delay: 1
          });
          imageContainer.dataset.animated = 'true';
      } else {
          relevantImage.style.opacity = '1';
      }
  }
}

function updateImages() {
  const menuContainer = document.getElementById('mainContainer');
  const imageContainer = ensureImageContainerExists(menuContainer);
  displayRelevantImage(currentButton.id, imageContainer);
}