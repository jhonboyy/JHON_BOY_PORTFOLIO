// ----------------------------------------------
// IMPORTS AND GLOBAL STATES
// ----------------------------------------------

import {
  createProjectsSection,
  rightWorksButtons,
  animateSections
} from "./projects.mjs";
import {
  createAboutSection,
  updateContentStylesBasedOnWidth
} from "./about.mjs";

const buttonStates = {
  worksButton: false,
  aboutButton: false
};

let projectsSectionCreated = false;
let aboutSectionCreated = false;
let animationStarted = false;

let isWorksButtonActive = false;
let isAboutButtonActive = false;

// ----------------------------------------------
// CLEANING FUNCTIONS
// ----------------------------------------------

function removeFirstH1Element(container) {
  const h1 = container.querySelector('h1');
  if (h1) {
      h1.remove();
  }
}

function cleanUpIndex() {
  const menuContainer = document.getElementById('mainContainer');
  const animationContainer = document.querySelector('.container-test-index');

  if (menuContainer) {
      menuContainer.classList.add('menu-opened');
      menuContainer.style.gridTemplateRows = "1fr";
      removeFirstH1Element(menuContainer);
  }

  if (animationContainer) {
      animationContainer.remove();
  }
}

function ensureImageContainerExists(menuContainer) {
  let imageContainer = menuContainer.querySelector('.MenuImageContainer');
  if (!imageContainer) {
      imageContainer = document.createElement('div');
      imageContainer.classList.add("MenuImageContainer");
      menuContainer.appendChild(imageContainer);
      populateImageContainer(imageContainer);
  }
  return imageContainer;
}

function populateImageContainer(imageContainer) {
  const imagesInfo = [{
          id: 'worksButton',
          src: './images/jhon-boy-illustration-works-page-person-resting.svg'
      },
      {
          id: 'aboutButton',
          src: './images/jhon-boy-illustration-works-page-person-upside-down.svg'
      }
  ];

  imagesInfo.forEach(info => {
      const img = document.createElement('img');
      img.src = info.src;
      img.style.display = 'none';
      img.dataset.buttonId = info.id;
      imageContainer.appendChild(img);
  });
}

// ----------------------------------------------
// UPDATEMENU FUNCTIONS
// ----------------------------------------------

function updateMenu(button) {
  const menuContainer = document.getElementById('mainContainer');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('ul');

  cleanUpIndex();
  adjustMenuBasedOnWidth(nav, ul, menuContainer, button); // Ajuste inicial basado en el tamaño actual

  // Ajustar solo cuando sea necesario, por ejemplo, cruzando un punto de ruptura
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
      if ((lastWidth <= 900 && window.innerWidth > 900) || (lastWidth > 900 && window.innerWidth <= 900)) {
          adjustMenuBasedOnWidth(nav, ul, menuContainer, button);
          if (aboutSectionCreated === true) {
              updateContentStylesBasedOnWidth();
          }
          lastWidth = window.innerWidth; // Actualizar la última anchura conocida
      }
  });
}

function toggleButtonState(buttonId) {
  // Activar el botón actual y desactivar el opuesto
  Object.keys(buttonStates).forEach(key => {
      buttonStates[key] = (key === buttonId);
      document.getElementById(key).style.pointerEvents = buttonStates[key] ? 'none' : 'auto';
  });
}

function updateMenuStyle(buttonId, menuContainer) {
  // Define las configuraciones por botón
  const settings = {
      worksButton: {
          borderBottom: "1px solid black",
          hideClass: 'hideBefore',
          afterHeight: 'calc(100vh - 50px)',
          paddingTop: "50px",
          paddingBottom: "250px"
      },
      aboutButton: {
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          hideClass: 'hideBefore',
          marginTop: "-1px",
          afterHeight: '100vh',
          paddingTop: "100px",
          paddingBottom: "150px"
      }
  };

  const config = settings[buttonId];
  const button = document.getElementById(buttonId);
  const container = document.querySelector('.container-index.menu-opened');
  const newImageContainer = ensureImageContainerExists(menuContainer);

  // Ajustar estilos y clases
  aboutButton.style.zIndex = "3";
  button.style.borderBottom = config.borderBottom;
  button.classList.add(config.hideClass);
  if (config.borderTop) button.style.borderTop = config.borderTop;
  if (config.marginTop) button.style.marginTop = config.marginTop;

  container.style.setProperty('--after-height', config.afterHeight);
  newImageContainer.style.paddingTop = config.paddingTop;
  newImageContainer.style.paddingBottom = config.paddingBottom;

  animateMenuButton(button);
  displayRelevantImage(buttonId, newImageContainer);

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

function animateMenuButton(targetButton) {
  const {
      id
  } = targetButton;
  const otherButton = (id === 'worksButton') ? 'aboutButton' : 'worksButton';
  const newPosition = 'calc(-100vh + 250px)';
  const otherPosition = (id === 'aboutButton') ? 'calc(-100vh + 250px)' : '0';

  animateButton(targetButton, newPosition);
  if (id === 'worksButton') {
      isWorksButtonActive = true;
  } else {
      isAboutButtonActive = true;
      animateButton(document.getElementById('worksButton'), otherPosition);
  }

  animateMenuButtonToggle(targetButton, otherButton);
}

function animateMenuButtonToggle(targetButton, otherButton) {
  if (isWorksButtonActive && isAboutButtonActive) {
      if (targetButton.id === 'worksButton') {
          animateButton(document.getElementById(otherButton), '1px');
          isAboutButtonActive = false;
      }
  }
}

function displayRelevantImage(buttonId, imageContainer) {
  imageContainer.querySelectorAll('img').forEach(img => {
      img.style.display = 'none'; // Oculta todas las imágenes
  });

  const relevantImage = imageContainer.querySelector(`img[data-button-id="${buttonId}"]`);
  if (relevantImage) {
      relevantImage.style.display = 'block'; // Muestra solo la imagen relevante

      // Verifica si alguna animación ya se ha disparado para el contenedor
      if (!imageContainer.dataset.animated) {
          // Si no se ha animado antes, anima y marca el contenedor como animado
          gsap.fromTo(relevantImage, {
              opacity: 0
          }, {
              opacity: 1,
              duration: 1,
              delay: 1
          });
          imageContainer.dataset.animated = 'true'; // Marcar el contenedor como animado
      } else {
          // Si ya se animó, simplemente asegúrate de que la imagen esté completamente visible
          relevantImage.style.opacity = '1';
      }
  }
}

function adjustMenuBasedOnWidth(nav, ul, menuContainer, button, resolve) {
  if (window.innerWidth <= 900) {
      adjustMenuForMobile(ul, menuContainer, button);
  } else {
      adjustMenuForDesktop(nav, ul, menuContainer, button, resolve);
  }
}

function adjustMenuForMobile(ul, container, button) {
  ul.style.display = "grid";
  ul.style.gridTemplateRows = "1fr";
  ul.style.gridTemplateColumns = "repeat(5, 1fr)";
  container.style.display = "grid";
  container.style.width = "100%";
  worksButton.style.top = "0";
  worksButton.style.borderBottom = "0";
  worksButton.classList.remove("hideBefore");
  aboutButton.style.top = "1px";

  toggleButtonState(button.id);

}

function adjustMenuForDesktop(nav, ul, container, button) {
  nav.style.height = "100%";
  ul.style.position = "absolute";
  ul.style.gridTemplateColumns = "1fr";
  ul.style.gridTemplateRows = "repeat(5, 1fr)";
  ul.style.width = "100%";
  ul.style.bottom = "0";
  worksButton.style.borderBottom = "1px solid black"
  worksButton.classList.add("hideBefore");

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

function buttonsBehaviour(menuContainer, button) {
  if (buttonStates[button.id]) return;

  toggleButtonState(button.id);
  updateMenuStyle(button.id, menuContainer);
}

// ----------------------------------------------
// TOGGLECONTENT FUNCTIONS
// ----------------------------------------------

function toggleContent(button) {
  if (button.id === 'worksButton') {
      if (!projectsSectionCreated) {
          createProjectsSection();
          rightWorksButtons();
          projectsSectionCreated = true;
          startAnimation('works-content');
      }
      toggleDisplay('about-content', 'none');
      toggleDisplay('works-content', 'grid');
  } else if (button.id === 'aboutButton') {
      if (!aboutSectionCreated) {
          createAboutSection();
          aboutSectionCreated = true;
          startAnimation('about-content');

      }
      toggleDisplay('works-content', 'none');
      toggleDisplay('about-content', 'grid');
  }
}

function startAnimation(sectionId) {
  if (!animationStarted && window.innerWidth > 900) {
      animateSections(document.getElementById(sectionId));
      animationStarted = true;
  }
}

function toggleDisplay(sectionId, displayStyle) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = displayStyle;
  }
}

// ----------------------------------------------
// MAIN FUNCTION
// ----------------------------------------------

export function menuLeftContainer() {
  return new Promise(resolve => {
      const aboutButton = document.getElementById('aboutButton');
      const worksButton = document.getElementById('worksButton');

      [aboutButton, worksButton].forEach(button => {
          button?.addEventListener('click', () => {
              updateMenu(button, resolve);
              toggleContent(button);
          });
      });
  });
}