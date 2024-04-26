function imageChange() {
  const images = document.querySelectorAll('.portrait');
  
  images.forEach(image => {
    const originalSrc = image.src;
    image.addEventListener('mouseover', function() {
      this.src = "./images/jhon-boy-illustration-portrait-2.webp";
    });
    image.addEventListener('mouseout', function() {
      this.src = originalSrc;
    });
  });
}

export function createAboutSection() {
  const aboutSection = document.createElement('section');
  aboutSection.style.width = "50vw";
  aboutSection.style.height = "100vh";
  aboutSection.style.position = "absolute";
  aboutSection.style.right = "0";
  aboutSection.id = 'about-content';
  aboutSection.innerHTML = showAbout();
  aboutSection.classList.add("about");
  
  const appContainer = document.getElementById('app-container');
  appContainer.appendChild(aboutSection);

  imageChange();
}

function showAbout (){
    return `<div class="about-column-1">
    <p>JHON BOY IS AN ARTIST EXPLORING ILLUSTRATION AND PROGRAMMING FROM TENERIFE, CANARY ISLANDS.</p>
    <address class="address">
      <p>E-MAIL: <a href="mailto:hello@jhonboy.com">HELLO@JHONBOY.COM</a><br>
        PHONE: <a href="tel:+34 615 557 451">+34 615 557 451</a>
      </p>
    </address>
    <div class="text-bottom signature">
      <p>
        GRAPHIC DESIGN & COLOURS BY <a href="https://maria-elba.com/" target="_blank">MARÍA-ELBA GARCÍA</a><br>
        TYPO BY <a href="https://abcdinamo.com/" target="_blank">DINAMO TYPEFACES</a> © 2024 JHON BOY.
      </p>
    </div>
  </div>
  <div class="about-column-2">
    <p class="text">I LIKE TO BUILD VISUAL REPRESENTATIONS OF CONTEMPORARY SCENES, USING SIMPLE CHARACTERING TO REVEAL THE NATURAL COMPLEXITY OF OUR ERA. THROUGH A MINIMALIST APPROACH, I AIM TO INVITE THE VIEWER INTO A DIALOGUE WITH THE ARTWORK, CREATING A SPACE FOR REFLECTION. MY INTENTION IS TO EVOKE A SENSE OF DISCOVERY AND EXPLORATION THAT TRANSCENDS THE BOUNDARIES OF THE VISUAL MEDIUM.</p>
    <figure class="container-portrait">
      <img class="portrait" src="./images/jhon-boy-illustration-portrait.webp" alt="portrait photo of jhon boy">
    </figure>
    <p class="description">
      JORGE GALLARDO FEBLES <br>
      BORN IN AUG.26.1994, LA LAGUNA <br>
      <br>
      STUDIOS/AGENCIES: <br>
      (ES) TNWC <br>
      (UK) REPRESENT <br>
      (IT) ALGO.TV <br>
      (AU) HIHO<br>
      (IT) ILLO.TV <br>
      (ES) CLASEBCN <br>
      (ES) FLECHER.CO<br>
      <br>
      BRANDS: <br>
      (DK) FRAMA <br>
      (IL) WIX <br>
      (CN) OPPO <br>
      (NL) ACE & TATE <br>
      (ES) RED CROSS <br>
      <br>
      EXHIBITIONS: <br>
      2019 NOORDERLICHT PARADE, ANTWERPEN <br>
      2019 HYBRID ART FAIR, MADRID <br>
      2019 URVANITY ART FAIR, MADRID <br>
      <br>
      AWARDS:<br>
      <a href="https://www.dandad.org/en/d-ad-ones-to-watch-emerging-creative-talent-new-blood-advice/" target="_blank">D&AD PORTFOLIO AWARDS (2023)</a> <br>    <br>
      PRESS: <br>
      <a href="https://www.itsnicethat.com/articles/santanasantana-jhon-boy-rafael-grullon-lava-circular-graphic-design-project-160424" target="_blank">IT'S NICE THAT (2024)</a><br>
      <a href="https://www.itsnicethat.com/articles/jhon-boy-illustration-061120" target="_blank">IT'S NICE THAT (2020)</a><br><br>
      TALKS:<br>
      <a href="https://tenerifedesignweek.com/web/#charlas" target="_blank">TENERIFE DESIGN WEEK (2023)</a> <br>
    </p>
  </div>`

}



