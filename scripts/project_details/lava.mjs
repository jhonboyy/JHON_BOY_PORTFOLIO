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

    updatePointerEvents();

    // Añadir el botón de cerrar y otros elementos solo si se está creando por primera vez
    const lavaCloseButton = lavaContainer.querySelector("#lavaCloseLink");
    if (lavaCloseButton) {
        lavaCloseButton.addEventListener("click", function() {
            lavaContainer.style.display = "none";
            document.getElementById("works-content").style.pointerEvents = "auto";
            
        });
    }
  }

  lavaContainer.style.display = "grid";

  lavaSlider();
}


export function updatePointerEvents() {
  const splitRight = document.getElementById("works-content");
  if (window.innerWidth <= 920) {
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
    <u>LAVA CIRCULAR</u>
    <br> 
    Interdisciplinary Cultural Circuit on the Island of El Hierro (Canary Islands). Active since 2017, it offers a journey to discover the territory by visiting its three municipalities (Valverde, El Pinar, and La Frontera)
     through evolving itineraries where the program unfolds; musical projects, workshop-talks, and artistic actions that revolve around the traditional and contemporary culture of the Canary archipelago, varying its main themes in each edition.<br><br>
     Various creatives present projects and initiatives that energize unique locations on the island itself. A close encounter and participatory event that generates exchanges of knowledge among participant-artists, attendees, and local residents.
  </p>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-loom.json" speed="1" loop autoplay style="position: relative; width: 100%; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>PROJECT GOALS(I)</u><br>
    The Canary Islands have a rich history spanning thousands of years, with indigenous
civilisations predating European arrival in the 15th century. While the territory and its people
have evolved over time through cultural exchanges, the essence remains rooted in this mix.
Despite limited evidence of this past in the modern era, preserving our heritage is crucial.
Santana Santana, from Gran Canaria, approached me to explore our ancestral history,
recognising the importance of understanding our roots for shaping the future. <br><br>
We aimed to depict the three primary traditional trades in El Hierro: drum artisans, weaver
artisans, and cheese artisans. These occupations were central to the island's economy in the
mid-20th century and symbolise its cultural heritage.
   
  </p>
  <br>
  <div class="lava-img">
    <img src="./images/jhon-boy-lava-circular-3.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-1.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-2.webp" alt="hand plying with dough" />
  </div>
  <p>
    <u>PROJECT GOALS(II)</u><br>
    We watched numerous videos of artisans at work and endeavoured to distill their movements
into minimal expressions. Rafa had a keen eye for this and was able to replicate it while also
considering the composition of the drawings, playing with all elements within each scene to
convey a sense of coherence.
  </p>
  <br>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-milkmaid.json" speed="1" loop autoplay style="position: relative; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>GRAPHIC ELEMENTS</u>
    <br> 
    In addition to the captivating animations and illustrations, typography assumes a
pivotal role in shaping the overall visual narrative. Employing the Droulers font —crafted
by the esteemed Bureau Brut foundry—, adds a distinct layer of character to the
composition. This monospaced typeface exudes a remarkable personality,
distinguished by its intricate ornamental flourishes. These embellishments not only
lend a touch of sophistication but also forge a compelling visual interplay, seamlessly
juxtaposing the illustrations' language with an undeniable coherence.
<br>
  </p>
  <br>
  <div class="lava-img-2">
    <img src="./images/jhon-boy-lava-circular-5.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-4.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-7.webp" alt="hand plying with dough" />
    <img src="./images/jhon-boy-lava-circular-6.webp" alt="hand plying with dough" />
  </div>
  <p>
    <u>DRAWING</u>
    <br>
    One of the primary challenges in the illustration aspect was infusing a sense of playfulness.
Working with a limited color palette compelled me to focus on body shapes for expression. I
opted for slightly thicker and larger bodies, as individuals from rural areas are often robust and
sturdy. This deliberate disproportionality aimed to capture their physical presence
authentically.<br><br>
To inject a playful vibe, I experimented with perspectives, resulting in drawings that feel
whimsically odd yet visually coherent. Notably, the characters' faces are not visible,
emphasising their profession or activity, adding an intriguing layer to the illustrations.
  </p>
  <div style="grid-column-start: 1; grid-column-end: 2;">
    <dotlottie-player src="./scripts/animations/lava-drum.json" speed="1" loop autoplay style="position: relative; height: auto;"></dotlottie-player>
  </div>
  <p>
    <u>SKETCHES</u>
    <br>
    One particularly beautiful and interesting aspect was the process of creating the illustrations.
Many of them were drawn during my time in La Gomera. I decided to spend the
summer exploring the island and stayed in a sustainable cabin in the heart of Valle Hermoso.
Each night, we were serenaded by the chirping of crickets, fully immersed in nature. I often
found myself sketching by the sea, accompanied by the rhythmic crash of waves, or amidst the
tranquil mountains.<br><br>
My grandfather belonged to the last
generation of residents in Las Palmas de Anaga, one of Tenerife's most remote villages. Growing
up, I witnessed firsthand the toil of rural life—watching my grandfather craft cheese and
observing elders weaving fabrics or carrying potato bags. This upbringing deeply roots me in
the land and its traditions.
  </p>
  <br>
  <br>
  <div class="lava-sketches">
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
  <br>
  <br>
  <p style="grid-column-start: 1; grid-column-end: 2;">
  <u>PROJECT</u>
  <br>
  <a href="http://lavacircular.com" target="blank">
    <u>Lava Circular</u>
  </a>
  <br>
  <br>
  <u>ORGANIZERS</u>
  <br>
  <a href="http://hisla.org" target="blank">
    <u>Hisla</u>
  </a>
  <br>
  <br>
    <u>ART DIRECTION</u>
    <br>
    <a href="https://santanasantana.es" target="blank">
      <u>Santanasantana Studio</u>
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
    <u>PHOTOGRAPHY</u>
    <br>
    <a href="https://www.adririos.com" target="blank">
      <u>Adrián Ríos</u>
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