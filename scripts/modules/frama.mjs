export function CreateFramaContainer() {
  const appContainer = document.getElementById('app-container');

  // Verificar si el contenedor ya existe
  let framaContainer = document.getElementById('frama-container');
  if (!framaContainer) {
    // Crear el contenedor si no existe
    framaContainer = document.createElement('section');
    framaContainer.classList.add("project-container");
    framaContainer.id = 'frama-container';
    framaContainer.innerHTML = RenderframaContainer();
    appContainer.appendChild(framaContainer);

    // Añadir el botón de cerrar y otros elementos solo si se está creando por primera vez
    const framaCloseButton = framaContainer.querySelector("#framaCloseLink");
    if (framaCloseButton) {
        framaCloseButton.addEventListener("click", function() {
            framaContainer.style.display = "none";
        });
    }
  }
}


function updatePointerEvents(screenWidth) {
  const splitRight = document.getElementById("works-content");
  if (screenWidth <= 920) {
      splitRight.style.pointerEvents = "auto";
  } else {
      splitRight.style.pointerEvents = "none";
  }
}

function RenderframaContainer() {

  return `<div class="project-container-top">
    <p class="text-left">BRANDING, ANIMATION, PRODUCT DESIGN</p>
    <p class="text-right">◷ 1 MIN READ</p>
  </div>
  <div class="project-container-mid frama">
    <p>
      <u>DO YOU LIKE WINE?</u>
      <br> 
      "Lots of winemakers talk about natural wine as a movement, meaning it has deeper undertones of finding new and more sustainable ways of working aside from just making great or hyped wines. Like any trend, there was a “threat” of it just being a trend, but in the end, it has found its presence—and continues to grow." Alfredo López.
    </p>
    <div style="grid-column-start: 1; grid-column-end: 2;">
      <dotlottie-player src="./scripts/animations/frama-animation.lottie" speed="1" loop autoplay style="position: relative; width: 80%; height: auto;" ></dotlottie-player>
    </div>
    <p style="grid-column-start: 1; grid-column-end: 2;">
      <u>HOW DOES IT WORKS</u>
      <br>
      Baking with sourdough isn't easy: it takes time, effort and, above all, great precision. frama does all the calculations for you, so that you don't have to worry about getting your measurements wrong and can instead focus on experimenting with different types of doughs.
    </p>
    <p>
      <u>PROCESS</u><br>
      The primary objective was to seek an aesthetic that exuded playfulness and joy while maintaining a clean outcome. frama is an application designed to effortlessly determine the right amount of flour required, guaranteeing a tidy experience. Our creative exploration delved into the realm of flour and the intricate process of breadmaking.<br><br> We put the focus on the ingredients, shapes, and central elements related to the baking process and made them interact with a principal character. Making bread is about transformation and  uncertainty— we start with just three ingredients and, depending on how we work, this process it can culminate in a distinct result.<br><br> We believe that it was crucial for the illustrations to capture this spirit of experimentation, transformation, and unpredictability.
    </p>
      <img src="./images/jhon-boy-illustration-frama-tnwc-2.webp" alt="hand plying with dough" />
      <img src="./images/jhon-boy-illustration-frama-tnwc-3.webp" alt="hand plying with dough" />
      <img src="./images/jhon-boy-illustration-frama-tnwc-4.webp" alt="hand plying with dough" />
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
    <a id="framaCloseLink"><u>CLOSE</u></a>
  </div>`

}