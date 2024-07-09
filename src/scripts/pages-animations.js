import { gsap } from 'gsap';

export function animateWorksButton() {
  const worksButton = document.getElementById('worksButton');

  gsap.to(worksButton, {
    css: {
      pointerEvents: 'none',
      top: 'calc(202px - 100vh)',
    },
    duration: 1,
    ease: 'power3.out',
  });
};

export function showMenuImage (){  
  
  const projectsSection = document.getElementById('worksImage');
  projectsSection.style.opacity = 0;

  setTimeout(() => {
    gsap.to(projectsSection, { opacity: 1, duration: 1 });
  }, 1000);
  
}

export function animateAboutButton() {
  const worksButton = document.getElementById('worksButton');
  const aboutButton = document.getElementById('aboutButton');

  gsap.to(worksButton, {
    css: {
      pointerEvents: 'none',
      top: 'calc(150px - 100vh)',
    },
    duration: 1,
    ease: 'power3.out',
  });

  gsap.to(aboutButton, {
    css: {
      pointerEvents: 'none',
      top: 'calc(201px - 100vh)',
    },
    duration: 1,
    ease: 'power3.out',
  });
}

export function showAboutMenuImage (){  
  
  const aboutImage = document.getElementById('aboutImage');
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
