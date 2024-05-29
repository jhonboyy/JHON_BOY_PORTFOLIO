import { updatePointerEvents } from "./lava.mjs";

export function CreateFlourlyContainer() {
  const appContainer = document.getElementById('app-container');

  // Verificar si el contenedor ya existe
  let flourlyContainer = document.getElementById('flourly-container');
  if (!flourlyContainer) {
    // Crear el contenedor si no existe
    flourlyContainer = document.createElement('section');
    flourlyContainer.classList.add("project-container");
    flourlyContainer.id = 'flourly-container';
    flourlyContainer.innerHTML = RenderflourlyContainer();
    appContainer.appendChild(flourlyContainer);

    updatePointerEvents();

    // Añadir el botón de cerrar y otros elementos solo si se está creando por primera vez
    const flourlyCloseButton = flourlyContainer.querySelector("#flourlyCloseLink");
    if (flourlyCloseButton) {
        flourlyCloseButton.addEventListener("click", function() {
            flourlyContainer.style.display = "none";
            document.getElementById("works-content").style.pointerEvents = "auto";
        });
    }

    // Configuración adicional que se realiza una sola vez
    const flourlySlider = flourlyContainer.querySelector(".slider");
    const flourlyMidContainer = document.querySelector(".project-container-mid.flourly");

    const p = document.createElement("p");
    p.classList.add("counter");
    p.textContent = "1 / 3";
    flourlyMidContainer.appendChild(p);

    let currentIndex = 1;

    function updateCounter() {
        p.textContent = `${currentIndex + 1} / 3`;
    }

    flourlySlider.addEventListener("scroll", () => {
      currentIndex = Math.round(flourlySlider.scrollLeft / flourlySlider.clientWidth);
      updateCounter();
    });
  }

  // Siempre asegurar que el contenedor se muestra cuando se llama a la función
  flourlyContainer.style.display = "grid";

  // Gestión del evento de redimensionamiento y verificación inicial de la visualización del contador
  const counter = document.querySelector(".counter");
  const checkDisplayCounter = () => {
    const screenWidth = window.innerWidth;
    counter.style.display = screenWidth >= 920 ? "none" : "block";
  };
  
  window.addEventListener("resize", checkDisplayCounter);
  checkDisplayCounter();
}

function RenderflourlyContainer() {

  return `<div class="project-container-top">
    <p class="text-left">BRANDING, ANIMATION, UX/UI</p>
    <p class="text-right">◷ 2 MIN READ</p>
  </div>
  <div class="project-container-mid flourly">
    <p>
      <u>WHAT IS FLOURLY</u>
      <br> 
      Flourly is a pet project that Bakken & Baeck started during the pandemic, when many of us hopped on the sourdough craze. Designed as a mobile app, Flourly aims to make learning and experimenting with sourdough a fun and easy experience.
    </p>
    <div style="grid-column-start: 1; grid-column-end: 2;">
      <dotlottie-player src="./scripts/animations/flourly-logo.lottie" speed="1" loop autoplay style="position: relative; width: 100%; height: auto;" ></dotlottie-player>
    </div>
    <p style="grid-column-start: 1; grid-column-end: 2;">
      <u>HOW DOES IT WORKS</u>
      <br>
      Baking with sourdough isn't easy: it takes time, effort and, above all, great precision. Flourly does all the calculations for you, so that you don't have to worry about getting your measurements wrong and can instead focus on experimenting with different types of doughs.
    </p>
    <div class="slider">
      <div class="slide 1"><dotlottie-player class="lottieflourly" src="./scripts/animations/flourly-phone-flour.lottie" speed="1" loop="true" autoplay="true"></dotlottie-player></div>
      <div class="slide 2"><dotlottie-player class="lottieflourly" src="./scripts/animations/flourly-phone-water.lottie" speed="1" loop="true" autoplay="true"></dotlottie-player></div>
      <div class="slide 3"><dotlottie-player class="lottieflourly" src="./scripts/animations/flourly-phone-levain.lottie" speed="1" loop="true" autoplay="true"></dotlottie-player></div>
    </div>
    <p>
      <u>PROCESS</u><br>
      The primary objective was to seek an aesthetic that exuded playfulness and joy while maintaining a clean outcome. Flourly is an application designed to effortlessly determine the right amount of flour required, guaranteeing a tidy experience. Our creative exploration delved into the realm of flour and the intricate process of breadmaking.<br><br> We put the focus on the ingredients, shapes, and central elements related to the baking process and made them interact with a principal character. Making bread is about transformation and  uncertainty— we start with just three ingredients and, depending on how we work, this process it can culminate in a distinct result.<br><br> We believe that it was crucial for the illustrations to capture this spirit of experimentation, transformation, and unpredictability.
    </p>
    <div  style="grid-column-start: 1; grid-column-end: 3;" >
      <img src="./images/jhon-boy-illustration-flourly-portfolio.svg" alt="hand plying with dough" />
    </div>
    <p>
      <u>CREATIVITY NOTES</u><br>
      From this point, we didn't want to be too attached to the concept, so we investigated shapes and abstract forms and built connections between the concepts via experimentation.
    </p>
    <div class="sketches" >
      <img src="./images/jhon-boy-sketches-flourly-2.webp" alt="hand plying with dough" />
      <img src="./images/jhon-boy-sketches-flourly-1.webp" alt="hand plying with dough" />
      <img src="./images/jhon-boy-sketches-flourly-3.webp" alt="hand plying with dough" />
    </div>
    <p style="grid-column-start: 1; grid-column-end: 2;">
      <u>CREATIVE DIRECTION</u>
      <br>
      <a href="https://www.instagram.com/olllllliie/" target="blank" ><u>Oliver O'Callaghan</u></a>
      <br>
      <a href="https://www.instagram.com/t___y___a/" target="blank" ><u>Tya Amelia</u></a>
      <br>
      <br>
      <u>PRODUCT DESIGN</u>
      <br>
      <a href="http://ndevalliere.com" target="blank" ><u>Nathalie de Vallière</u></a>
      <br>
      <br>
      <u>CREATIVITY</u>
      <br>
      <a href="https://www.maria-elba.com" target="blank" ><u>María-Elba García</u></a>
      <br>
      <br>
      <u>CHARACTER ANIMATION</u>
      <br>
      <a href="https://www.instagram.com/rjgrullon/" target="blank" ><u>Rafael Grullón</u></a>
      <br>
      <br>
      <u>LOGO/UI ANIMATION</u>
      <br>
      <a href="http://www.nicolasvittori.com" target="blank" ><u>Nicolas Vittori</u></a>
      <br>
    </p>
  </div>
  <div class="text-left" style="padding: 1.5vh 0 0 1.5vh; background-color: white; height: 100%; width: calc(100% - 1.5vh);">
    <a id="flourlyCloseLink"><u>CLOSE</u></a>
  </div>`

}