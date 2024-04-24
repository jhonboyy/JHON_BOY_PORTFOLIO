let resizeTimer;

export function updateAnimation() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    const screenWidth = window.innerWidth;
    const animationContainer = document.querySelector('.container-test-index');
    let animationHTML;

    if (screenWidth < 600) {
      animationHTML = `<dotlottie-player src="./scripts/animations/jhon-boy-animation-index-mobile.lottie" background="white" speed="1" style="position: relative; width:100%; height: auto;" loop autoplay></dotlottie-player>`;
    } else {
      animationHTML = `<dotlottie-player src="./scripts/animations/jhon-boy-animation-index.lottie" background="white" speed="1" style="position: relative; width:100%; height: auto;" loop autoplay></dotlottie-player>`;
    }

    animationContainer.innerHTML = animationHTML;
  }, 1);
}

export function animateLines() {
  gsap.to(':root', {
    '--line-width': '100%',
    duration: 1,
    ease: 'power2.out',
  });
}

export function introduceAnimationOnLoad () {
  const animationContainer = document.querySelector('.container-test-index');

  if (animationContainer) {
    TweenMax.from(animationContainer, 1, {
      opacity: 0,
      ease: Power1.easeInOut,
      onComplete: () => {
        animationContainer.style.opacity = 1;
      },
    });
  }
};

export function animateHeader () {
  const header = document.querySelector('.container-index');
  const h1 = new SplitType(header.querySelector('h1'), { type: 'words,chars' }).chars;
  const navLinks = new SplitType(header.querySelectorAll('nav ul li a'), { type: 'words,chars' }).chars;

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
};

export function index() { 
  return `
  <header class="container-index" id="mainContainer">
    <h1 style="height: 51px;"></h1>
    <div class="container-test-index"></div>
    <nav>
      <ul>
        <li id="IndexWorksButton" ><a></a></li>
        <li id="IndexAboutButton" ><a></a></li>
        <li><a href="mailto:hello@jhonboy.com"></a></li>
        <li><a href="https://github.com/jhonboyy" target="_blank"></a></li>
        <li><a href="https://www.instagram.com/jhon_boy" target="_blank"></a></li>
      </ul>
    </nav>
  </header>
  `;
}

export function writeText() { 
  return `
  <header class="container-index" id="mainContainer">
    <h1 style="height: 51px;">WELCOME TO JHON BOY</h1>
    <div class="container-test-index"></div>
    <nav>
      <ul>
        <li id="worksButton" ><a>WORKS</a></li>
        <li id="aboutButton" ><a>ABOUT</a></li>
        <li><a href="mailto:hello@jhonboy.com">CONTACT</a></li>
        <li><a href="https://github.com/jhonboyy" target="_blank">GITHUB</a></li>
        <li><a href="https://www.instagram.com/jhon_boy" target="_blank">INSTAGRAM</a></li>
      </ul>
    </nav>
  </header>
  `;
}