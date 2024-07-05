// src/scripts/works-animations.js
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

  const projectsSection = document.getElementById('works-content');
  projectsSection.style.opacity = 0;

  setTimeout(() => {
    gsap.to(projectsSection, { opacity: 1, duration: 1 });
  }, 1000);
});
