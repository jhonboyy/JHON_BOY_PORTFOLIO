import { CreateFlourlyContainer } from "./flourly.mjs";

export function createProjectsSection() {
  const projectsSection = document.createElement('section');
  projectsSection.id = 'works-content';
  projectsSection.innerHTML = showProjects();
  projectsSection.classList.add("projects");

  const appContainer = document.getElementById('app-container');
  appContainer.appendChild(projectsSection);

  const flourlyButton = document.getElementById("flourlyLink");

  flourlyButton.addEventListener('click', function() {
    CreateFlourlyContainer();
  });

  // Implement lazy loading for images
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  lazyImages.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    }, { once: true });
  });

  // IntersectionObserver for lazy loading
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
}

export function animateSections(section) {
  gsap.from(section, {
    opacity: 0,
    duration: 0.5,
    delay: 1.2,
    ease: 'power2.out',
  });
}

export function rightWorksButtons() {
  const buttons = [
    document.getElementById('buttonall'),
    document.getElementById('buttonpersonal'),
    document.getElementById('buttoncommercial')
  ];

  const allElements = document.querySelectorAll(".all");
  const commercialElements = document.querySelectorAll(".commercial");
  const personalElements = document.querySelectorAll(".personal");

  buttons.forEach(button => {
    button.addEventListener('click', function () {

      buttons.forEach(btn => btn.classList.remove("active"));
      
      if (button.id === 'buttonall') {
        button.classList.add("active");
        showElements(allElements);
      } else if (button.id === 'buttonpersonal') {
        button.classList.add("active");
        hideElements(commercialElements);
        showElements(personalElements);
      } else if (button.id === 'buttoncommercial') {
        button.classList.add("active");
        hideElements(personalElements);
        showElements(commercialElements);
      }
    });
  });

  function showElements(elements) {
    elements.forEach(element => element.style.display = "grid");
  }

  function hideElements(elements) {
    elements.forEach(element => element.style.display = "none");
  }
}

function showProjects() {
  return `
    ${generateNavMenu()}
    <div class="projects-wrap">
      ${generateProjects()}
    </div>
  `;
}

function generateNavMenu() {
  return `
    <nav>
      <ul class="projects-nav">
        <li><a class="button active" id="buttonall">SEE ALL</a></li>
        <li><a class="button" id="buttonpersonal">PERSONAL</a></li>
        <li><a class="button" id="buttoncommercial">COMMERCIAL</a></li>
      </ul>
    </nav>
  `;
}

function generateProject(project) {
  const { type, className, images, animations, captions } = project;
  
  const animationDivs = animations.map(src => `
    <div style="background-color: white;">
      <dotlottie-player class="player" src="${src}"></dotlottie-player>
    </div>
  `).join('');

  const imageTags = images.map(({ src, alt }) => `
    <img data-src="${src}" loading="lazy" alt="${alt}" />
  `).join('');

  if (className === 'project-solo-slider') {
    const slides = images.map(({ src, alt }) => `
      <div class="slide">
        <img src="${src}" alt="${alt}" />
      </div>
    `).join('');

    return `
      <figure class="${className} ${type}">
        <div class="slide-track">
          ${slides}
        </div>
        <figcaption>
          <p class="text-left">${captions.left}</p>
          <p class="text-right">${captions.right}</p>
        </figcaption>
      </figure>
    `;
  }

  return `
    <figure class="${className} ${type}">
      ${animationDivs}
      ${imageTags}
      <figcaption>
        <p class="text-left">${captions.left}</p>
        <p class="text-right">${captions.right}</p>
      </figcaption>
    </figure>
  `;
}

function generateProjects() {
  const projects = [
    {
      type: 'commercial all',
      className: 'project-top',
      animations: [
        './scripts/animations/jhon-boy-animation-flourly-levain.lottie',
        './scripts/animations/jhon-boy-animation-flourly-masterbrand.lottie',
        './scripts/animations/jhon-boy-animation-flourly-hydration.lottie',
        './scripts/animations/jhon-boy-animation-flourly-flour.lottie'
      ],
      images: [
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-bread-slice.svg', alt: 'cooker with a slice of bread' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-hat.svg', alt: 'cooker with a hat' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-dough-on-its-face.svg', alt: 'cooker with dough on their face' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-dough.svg', alt: 'rolling dough' },
        { src: './images/white.png' }
      ],
      captions: {
        left: 'FRAMA & TNWC - Kitchen towel 🍷🍇 <br /><a id="flourlyLink"><u>READ MORE</u></a>',
        right: 'DEC.22.2022'
      }
    },
    {
      type: 'commercial all',
      className: 'project-top',
      animations: [
        './scripts/animations/jhon-boy-animation-flourly-levain.lottie',
        './scripts/animations/jhon-boy-animation-flourly-masterbrand.lottie',
        './scripts/animations/jhon-boy-animation-flourly-hydration.lottie',
        './scripts/animations/jhon-boy-animation-flourly-flour.lottie'
      ],
      images: [
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-bread-slice.svg', alt: 'cooker with a slice of bread' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-hat.svg', alt: 'cooker with a hat' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-dough-on-its-face.svg', alt: 'cooker with dough on their face' },
        { src: './images/jhon-boy-illustration-bakken-&-baeck-flourly-dough.svg', alt: 'rolling dough' },
        { src: './images/white.png' }
      ],
      captions: {
        left: 'Bakken & Baeck - Flourly brand illustrations 🥖👨🏻‍🍳 <br /><a id="flourlyLink"><u>READ MORE</u></a>',
        right: 'DEC.22.2022'
      }
    },
    {
      type: 'personal all',
      className: 'project-grid-top',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-person-in-a-cabin-interior.svg', alt: 'Person in a cabin' },
        { src: './images/jhon-boy-illustration-bag-with-money.svg', alt: 'Bag with money in a fireplace' },
        { src: './images/jhon-boy-illustration-strike-a-match.svg', alt: 'Closeup of hands striking a match' },
        { src: './images/jhon-boy-illustration-a-cabin-refuge.svg', alt: 'A cabin from the outside' }
      ],
      captions: {
        left: 'A cabin, the new refugee 🏡🔥💶',
        right: 'NOV.11.2020'
      }
    },
    {
      type: 'personal all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-persons-boxing.svg', alt: 'two characters boxing' }
      ],
      captions: {
        left: 'The new boxing era 💥 🥊',
        right: 'NOV.04.2020'
      }
    },
    {
      type: 'commercial all',
      className: 'project-grid',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-ace-&-tate-characters-in-a-chair.svg', alt: 'one person sit in a chair and a few others around interacting with him' },
        { src: './images/jhon-boy-illustration-ace-&-tate-persons-destroying-a-canvas.svg', alt: 'persons destroying a canvas' },
        { src: './images/jhon-boy-illustration-ace-&-tate-persons-in-a-scarf.svg', alt: 'a group of persons wearing a giant scarf' },
        { src: './images/jhon-boy-illustration-ace-&-tate-a-person-carrying-stuff-walking.svg', alt: 'a person walking and carrying stuff with their hands' },
        { src: './images/jhon-boy-illustration-ace-&-tate-persons-helping-to-take-off-a-sweater.svg', alt: 'two persons helping to another person to take off a sweater' },
        { src: './images/jhon-boy-illustration-ace-&-tate-persons-with-a-voucher.svg', alt: 'a group of people holding and admiring a voucher' },
        { src: './images/jhon-boy-illustration-ace-&-tate-persons-enjoying-coffee.svg', alt: 'a person enjoying a coffe with their friends on christmas' },
        { src: './images/jhon-boy-illustration-ace-&-tate-person-in-the-sofa-christmas.svg', alt: 'a person in a sofa enjoying a christmas gift next to the tree' }
      ],
      captions: {
        left: 'Ace&Tate winter campaign 🤓👓',
        right: 'DEC.16.2020'
      }
    },
    {
      type: 'personal all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-trumpet.svg', alt: 'a flat trompet' }
      ],
      captions: {
        left: 'A trumpet 🎺',
        right: 'MAR.06.2022'
      }
    },
    {
      type: 'personal all',
      className: 'project-grid',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-hand-and-nail.svg', alt: 'closeup of a hand holding a nail in a wall' },
        { src: './images/jhon-boy-illustration-person-nailing-with-a-hammer.svg', alt: 'closeup of a hand nailing with a hammer' },
        { src: './images/jhon-boy-illustration-person-hanging-a-photo.svg', alt: 'closeup of a person hands hanging a photo in the wall' },
        { src: './images/jhon-boy-illustration-person-sitted-in-a-sofa.svg', alt: 'a room with two sofas and a person sitted in one of them' }
      ],
      captions: {
        left: 'To all of those who are gone 🚶🏻‍♂️',
        right: 'SEP.21.2020'
      }
    },
    {
      type: 'personal all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-people-playing-baseball.svg', alt: 'people playing baseball' }
      ],
      captions: {
        left: 'Baseball is pretty dangerous ⚾️🤕',
        right: 'OCT.07.2020'
      }
    },
    {
      type: 'personal all',
      className: 'project-grid',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-person-pointing-with-a-gun.svg', alt: 'person pointing to another person with a gun' },
        { src: './images/jhon-boy-illustration-person-about-to-run.svg', alt: 'two person one of them about to run' },
        { src: './images/jhon-boy-illustration-person-in-a-hole.svg', alt: 'person jumping to a hole in the other person chest' },
        { src: './images/jhon-boy-illustration-person-being-shooted.svg', alt: 'a person being shooted' },
        { src: './images/jhon-boy-illustration-person-shooted-lying-on-the-ground.svg', alt: 'a person lying on the ground with the gun' },
        { src: './images/white.png' }
      ],
      captions: {
        left: 'You\'re deadlier than a gunshot 🔫😖',
        right: 'JUL.22.2020'
      }
    },
    {
      type: 'personal all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-car-accident-fruit.svg', alt: 'a car crashing into a fruit store' }
      ],
      captions: {
        left: 'Fruitful accident 🍋🍎🍈',
        right: 'AUG.09.2020'
      }
    },
    {
      type: 'commercial all',
      className: 'project-solo-slider',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine.svg', alt: 'two persons working in a mine' },
        { src: './images/jhon-boy-illustration-wix-playground-academy-person-carrying-a-rock.svg', alt: 'persons working in a mine one of them is carrying a rock' },
        { src: './images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine-2.svg', alt: 'persons working in a mine one of them is holding a pick' },
        { src: './images/jhon-boy-illustration-wix-playground-academy-persons-helping.svg', alt: 'persons helping to go out the people inside the mine' },
        { src: './images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine.svg', alt: 'two persons working in a mine' },
        { src: './images/jhon-boy-illustration-wix-playground-academy-person-carrying-a-rock.svg', alt: 'persons working in a mine one of them is carrying a rock' }
      ],
      captions: {
        left: 'Illustration for WIX Playground Academy ✨',
        right: 'DEC.12.2021'
      }
    },
    {
      type: 'personal all',
      className: 'project-grid',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-desk-smoke-2.svg', alt: 'closeup of a hand nailing with a hammer' },
        { src: './images/jhon-boy-illustration-desk-smoke-2.svg', alt: 'closeup of a hand nailing with a hammer' },
        { src: './images/jhon-boy-illustration-desk-smoke-2.svg', alt: 'closeup of a hand nailing with a hammer' },
        { src: './images/jhon-boy-illustration-desk-smoke-2.svg', alt: 'closeup of a hand nailing with a hammer' }
      ],
      captions: {
        left: 'Een andere dag zat ik voor het notitieboekje 📖',
        right: 'JUL.16.2022'
      }
    },
    {
      type: 'commercial all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-red-cross-tenerife-mural-aids-1000-by-750.webp', alt: '' },
        { src: './images/jhon-boy-illustration-red-cross-tenerife-mural-aids-2-1000-by-750.webp', alt: '' },
      ],
      captions: {
        left: 'Red Cross Tenerife X AIDS ⛑️❤️ <br /> Credits: <a href="https://www.instagram.com/muroslibresproject/" target="_blank">Muros Libres</a>',
        right: 'DEC.01.2021'
      }
    },
    {
      type: 'personal all',
      className: 'project-grid',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-hotel-entrance-stairs.svg', alt: 'the stairs of a hotel hall' },
        { src: './images/jhon-boy-illustration-room-entrance-door.svg', alt: 'frontview of a room door' },
        { src: './images/jhon-boy-illustration-person-opening-envelope.svg', alt: 'closeup of some hands opening an envelope' },
        { src: './images/jhon-boy-illustration-telephone.svg', alt: 'telephone with four numbers' },
        { src: './images/jhon-boy-illustration-hands-rustling-paper.svg', alt: 'closeup of some hands rustling a piece of paper' },
        { src: './images/white.png' }
      ],
      captions: {
        left: 'The call 📞',
        right: 'OCT.25.2021'
      }
    },
    {
      type: 'personal all',
      className: 'project-solo',
      animations: [],
      images: [
        { src: './images/jhon-boy-illustration-persons-in-the-metro.svg', alt: 'a persons pointing to each other in the metro' }
      ],
      captions: {
        left: 'The pickpocket mafia causing chaos in the subway 🚂🥵',
        right: 'MAY.11.2020'
      }
    }
  ];

  return projects.map(generateProject).join('');
}
