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

  lavaSlider();
}


function updatePointerEvents(screenWidth) {
  const splitRight = document.getElementById("works-content");
  if (screenWidth <= 920) {
      splitRight.style.pointerEvents = "auto";
  } else {
      splitRight.style.pointerEvents = "none";
  }
}

function lavaSlider(){
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  window.plusDivs = function(n) {
    showDivs(slideIndex += n);
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
    <br> This project represents the inaugural entry in the Personal Canvas series, a collaboration between lava and The Natural Wine Company based in Barcelona. As an artist, I crafted the playful illustration featured on a limited-edition kitchen towel, designed to complement natural wine aesthetics. Drawing inspiration from Bacco, my artwork reflects the earthy terracottas and vibrant greens of the natural landscape, infusing each piece with the spirit of traditional winemaking.
  </p>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-loom.lottie" speed="1" loop autoplay style="position: relative; width: 100%; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>PROJECT GOALS</u>
    <br> To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork. <br>
    <br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.
  </p>
  <br>
  <div style="display:grid; grid-template-columns: 2fr 1.3fr 1.3fr; gap: 5px; width: 120%;">
    <img src="./images/jhon-boy-lava-circular-3.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-1.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-2.webp" alt="hand plying with dough" />
  </div>
  <p>
    <u>PROJECT GOALS</u>
    <br> To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork. <br>
    <br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.
  </p>
  <br>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-milkmaid.lottie" speed="1" loop autoplay style="position: relative; width: 70%; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>PROJECT GOALS</u>
    <br> To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork. <br>
    <br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.
  </p>
  <br>
  <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 5px; height:max-content; width: 110%;">
    <img src="./images/jhon-boy-lava-circular-5.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-4.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-7.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-6.webp" alt="hand plying with dough" />
  </div>
  <p>
    <u>PROJECT GOALS</u>
    <br> To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork. <br>
    <br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.
  </p>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-drum.lottie" speed="1" loop autoplay style="position: relative; width: 70%; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>PROJECT GOALS</u>
    <br> To add a dynamic touch to the static illustration, I incorporated subtle animation that introduces gentle movement, enhancing the visual impact without altering the narrative. This animation serves as a complementary action, adding a layer of engagement and emphasizing the natural elements depicted in the artwork. <br>
    <br>The Personal Canvas series seeks to uncover and celebrate the intricate craft behind natural winemaking, highlighting the sustainable practices integral to this artisanal industry. By integrating traditional crafts such as weaving, glass-blowing, and winemaking, the project emphasizes the deep connection between human hands and heritage, bridging art with the innovative practices of natural wine production. The illustration and its animated extension serve not only as decorative art but also as a testament to the fusion of heritage and contemporary craftsmanship in natural winemaking.
  </p>
  <div style="display: grid; grid-template-columns: 10px 1fr 10px; gap: 10px;">
  <button style="font-size: 15px; outline: none; background-color: white; padding: 0; border: 0;" onclick="plusDivs(-1)">&lt;</button>
  <div class="w3-content w3-display-container">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-1.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-3.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-4.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-5.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-6.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-7.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-8.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-9.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-10.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-11.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-12.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-13.png" style="width:100%">
    <img class="mySlides" src="./images/jhon-boy-lava-circular-sketches-14.png" style="width:100%">
  </div>
  <button style="font-size: 15px; outline: none; background-color: white; padding: 0; border: 0;" onclick="plusDivs(+1)">&gt;</button>   
  </div>

  <p style="grid-column-start: 1; grid-column-end: 2;">
    <u>PROJECT MANAGEMENT</u>
    <br>
    <a href="https://www.instagram.com/valeriestt/" target="blank">
      <u>Valerie Steenhaut</u>
    </a>
    <br>
    <a href="https://www.instagram.com/al.fr.edo.lo.pez/" target="blank">
      <u>Alfredo López</u>
    </a>
    <br>
    <br>
    <u>PRODUCT DESIGN</u>
    <br>
    <a href="http://lava.com" target="blank">
      <u>??????</u>
    </a>
    <br>
    <br>
    <u>CREATIVITY</u>
    <br>
    <a href="https://www.maria-elba.com" target="blank">
      <u>María-Elba García</u>
    </a>
    <br>
    <br>
    <u>ANIMATION</u>
    <br>
    <a href="https://www.instagram.com/rjgrullon/" target="blank">
      <u>Rafael Grullón</u>
    </a>
    <br>
    <br>
  </p>
</div>
<div class="text-left" style="padding: 1.5vh 0 0 1.5vh; background-color: white; height: 100%; width: calc(100% - 1.5vh);">
  <a id="lavaCloseLink">
    <u>CLOSE</u>
  </a>
</div>`

}