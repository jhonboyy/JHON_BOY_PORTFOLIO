import {
  cleanUpIndex,
  ensureImageContainerExists
} from './menuCleaning.mjs';

import { updateContentStylesBasedOnWidth } from "./about.mjs";
import { toggleContent } from './contentToggle.mjs';

const buttonStates = {
  worksButton: false,
  aboutButton: false
};

let currentButton = null;

export function menuButtonResponse() {
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

export function updateMenu(button) {
  const menuContainer = document.getElementById('mainContainer');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('ul');
  currentButton = button;

  cleanUpIndex(button.id);
  adjustMenuBasedOnWidth(nav, ul, menuContainer, button);

  let lastWidth = window.innerWidth;
  window.addEventListener('resize', debounce(() => {
    if ((lastWidth <= 900 && window.innerWidth > 900) || (lastWidth > 900 && window.innerWidth <= 900)) {
      adjustMenuBasedOnWidth(nav, ul, menuContainer, button);
      updateImages(); // Forzar actualización de imágenes
      updateContentStylesBasedOnWidth();
      lastWidth = window.innerWidth;
    }
  }, 50));
}

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function adjustMenuBasedOnWidth(nav, ul, menuContainer, button) {
  if (window.innerWidth <= 900) {
    adjustMenuForMobileOnWidth(ul, menuContainer, button);
  } else {
    adjustMenuForDesktopOnWidth(nav, ul, menuContainer, button);
  }
}

function adjustMenuForMobileOnWidth(ul, container, button) {
  gsap.set(".menu-opened, #worksButton, #aboutButton", { clearProps: "all" });

  buttonsBehaviour(container,button)
  worksButton.classList.remove("hideBefore");
  aboutButton.classList.remove("hideBefore");

}

function adjustMenuForDesktopOnWidth(nav, ul, container, button) {
  worksButton.classList.add("hideBefore");
  aboutButton.classList.add("hideBefore");

  worksButton.style.borderBottom = "1px solid black";
  aboutButton.style.borderBottom = "1px solid black";
  aboutButton.style.borderTop = "1px solid black";

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
      borderTop: "", // Ensure all properties are defined, even if empty
      hideClass: 'hideBefore',
      afterHeight: 'calc(100vh - 50px)',
      paddingTop: "50px",
      paddingBottom: "250px",
      marginTop: "",
      zIndex: "4", // zIndex specified here
    },
    aboutButton: {
      borderBottom: "1px solid black",
      borderTop: "1px solid black",
      hideClass: 'hideBefore',
      marginTop: "-1px",
      afterHeight: '100vh',
      paddingTop: "100px",
      paddingBottom: "150px",
      zIndex: "4", // Ensure all properties are defined, even if empty
    }
  };

  const config = settings[buttonId];
  const button = document.getElementById(buttonId);
  const container = document.querySelector('.menu-opened');
  const newImageContainer = ensureImageContainerExists(menuContainer);

  // Apply borderBottom and borderTop styles
  button.style.borderBottom = config.borderBottom;
  if (config.borderTop) button.style.borderTop = config.borderTop;
  if (config.marginTop) button.style.marginTop = config.marginTop;
  if (config.zIndex) button.style.zIndex = config.zIndex; 


  // Apply class and update container styles
  button.classList.add(config.hideClass);
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