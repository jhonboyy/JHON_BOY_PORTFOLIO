import { gsap } from 'gsap';

export function animateWorksButton() {
  const worksButton = document.getElementById('worksButton');

  gsap.to(worksButton, {
    css: {
      pointerEvents: 'none',
      top: 'calc(199px - 100vh)',
    },
    duration: 1,
    ease: 'power3.out',
  });
}