export function menuLeftContainer() {
  return new Promise(resolve => {
    const buttons = [document.getElementById('aboutButton'), document.getElementById('worksButton')];
    const menuContainer = document.getElementById('mainContainer');
    const animationContainer = document.querySelector('.container-test-index');
    let h1Removed = false;

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        menuContainer.classList.add('menu-opened');
        menuContainer.style.gridTemplateRows = "1fr";
        
        if (!h1Removed && menuContainer.querySelector('h1')) {
          menuContainer.querySelector('h1').remove();
          h1Removed = true;
        }
        
        animationContainer.remove();
        document.querySelector('nav').style.height = "100%";
        document.querySelector('ul').style.position = "absolute";
        document.querySelector('ul').style.width = "100%";
        document.querySelector('ul').style.bottom = "0";

        gsap.to(menuContainer, {
          width: '50%',
          left: 0,
          duration: 0.2,
          onComplete: () => {
            animateMenuButton(document.getElementById('worksButton'));
            buttonsBehaviour(menuContainer, button, animationContainer);
            resolve();
          },
        });
      });
    });
  });
}

function animateMenuButton(targetButton) {
  gsap.to(targetButton, {
    css: {
      position: 'relative',
      top: 'calc(-100vh + 250px)',
    },
    duration: 0.5,
    ease: 'power2.out',
  });
};

function buttonsBehaviour(menuContainer, button) {

  document.getElementById('worksButton').style.borderBottom = "1px solid black";
  document.getElementById('worksButton').classList.add('hideBefore');
  var container = document.querySelector('.container-index.menu-opened');

  if (button.id === 'worksButton') {
    animateMenuButton(document.getElementById('worksButton'));

    container.style.setProperty('--after-height', 'calc(100vh - 50px)');

    setTimeout(() => {
      const newImageContainer = document.createElement('div');
      newImageContainer.classList.add("MenuImageContainer");
      newImageContainer.style.display = 'flex';
      newImageContainer.style.justifyContent = 'center';
      newImageContainer.style.alignItems = 'center';
      newImageContainer.style.height = 'calc(100vh - 250px)';
      newImageContainer.style.paddingTop = '50px';
      newImageContainer.style.paddingBottom = '200px';
      
      const newImage = document.createElement('img');
      newImage.src = './images/jhon-boy-illustration-works-page-person-resting.svg';
      newImage.style.opacity = 0;
      newImage.style.maxWidth = '100%';
      newImage.style.maxHeight = '100%';
      newImage.style.objectFit = 'contain';
      newImage.classList.add("menuImage");

      newImageContainer.appendChild(newImage);
      menuContainer.appendChild(newImageContainer); 

      gsap.to(newImage, {
        opacity: 1,
        duration: 1,
      });
    }, 1000);


  } else if (button.id === 'aboutButton') {
    animateMenuButton(document.getElementById('aboutButton'));
    animateMenuButton(document.getElementById('worksButton'));
    document.getElementById('aboutButton').classList.add('hideBefore');
    document.getElementById('aboutButton').style.marginTop = "-1px";
    document.getElementById('aboutButton').style.borderBottom = "1px solid black";
    document.getElementById('aboutButton').style.borderTop = "1px solid black";

    container.style.setProperty('--after-height', '100vh');

    setTimeout(() => {
      const newImageContainer = document.createElement('div');
      newImageContainer.classList.add("MenuImageContainer");
      newImageContainer.style.display = 'flex';
      newImageContainer.style.justifyContent = 'center';
      newImageContainer.style.alignItems = 'center';
      newImageContainer.style.height = 'calc(100vh - 250px)';
      newImageContainer.style.paddingTop = '100px';
      newImageContainer.style.paddingBottom = '200px';
      
      const newImage = document.createElement('img');
      newImage.src = './images/jhon-boy-illustration-works-page-person-upside-down.svg';
      newImage.style.opacity = 0;
      newImage.style.maxWidth = '100%';
      newImage.style.maxHeight = '100%';
      newImage.style.objectFit = 'contain';
      newImage.classList.add("menuImage");

      newImageContainer.appendChild(newImage);
      menuContainer.appendChild(newImageContainer); 

      gsap.to(newImage, {
        opacity: 1,
        duration: 1,
      });
    }, 1000);
  }
};

export function toggleButtons() {
  return new Promise(resolve => {
    const aboutButton = document.getElementById('aboutButton');
    const worksButton = document.getElementById('worksButton');
    const container = document.querySelector('.container-index.menu-opened');

    aboutButton.addEventListener('click', function () {
      container.style.setProperty('--after-height', '100vh');
      aboutButton.style.borderBottom = "1px solid black";
      container.style.setProperty('--after-height', '100vh');
      
      // Crear y agregar la imagen al menú
      const menuImage = document.querySelector('.menuImage');
      const ImageContainers = document.querySelectorAll('.MenuImageContainer');
      if (menuImage) {
        menuImage.src = './images/jhon-boy-illustration-works-page-person-upside-down.svg';
        ImageContainers.forEach(container => {
          container.style.paddingTop = '100px';
        });
      }

      gsap.to(aboutButton, {
        css: {
          position: 'relative',
          top: 'calc(-100vh + 249px)',
        },
        duration: 0.5,
        ease: 'power2.out',
      });
      resolve(); // Resolver la promesa después de hacer clic en el botón
    });

    worksButton.addEventListener('click', function () {
      container.style.setProperty('--after-height', 'calc(100vh - 50px)');
      aboutButton.style.zIndex = "3";

      // Crear y agregar la imagen al menú
      const menuImage = document.querySelector('.menuImage');
      const ImageContainers = document.querySelectorAll('.MenuImageContainer');
      if (menuImage) {
        menuImage.src = './images/jhon-boy-illustration-works-page-person-resting.svg';
        ImageContainers.forEach(container => {
          container.style.paddingTop = '50px';
        });
      }

      gsap.to(aboutButton, {
        css: {
          position: 'relative',
          top: '1px',
        },
        duration: 0.5,
        ease: 'power2.out',
      });
      resolve(); // Resolver la promesa después de hacer clic en el botón
    });
  });
}

import { createProjectsSection, rightWorksButtons, animateSections } from "./projects.mjs";
import { createAboutSection } from "./about.mjs";

let projectsSectionCreated = false;
let aboutSectionCreated = false;

let animationStarted = false;

export function toggleContent() {
  const buttons = [document.getElementById('aboutButton'), document.getElementById('worksButton')];

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      if (button.id === 'worksButton') {
        if (!projectsSectionCreated) {
          createProjectsSection();
          rightWorksButtons();
          projectsSectionCreated = true;

          if (!animationStarted) {
            animateSections(document.getElementById('works-content'));
            animationStarted = true;
          }
        }
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) {
          aboutContent.style.display = 'none';
        }
        const worksContent = document.getElementById('works-content');
        if (worksContent) {
          worksContent.style.display = 'grid';
        }
      } else if (button.id === 'aboutButton') {
        if (!aboutSectionCreated) {
          createAboutSection();
          aboutSectionCreated = true;

          if (!animationStarted) {
            animateSections(document.getElementById('about-content'));
            animationStarted = true;
          }
        }
        const worksContent = document.getElementById('works-content');
        if (worksContent) {
          worksContent.style.display = 'none';
        }
        const aboutContent = document.getElementById('about-content');
        if (aboutContent) {
          aboutContent.style.display = 'grid';
        }
      }
    });
  });
}