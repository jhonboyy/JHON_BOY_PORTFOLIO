// Función Principal para Aplicar Animaciones
export const applyAnimation = (from, to, callback) => {
  const executeCallback = () => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  if (from === 'index' && to === 'about') {
    animateAboutButton();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').classList.add('no-pointer-events');
    executeCallback();
  } else if (from === 'index' && to === 'works') {
    animateWorksButton();
    showMenuImage();
    document.getElementById('worksButton').classList.add('no-pointer-events');
    animateProjectsSection();
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    executeCallback();
  } else if (from === 'about' && to === 'works') {
    animateWorksButtonFromAbout();
    showMenuImage();
    animateProjectsSection();
    document.getElementById('worksButton').classList.add('no-pointer-events');
    executeCallback();
  } else if (from === 'works' && to === 'about') {
    animateAboutButtonFromWorks();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').classList.add('no-pointer-events');
    executeCallback();
  } else if (from === 'works' && to === 'index') {
    resetWorksPage();
    executeCallback();
  } else if (from === 'about' && to === 'index') {
    resetAboutPage();
    executeCallback();
  } else if (from === 'direct' && to === 'works') {
    animateWorksButton();
    showMenuImage();
    document.getElementById('worksButton').classList.add('no-pointer-events');
    animateProjectsSection();
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    executeCallback();
  } else if (from === 'direct' && to === 'about') {
    animateAboutButton();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').classList.add('no-pointer-events');
    executeCallback();
  } else if (from === 'works' && to === 'works') {
    animateWorksButton();
    showMenuImage();
    document.getElementById('worksButton').classList.add('no-pointer-events');
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    animateProjectsSection();
    executeCallback();
  } else if (from === 'about' && to === 'about') {
    animateAboutButton();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').classList.add('no-pointer-events');
    executeCallback();
  }
};

// Funciones de Animación
function animateWorksButton() {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.add('animate-slide-up');
}

function showMenuImage() {
  const projectsSection = document.getElementById('menuImage');
  projectsSection.classList.add('animate-fade-in');
}

function animateAboutButton() {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.add('animate-slide-up');
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

function animateWorksButtonFromAbout() {
  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');
  worksButton.classList.add('animate-slide-up');
  aboutButton.classList.add('animate-slide-up');
}

function animateAboutButtonFromWorks() {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.add('animate-slide-up');
}

function resetWorksPage() {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.remove('animate-slide-up');
}

function resetAboutPage() {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.remove('animate-slide-up');
}
