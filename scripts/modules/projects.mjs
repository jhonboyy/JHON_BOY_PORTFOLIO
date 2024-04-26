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
        <nav>
          <ul class="projects-nav">
            <li><a class="button active" id="buttonall">SEE ALL</a></li>
            <li><a class="button" id="buttonpersonal">PERSONAL</a></li>
            <li><a class="button" id="buttoncommercial">COMMERCIAL</a></li>
          </ul>
        </nav>
        <div class="projects-wrap">
          <figure class="project-top commercial all">
            <div style="background-color: white;">
              <dotlottie-player class="player" src="./scripts/animations/jhon-boy-animation-flourly-levain.lottie"></dotlottie-player>
            </div>
            <img src="./images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-bread-slice.svg" alt="cooker with a slice of bread" />
            <div  style="background-color: white;">
              <dotlottie-player class="player" src="./scripts/animations/jhon-boy-animation-flourly-masterbrand.lottie"></dotlottie-player>
            </div>
            <img src="./images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-a-hat.svg" alt="cooker with a hat" />
            <div  style="background-color: white;">
              <dotlottie-player class="player" src="./scripts/animations/jhon-boy-animation-flourly-hydration.lottie"></dotlottie-player>
            </div>
            <img src="./images/jhon-boy-illustration-bakken-&-baeck-flourly-cooker-with-dough-on-its-face.svg" alt="cooker with dough on their face" />
            <img src="./images/jhon-boy-illustration-bakken-&-baeck-flourly-dough.svg" alt="rolling dough" />
            <div style="background: white;"></div>
            <div style="background-color: white;">
              <dotlottie-player class="player" src="./scripts/animations/jhon-boy-animation-flourly-flour.lottie"></dotlottie-player>
            </div>
            <figcaption>
              <p class="text-left"> Bakken & Baeck - Flourly brand illustrations 🥖👨🏻‍🍳 <br />
                <a id="flourlyLink"><u>READ MORE</u></a>
              </p>
              <p class="text-right">DEC.22.2022</p>
            </figcaption>
          </figure>
          <figure class="project-grid-top personal all">
            <img src="./images/jhon-boy-illustration-person-in-a-cabin-interior.svg" alt="Person in a cabin" />
            <img src="./images/jhon-boy-illustration-bag-with-money.svg" alt="Bag with money in a fireplace" />
            <img src="./images/jhon-boy-illustration-strike-a-match.svg" alt="Closeup of hands striking a match" />
            <img src="./images/jhon-boy-illustration-a-cabin-refuge.svg" alt="A cabin from the outside" />
            <figcaption>
              <p class="text-left">A cabin, the new refugee 🏡🔥💶</p>
              <p class="text-right">NOV.11.2020</p>
            </figcaption>
          </figure>
          <figure class="project-solo personal all">
            <img src="./images/jhon-boy-illustration-persons-boxing.svg" alt="two characters boxing" />
            <figcaption>
              <p class="text-left">The new boxing era 💥 🥊</p>
              <p class="text-right">NOV.04.2020</p>
            </figcaption>
          </figure>
          <figure class="project-grid commercial all">
            <img src="./images/jhon-boy-illustration-ace-&-tate-characters-in-a-chair.svg" loading="lazy" alt="one person sit in a chair and a few others around interacting with him" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-persons-destroying-a-canvas.svg" loading="lazy" alt="persons destroying a canvas" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-persons-in-a-scarf.svg" loading="lazy" alt="a group of persons wearing a giant scarf" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-a-person-carrying-stuff-walking.svg" loading="lazy" alt="a person walking and carrying stuff with their hands" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-persons-helping-to-take-off-a-sweater.svg" loading="lazy" alt="two persons helping to another person to take off a sweater" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-persons-with-a-voucher.svg" loading="lazy" alt="a group of people holding and admiring a voucher" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-persons-enjoying-coffee.svg" loading="lazy" alt="a person enjoying a coffe with their friends on christmas" />
            <img src="./images/jhon-boy-illustration-ace-&-tate-person-in-the-sofa-christmas.svg" loading="lazy" alt="a person in a sofa enjoying a christmas gift next to the tree" />
            <figcaption class=" commercial all">
              <p class="text-left">Ace&Tate winter campaign 🤓👓</p>
              <p class="text-right">DEC.16.2020</p>
            </figcaption>
          </figure>
          <figure class="project-solo personal all">
            <img src="./images/jhon-boy-illustration-trumpet.svg" loading="lazy" alt="a flat trompet" />
            <figcaption>
              <p class="text-left">A trumpet 🎺</p>
              <p class="text-right">MAR.06.2022</p>
            </figcaption>
          </figure>
          <figure class="project-grid personal all">
            <img src="./images/jhon-boy-illustration-hand-and-nail.svg" loading="lazy" alt="closeup of a hand holding a nail in a wall" />
            <img src="./images/jhon-boy-illustration-person-nailing-with-a-hammer.svg" loading="lazy" alt="closeup of a hand nailing with a hammer" />
            <img src="./images/jhon-boy-illustration-person-hanging-a-photo.svg" loading="lazy" alt="closeup of a person hands hanging a photo in the wall" />
            <img src="./images/jhon-boy-illustration-person-sitted-in-a-sofa.svg" loading="lazy" alt="a room with two sofas and a person sitted in one of them" />
            <figcaption>
              <p class="text-left">To all of those who are gone 🚶🏻‍♂️</p>
              <p class="text-right">SEP.21.2020</p>
            </figcaption>
          </figure>
          <figure class="project-solo personal all">
            <img src="./images/jhon-boy-illustration-people-playing-baseball.svg" loading="lazy" alt="people playing baseball" />
            <figcaption>
              <p class="text-left">Baseball is pretty dangerous ⚾️🤕</p>
              <p class="text-right">OCT.07.2020</p>
            </figcaption>
          </figure>
          <figure class="project-grid personal all">
            <img src="./images/jhon-boy-illustration-person-pointing-with-a-gun.svg" loading="lazy" alt="person pointing to another person with a gun" />
            <img src="./images/jhon-boy-illustration-person-about-to-run.svg" loading="lazy" alt="two person one of them about to run" />
            <img src="./images/jhon-boy-illustration-person-in-a-hole.svg" loading="lazy" alt="person jumping to a hole in the other person chest" />
            <img src="./images/jhon-boy-illustration-person-being-shooted.svg" loading="lazy" alt="a person being shooted" />
            <img src="./images/jhon-boy-illustration-person-shooted-lying-on-the-ground.svg" loading="lazy" alt="a person lying on the ground with the gun" />
            <div style="background: white;"></div>
            <figcaption>
              <p class="text-left">You're deadlier than a gunshot 🔫😖</p>
              <p class="text-right">JUL.22.2020</p>
            </figcaption>
          </figure>
          <figure class="project-solo personal all">
            <img src="./images/jhon-boy-illustration-car-accident-fruit.svg" loading="lazy" alt="a car crashing into a fruit store" />
            <figcaption>
              <p class="text-left">Fruitful accident 🍋🍎🍈</p>
              <p class="text-right">AUG.09.2020</p>
            </figcaption>
          </figure>
          <figure class="project-solo-slider commercial all">
            <div class="slide-track">
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine.svg" alt="two persons working in a mine" />
              </div>
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-person-carrying-a-rock.svg" alt="persons working in a mine one of them is carrying a rock" />
              </div>
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine-2.svg" alt="persons working in a mine one of them is holding a pick" />
              </div>
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-persons-helping.svg" alt="persons helping to go out the people inside the mine" />
              </div>
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-persons-in-a-mine.svg" alt="two persons working in a mine" />
              </div>
              <div class="slide">
                <img src="./images/jhon-boy-illustration-wix-playground-academy-person-carrying-a-rock.svg" alt="persons working in a mine one of them is carrying a rock" />
              </div>
            </div>
            <figcaption>
              <p class="text-left">Illustration for WIX Playground Academy ✨</p>
              <p class="text-right">DEC.12.2021</p>
            </figcaption>
          </figure>
          <figure class="project-grid personal all">
            <div class="svg-container">
              <object loading="lazy" aria-label="view of a desk with a candle" type="image/svg+xml" data="./images/jhon-boy-illustration-desk-smoke-1.svg" width="100%" height="100%" class="svg-content"></object>
            </div>
            <div class="svg-container">
              <object loading="lazy" aria-label="view of a desk with a candle and smoke going out from it" type="image/svg+xml" data="./images/jhon-boy-illustration-desk-smoke-2.svg" width="100%" height="100%" class="svg-content"></object>
            </div>
            <div class="svg-container">
              <object loading="lazy" aria-label="view of a desk with a candle and more smoke going out from it" type="image/svg+xml" data="./images/jhon-boy-illustration-desk-smoke-3.svg" width="100%" height="100%" class="svg-content"></object>
            </div>
            <div class="svg-container">
              <object loading="lazy" aria-label="view of a room full of smoke" type="image/svg+xml" data="./images/jhon-boy-illustration-desk-smoke-4.svg" width="100%" height="100%" class="svg-content"></object>
            </div>
            <figcaption>
              <p class="text-left">Een andere dag zat ik voor het notitieboekje 📖</p>
              <p class="text-right">JUL.16.2022</p>
            </figcaption>
          </figure>
          <figure class="project-solo commercial all">
            <div class="image-container"></div>
            <div class="image-container-2"></div>
            <figcaption>
              <p class="text-left"> Red Cross Tenerife X AIDS ⛑️❤️ <br /> Credits: <a href="https://www.instagram.com/muroslibresproject/" target="_blank">Muros Libres</a>
              </p>
              <p class="text-right">DEC.01.2021</p>
            </figcaption>
          </figure>
          <figure class="project-grid personal all">
            <img src="./images/jhon-boy-illustration-hotel-entrance-stairs.svg" loading="lazy" alt="the stairs of a hotel hall" />
            <img src="./images/jhon-boy-illustration-room-entrance-door.svg" loading="lazy" alt="frontview of a room door" />
            <img src="./images/jhon-boy-illustration-person-opening-envelope.svg" loading="lazy" alt="closeup of some hands opening an envelope" />
            <img src="./images/jhon-boy-illustration-telephone.svg" loading="lazy" alt="telephone with four numbers" />
            <img src="./images/jhon-boy-illustration-hands-rustling-paper.svg" loading="lazy" alt="closeup of some hands rustling a piece of paper" />
            <div style="background: white;"></div>
            <figcaption class="project-text personal all">
              <p class="text-left">The call 📞</p>
              <p class="text-right">OCT.25.2021</p>
            </figcaption>
          </figure>
          <figure class="project-solo personal all">
            <img src="./images/jhon-boy-illustration-persons-in-the-metro.svg" loading="lazy" alt="a persons pointing to each other in the metro" />
            <figcaption class="project-text personal all">
              <p class="text-left">The pickpocket mafia causing chaos in the subway 🚂🥵</p>
              <p class="text-right">MAY.11.2020</p>
            </figcaption>
          </figure>
        </div>`;
    }