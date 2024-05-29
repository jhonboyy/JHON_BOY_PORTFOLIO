import { updatePointerEvents } from "./lava.mjs";

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

    updatePointerEvents();

    // Añadir el botón de cerrar y otros elementos solo si se está creando por primera vez
    const framaCloseButton = framaContainer.querySelector("#framaCloseLink");
    if (framaCloseButton) {
        framaCloseButton.addEventListener("click", function() {
            framaContainer.style.display = "none";
            document.getElementById("works-content").style.pointerEvents = "auto";

        });
    }
  }

  framaContainer.style.display = "grid";

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
      This project represents the inaugural entry in the Personal Canvas series, a collaboration between <a href="http://frama.com" target="blank" ><u>FRAMA</u></a> and <a href="https://thenaturalwinecompany.com" target="blank" ><u>The Natural Wine Company</u></a>. As an artist, I crafted the playful illustration featured on a limited-edition kitchen towel, designed to complement natural wine aesthetics. Drawing inspiration from Bacco, my artwork reflects the earthy terracottas and vibrant greens of the natural landscape, infusing each piece with the spirit of traditional winemaking.</p>
    <div style="grid-column-start: 1; grid-column-end: 2;">
      <dotlottie-player src="./scripts/animations/frama-animation.lottie" speed="1" loop autoplay style="position: relative; width: 100%; height: auto;" ></dotlottie-player>
    </div>
    <p>
      <u>PROCESS</u><br>
      To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. 
      This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork.<br><br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. 
      By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. 
      The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.<br><br><a href="https://framacph.com/collections/towels/products/frama-the-natural-wine-company-kitchen-towel" target="blank" ><u>Buy the towel</u></a>
    </p>
    <img style="grid-row-start: 4; grid-row-end: 5;" src="./images/jhon-boy-illustration-frama-tnwc-2.webp" alt="hand plying with dough" />
    <img style="grid-row-start: 5; grid-row-end: 6;" src="./images/jhon-boy-illustration-frama-tnwc-3.webp" alt="hand plying with dough" />
    <img style="grid-row-start: 6; grid-row-end: 7;" src="./images/jhon-boy-illustration-frama-tnwc-4.webp" alt="hand plying with dough" />
    <p style="grid-column-start: 1; grid-column-end: 2;">
      <u>ART AND CREATIVE DIRECTION</u>
      <br>
      <a href="https://www.instagram.com/valeriestt/" target="blank" ><u>Valerie Steenhaut</u></a>
      <br>
      <a href="https://www.instagram.com/al.fr.edo.lo.pez/" target="blank" ><u>Alfredo López</u></a>
      <br>
      <br>
      <u>PRODUCT DESIGN</u>
      <br>
      <a href="https://framacph.com" target="blank" ><u>Frama</u></a>
      <br>
      <br>
      <u>CREATIVITY</u>
      <br>
      <a href="https://www.maria-elba.com" target="blank" ><u>María-Elba García</u></a>
      <br>
      <br>
      <u>ANIMATION</u>
      <br>
      <a href="https://www.instagram.com/rjgrullon/" target="blank" ><u>Rafael Grullón</u></a>
      <br>
      <br>
      <u>PHOTOGRAPHY</u>
      <br>
      <a href="http://www.migueltriano.com" target="blank" ><u>Miguel Triano</u></a>
      <br>
      <br>
    </p>
  </div>
  <div class="text-left" style="padding: 1.5vh 0 0 1.5vh; background-color: white; height: 100%; width: calc(100% - 1.5vh);">
    <a id="framaCloseLink"><u>CLOSE</u></a>
  </div>`

}