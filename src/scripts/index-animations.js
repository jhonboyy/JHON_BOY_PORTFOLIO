import { gsap } from 'gsap';
import SplitType from 'split-type';

let resizeTimer;

export function updateAnimation() {
  if (typeof window === 'undefined') return;

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const screenWidth = window.innerWidth;
    const mobileAnimation = document.getElementById('mobileAnimation');
    const desktopAnimation = document.getElementById('desktopAnimation');

    if (mobileAnimation && desktopAnimation) {
      if (screenWidth < 600) {
        mobileAnimation.style.display = 'block';
        desktopAnimation.style.display = 'none';
      } else {
        mobileAnimation.style.display = 'none';
        desktopAnimation.style.display = 'block';
      }
    }
  }, 100);
}

export function animateLines() {
  if (typeof window === 'undefined') return;

  gsap.to(':root', {
    '--line-width': '100%',
    duration: 1,
    ease: 'power2.out',
  });
}

export function introduceAnimationOnLoad() {
  if (typeof window === 'undefined') return;

  const animationContainer = document.querySelector('.lottie-index');
  if (animationContainer) {
    gsap.from(animationContainer, {
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
      onComplete: () => {
        animationContainer.style.opacity = 1;
      },
    });
  }
}

export function animateHeader() {
  if (typeof window === 'undefined') return;

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.index');
    if (header) {
      const h1 = new SplitType(header.querySelector('h1'), { type: 'words, chars' }).chars;
      const navLinks = new SplitType(header.querySelectorAll('nav ul li a'), { type: 'words, chars' }).chars;

      const headerText = document.getElementById('headerText');
      if (headerText) {
        headerText.style.visibility = 'visible';
      }

      document.querySelectorAll('nav li a').forEach((item) => {
        item.style.visibility = 'visible';
      });

      gsap.from(h1, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(navLinks, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
      });
    } else {
      console.error('El elemento header no se encontró en el DOM.');
    }
  });
}
