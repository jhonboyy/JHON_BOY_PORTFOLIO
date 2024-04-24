export function menuLeftContainer() {
  return new Promise(resolve => {
    const buttons = [document.getElementById('aboutButton'), document.getElementById('worksButton')];
    const menuContainer = document.getElementById('mainContainer');
    const animationContainer = document.querySelector('.container-test-index');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        menuContainer.classList.add('menu-opened');
        menuContainer.style.gridTemplateRows = "1fr";
        menuContainer.querySelector('h1').remove();
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


      newImageContainer.appendChild(newImage);
      menuContainer.appendChild(newImageContainer); 

      gsap.to(newImage, {
        opacity: 1,
        duration: 1,
      });
    }, 1000);
  }
};


import { createProjectsSection, rightWorksButtons } from "./projects.mjs";
import { createAboutSection } from "./about.mjs";

export function toggleContent() {
  const buttons = [document.getElementById('aboutButton'), document.getElementById('worksButton')];

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      if (button.id === 'worksButton') {
        createProjectsSection();
        rightWorksButtons();
      } else if (button.id === 'aboutButton') {
        createAboutSection();
        
      }
    });
  });
}

export function toggleButtons() {
  return new Promise(resolve => {
    const buttons = [document.getElementById('aboutButton'), document.getElementById('worksButton')];
    var container = document.querySelector('.container-index.menu-opened');

    buttons[0].addEventListener('click', function () {
      container.style.setProperty('--after-height', '100vh');
      buttons[0].style.borderBottom = "1px solid black"
      container.style.setProperty('--after-height', '100vh');
      
      gsap.to(buttons[0], {
        css: {
          position: 'relative',
          top: 'calc(-100vh + 249px)',
        },
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          resolve();
        },
      });
    });

    buttons[1].addEventListener('click', function () {
      container.style.setProperty('--after-height', 'calc(100vh - 50px)');
      buttons[0].style.zIndex = "3"
      gsap.to(buttons[0], {
        css: {
          position: 'relative',
          top: 'calc(27vh - 241px)',
          
        },
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          resolve();
        },
      });
    });





  });

  
}