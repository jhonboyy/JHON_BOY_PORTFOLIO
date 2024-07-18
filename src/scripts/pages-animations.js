export const applyAnimation = (from, to, callback) => {
  const executeCallback = () => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  function updateCSSVariables() {
    const root = document.documentElement;
    const viewportHeight = window.innerHeight;
    
    root.style.setProperty('--slide-up-works-to', `${198 - viewportHeight}px`);
    root.style.setProperty('--slide-up-works-repeat-to', `${148 - viewportHeight}px`);
    root.style.setProperty('--slide-up-about-to', `${198 - viewportHeight}px`);
    root.style.setProperty('--slide-down-about-from', `${250 - viewportHeight}px`);
  }
  
  // Actualizar las variables CSS al redimensionar y cargar la página
  window.addEventListener('resize', updateCSSVariables);
  window.addEventListener('load', updateCSSVariables);
  
  // Ejecutar la función de actualización inmediatamente para establecer las variables iniciales
  updateCSSVariables();
  

  // Definir las acciones
  const actions = {
    'index->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'index->works': () => {
      moveElement('aboutButton', '-50px');
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'about->works': () => {
      moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
      moveElement('aboutButton', 'var(--slide-down-about-from)');
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButtonFromAbout(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'works->about': () => {
      disablePointerEvents('aboutButton');
      moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
      animateAboutButtonFromWorks(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'works->index': () => {
      resetWorksPage();
      executeCallback();
    },
    'about->index': () => {
      resetAboutPage();
      executeCallback();
    },
    'direct->works': () => {
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'direct->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'works->works': () => {
      moveElement('aboutButton', '-50px');
      disablePointerEvents('worksButton');
      setBorderTop('aboutButton', '1px solid black');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'about->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    }
  };

  // Ejecutar la acción correspondiente
  const action = actions[`${from}->${to}`];
  if (action) {
    action();
  }
};

// Funciones auxiliares
const disablePointerEvents = (elementId) => {
  document.getElementById(elementId).classList.add('no-pointer-events');
};

const moveElement = (elementId, topValue) => {
  document.getElementById(elementId).style.top = topValue;
};

const setBorderTop = (elementId, value) => {
  document.getElementById(elementId).style.borderTop = value;
};

// Funciones de Animación con callbacks
function animateWorksButton(callback) {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.remove('animate-slide-up-works');
  worksButton.classList.add('animate-slide-up-works-repeat');
  setTimeout(callback, 1000);
}

function showMenuImage() {
  const projectsSection = document.getElementById('menuImage');
  projectsSection.classList.add('animate-fade-in');
}

function animateAboutButton(callback) {
  const aboutButton = document.getElementById('aboutButton');
  const worksButton = document.getElementById('worksButton');
  aboutButton.classList.add('animate-slide-up-about');
  worksButton.classList.add('animate-slide-up-works-repeat');
  setTimeout(callback, 1000);
}

function showAboutMenuImage() {
  const aboutImage = document.getElementById('menuImage');
  aboutImage.classList.add('animate-fade-in');
}

function animateProjectsSection() {
  const projectsSection = document.getElementById('works-content');
  projectsSection.classList.add('animate-fade-in');
}

function animateAboutSection() {
  const aboutSection = document.getElementById('about-content');
  aboutSection.classList.add('animate-fade-in');
}

function animateWorksButtonFromAbout(callback) {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.remove('animate-slide-up');
  aboutButton.classList.add('animate-slide-down-about');
  setTimeout(callback, 1000);
}

function animateAboutButtonFromWorks(callback) {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.add('animate-slide-up-about');
  setTimeout(callback, 1000);
}

function resetWorksPage() {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.remove('animate-slide-up-works');
}

function resetAboutPage() {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.remove('animate-slide-up-about');
}
