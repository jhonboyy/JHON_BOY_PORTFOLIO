export function CreateLavaContainer() {
  const appContainer = document.getElementById('app-container');

  // Verificar si el contenedor ya existe
  let lavaContainer = document.getElementById('lava-container');
  if (!lavaContainer) {
    // Crear el contenedor si no existe
    lavaContainer = document.createElement('section');
    lavaContainer.classList.add("project-container");
    lavaContainer.id = 'lava-container';
    lavaContainer.innerHTML = RenderlavaContainer();
    appContainer.appendChild(lavaContainer);

    // Añadir el botón de cerrar y otros elementos solo si se está creando por primera vez
    const lavaCloseButton = lavaContainer.querySelector("#lavaCloseLink");
    if (lavaCloseButton) {
        lavaCloseButton.addEventListener("click", function() {
            lavaContainer.style.display = "none";
        });
    }
  }

  lavaContainer.style.display = "grid";

}


function updatePointerEvents(screenWidth) {
  const splitRight = document.getElementById("works-content");
  if (screenWidth <= 920) {
      splitRight.style.pointerEvents = "auto";
  } else {
      splitRight.style.pointerEvents = "none";
  }
}

function RenderlavaContainer() {

  return `<div class="project-container-top">
    <p class="text-left">BRANDING, ANIMATION, VISUAL IDENTITY</p>
    <p class="text-right">◷ 4 MIN READ</p>
  </div>
  <div class="project-container-mid lava">
    <p>
      <u>ABOUT LAVA CIRCULAR</u>
      <br> 
      This project represents the inaugural entry in the Personal Canvas series, a collaboration between lava and The Natural Wine Company based in Barcelona. As an artist, I crafted the playful illustration featured on a limited-edition kitchen towel, designed to complement natural wine aesthetics. Drawing inspiration from Bacco, my artwork reflects the earthy terracottas and vibrant greens of the natural landscape, infusing each piece with the spirit of traditional winemaking.</p>
    <div style="grid-column-start: 1; grid-column-end: 2;">
      <dotlottie-player src="./scripts/animations/lava-loom.lottie" speed="1" loop autoplay style="position: relative; width: 100%; height: auto;" ></dotlottie-player>
    </div>
    <p>
      <u>PROJECT GOALS</u><br>
      To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. 
      This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork.<br><br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. 
      By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. 
      The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.<br><br><a href="https://lavacph.com/collections/towels/products/lava-the-natural-wine-company-kitchen-towel" target="blank" ><u>Buy the towel</u></a>
    </p>
    <img style="grid-row-start: 4; grid-row-end: 5;" src="./images/jhon-boy-illustration-lava-tnwc-2.webp" alt="hand plying with dough" />
    <img style="grid-row-start: 5; grid-row-end: 6;" src="./images/jhon-boy-illustration-lava-tnwc-3.webp" alt="hand plying with dough" />
    <img style="grid-row-start: 6; grid-row-end: 7;" src="./images/jhon-boy-illustration-lava-tnwc-4.webp" alt="hand plying with dough" />
    <p style="grid-column-start: 1; grid-column-end: 2;">
      <u>PROJECT MANAGEMENT</u>
      <br>
      <a href="https://www.instagram.com/valeriestt/" target="blank" ><u>Valerie Steenhaut</u></a>
      <br>
      <a href="https://www.instagram.com/al.fr.edo.lo.pez/" target="blank" ><u>Alfredo López</u></a>
      <br>
      <br>
      <u>PRODUCT DESIGN</u>
      <br>
      <a href="http://lava.com" target="blank" ><u>??????</u></a>
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
    </p>
  </div>
  <div class="text-left" style="padding: 1.5vh 0 0 1.5vh; background-color: white; height: 100%; width: calc(100% - 1.5vh);">
    <a id="lavaCloseLink"><u>CLOSE</u></a>
  </div>`

}