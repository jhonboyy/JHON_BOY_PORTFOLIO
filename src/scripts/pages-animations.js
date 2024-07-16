import { gsap } from 'gsap';

// Función Principal para Aplicar Animaciones
// Apply Animation Function
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
    document.getElementById('aboutButton').style.pointerEvents = "none";
    aboutButton.setAttribute('aria-hidden', 'true');
    executeCallback();
  } else if (from === 'index' && to === 'works') {
    animateWorksButton();
    showMenuImage();
    document.getElementById('worksButton').style.pointerEvents = "none";
    worksButton.setAttribute('aria-hidden', 'true');
    animateProjectsSection();
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    executeCallback();
  } else if (from === 'about' && to === 'works') {
    animateWorksButtonFromAbout();
    showMenuImage();
    animateProjectsSection();
    document.getElementById('worksButton').style.pointerEvents = "none";
    worksButton.setAttribute('aria-hidden', 'true');
    executeCallback();
  } else if (from === 'works' && to === 'about') {
    animateAboutButtonFromWorks();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').style.pointerEvents = "none";
    aboutButton.setAttribute('aria-hidden', 'true');
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
    document.getElementById('worksButton').style.pointerEvents = "none";
    worksButton.setAttribute('aria-hidden', 'true');
    animateProjectsSection();
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    executeCallback();
  } else if (from === 'direct' && to === 'about') {
    animateAboutButton();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').style.pointerEvents = "none";
    aboutButton.setAttribute('aria-hidden', 'true');
    executeCallback();
  } else if (from === 'works' && to === 'works') {
    animateWorksButton();
    showMenuImage();
    document.getElementById('worksButton').style.pointerEvents = "none";
    worksButton.setAttribute('aria-hidden', 'true');
    document.getElementById('aboutButton').style.borderTop = "1px solid black";
    animateProjectsSection();
    executeCallback();
  } else if (from === 'about' && to === 'about') {
    animateAboutButton();
    showAboutMenuImage();
    animateAboutSection();
    document.getElementById('aboutButton').style.pointerEvents = "none";
    aboutButton.setAttribute('aria-hidden', 'true');
    executeCallback();
  }
};

// Funciones de Animación
export function animateWorksButton() {
  const worksButton = document.getElementById('worksButton');
  gsap.to(worksButton, {
    css: { top: 'calc(202px - 100vh)' },
    duration: 1,
    ease: 'power3.out',
  });
}

export function showMenuImage() {
  const projectsSection = document.getElementById('menuImage');
  projectsSection.style.opacity = 0;
  setTimeout(() => {
    gsap.to(projectsSection, { opacity: 1, duration: 1 });
  }, 1000);
}

export function animateAboutButton() {
  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');
  gsap.to(worksButton, {
    css: { top: 'calc(150px - 100vh)' },
    duration: 1,
    ease: 'power3.out',
  });
  gsap.to(aboutButton, {
    css: { top: 'calc(201px - 100vh)' },
    duration: 1,
    ease: 'power3.out',
  });
}

export function showAboutMenuImage() {
  const aboutImage = document.getElementById('menuImage');
  aboutImage.style.opacity = 0;
  setTimeout(() => {
    gsap.to(aboutImage, { opacity: 1, duration: 1 });
  }, 1000);
}

export function animateProjectsSection() {
  const projectsSection = document.getElementById('works-content');
  setTimeout(() => {
    gsap.to(projectsSection, { opacity: 1, duration: 1 });
  }, 1000);
}

export function animateAboutSection() {
  const aboutSection = document.getElementById('about-content');
  setTimeout(() => {
    gsap.to(aboutSection, { opacity: 1, duration: 1 });
  }, 1000);
}

export function animateWorksButtonFromAbout() {
  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');
  
  aboutButton.style.top = 'calc(200px - 100vh)';
  worksButton.style.top = 'calc(150px - 100vh)';
  aboutButton.style.position = 'absolute';
  aboutButton.style.borderTop = '1px solid black';
  aboutButton.style.zIndex = '10';

  gsap.to(aboutButton, {
    css: { 
      top: '-50px',
  },
    duration: 1,
    ease: 'power3.out',
  });

}

export function animateAboutButtonFromWorks() {
  const aboutButton = document.getElementById('aboutButton');
  const worksButton = document.getElementById('worksButton');
  worksButton.style.top = 'calc(150px - 100vh)'

  gsap.to(aboutButton, {
    css: { top: 'calc(201px - 100vh)' },
    duration: 1,
    ease: 'power3.out',
  });

}

export function resetWorksPage() {
  const worksButton = document.getElementById('worksButton');
  gsap.to(worksButton, {
    css: { top: 'initial' },
    duration: 0.5,
    ease: 'power3.in',
  });
}

export function resetAboutPage() {
  const aboutButton = document.getElementById('aboutButton');
  gsap.to(aboutButton, {
    css: { top: 'initial' },
    duration: 0.5,
    ease: 'power3.in',
  });
}

export function animateWorksDirect() {
  const worksButton = document.getElementById('worksButton');
  gsap.fromTo(worksButton, { opacity: 0 }, { opacity: 1, duration: 1 });
}