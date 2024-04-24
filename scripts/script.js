///////////////////////////////////////////////////////////////////// COOKIES CONSENT ///////////////////////////////////////////////////////////

let cookies = () => {
  // Configuración de URLs de scripts de cookies
  const urlsScriptsCookies = ['https://www.googletagmanager.com/gtag/js?id=G-B7YF53PEY4'];

  // Contenido de los scripts de cookies
  function contenidoScriptsCookies() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-B7YF53PEY4');
  }

  // Selección de elementos del DOM
  const seccionCookie = document.querySelector('.cookies');
  const cookieSi = document.querySelector('.cookies__boton--si');
  const cookieNo = document.querySelector('.cookies__boton--no');

  // Método para ocultar la sección de cookies
  function ocultarCookie() {
    seccionCookie.remove();
  }

  // Método para aceptar cookies
  function aceptarCookies() {
    ocultarCookie();
    localStorage.setItem('cookie', true);
    ejecutarSiAcepta();
  }

  // Método para denegar cookies
  function denegarCookies() {
    ocultarCookie();
    localStorage.setItem('cookie', false);
  }

  // Método para ejecutar el código si se aceptan las cookies
function ejecutarSiAcepta() {
  // Cargar el script de Google Tag Manager en el encabezado
  const scriptTagManager = document.createElement('script');
  scriptTagManager.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-B7YF53PEY4');
  document.head.appendChild(scriptTagManager);

  // Lanzar los códigos de Google Tag Manager
  contenidoScriptsCookies();

  // Agregar el segundo script de Google Tag Manager después de cargar el primero
  const scriptConversion = document.createElement('script');
  scriptConversion.setAttribute('async', '');
  scriptConversion.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=AW-718135552');
  document.head.appendChild(scriptConversion);

  // Configurar y lanzar el segundo script de Google Tag Manager
  const configScript = document.createElement('script');
  configScript.setAttribute('async', '');
  configScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-718135552');
    gtag('event', 'conversion', {'send_to': 'AW-718135552/teM3CMi2qYkYEIDCt9YC'});
  `;
  document.head.appendChild(configScript);
}

  // Método para iniciar la lógica
  function iniciar() {
    // Comprobar si el usuario ha marcado una opción en el pasado
    const cookieAceptada = localStorage.getItem('cookie');
    if (cookieAceptada !== null) {
      cookieAceptada === 'true' ? aceptarCookies() : denegarCookies();
    }
  }

  // Eventos de los botones
  cookieSi.addEventListener('click', aceptarCookies, false);
  cookieNo.addEventListener('click', denegarCookies, false);

  // Devolver el objeto público
  return {
    iniciar: iniciar
  };
};

// Iniciar la lógica de cookies
const gestionCookies = cookies();
gestionCookies.iniciar();

///////////////////////////////////////////////////////////////////// CONTENT HANDLING ///////////////////////////////////////////////////////////
const appState = { currentPage: "home" };
const mobileMenu = document.getElementById("MobileMenu");
const SplitLeft = document.getElementById("splitLeft");
const SplitRight = document.getElementById("splitRight");
const About = document.querySelector(".about");
const Works = document.querySelector(".projects");
const Index = document.querySelector(".container-index");
const blackLine = document.querySelector(".left");

function updatePageContent() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let currentPage = appState.currentPage;

  if (currentPage === "home") {
    SplitLeft.style.display = "none";
    SplitRight.style.display = "none";
    Index.style.display = "grid";
    document.title = "Welcome to Jhon Boy";

  } else if (currentPage === "about") {
    Index.style.display = "none";
    SplitLeft.style.display = "grid";
    SplitRight.style.display = "grid";
    blackLine.style.setProperty("--before-height", "100vh");
  
    if (screenWidth <= 920) {
      SplitLeft.style.display = "none";
      mobileMenu.style.display = "grid";
    } else {
      SplitLeft.style.display = "grid";
      mobileMenu.style.display = "none";
    }
    About.style.display = "grid";
    Works.style.display = "none";
    document.title = "About";
  
  } else if (currentPage === "works") {
    Index.style.display = "none";
    SplitLeft.style.display = "grid";
    SplitRight.style.display = "grid";
    blackLine.style.setProperty("--before-height", "calc(100vh - 50px)");
    if (screenWidth <= 920) {
      SplitLeft.style.display = "none";
      mobileMenu.style.display = "grid";
    }
    About.style.display = "none";
    Works.style.display = "grid";
    document.title = "Works";
  }
}

window.addEventListener("DOMContentLoaded", updatePageContent);
window.addEventListener("resize", updatePageContent);

///////////////////////////////////////////////////////////////////// BUTTONS MENU ///////////////////////////////////////////////////////////
const worksButton = document.getElementById("worksButton");
const aboutButton = document.getElementById("aboutButton");
const MobileWorksButton = document.getElementById("MobileWorksButton");
const MobileAboutButton = document.getElementById("MobileAboutButton");
const IndexWorksButton = document.getElementById("IndexWorksButton");
const IndexAboutButton = document.getElementById("IndexAboutButton");
const content = document.getElementById("collapsible-content");

window.addEventListener("DOMContentLoaded", function () {


  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  function handleScreenWidthChange() {
    if (screenWidth <= 920) {
      SplitLeft.style.display = "none";
      mobileMenu.style.display = window.getComputedStyle(Index).display === "grid" ? "none" : "grid";
    
    } else {
      mobileMenu.style.display = "none";
      document.querySelector(".split.left").style.display = window.getComputedStyle(Index).display === "grid" ? "none" : "grid";
    }
    
  }
  
  function updateScreenWidth() {
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    handleScreenWidthChange();
  }
  
  updateScreenWidth(); // Inicializar screenWidth
  
  window.addEventListener("DOMContentLoaded", updateScreenWidth);
  window.addEventListener("resize", updateScreenWidth);
  
  IndexAboutButton.addEventListener("click", function (event) {
    appState.currentPage = "about";
    updatePageContent();

    aboutButton.classList.add("active");
    worksButton.classList.remove("active");
    MobileAboutButton.classList.add("active");
    MobileWorksButton.classList.remove("active");

    aboutButton.style.marginTop = "-1px";
  });

  // Evento clic para el botón "IndexWorksButton"
  IndexWorksButton.addEventListener("click", function (event) {
    appState.currentPage = "works";
    updatePageContent();

    content.classList.add("show");

    aboutButton.classList.remove("active");
    worksButton.classList.add("active");
    MobileAboutButton.classList.remove("active");
    MobileWorksButton.classList.add("active");
  });

  // Evento clic para el botón "worksButton"
  worksButton.addEventListener("click", function (event) {
    appState.currentPage = "works";
    updatePageContent();

    aboutButton.classList.remove("active");
    worksButton.classList.add("active");
    MobileAboutButton.classList.remove("active");
    MobileWorksButton.classList.add("active");

    if (content.classList.contains("show")) {
      content.style.height = "0";
      content.classList.remove("show");
      aboutButton.style.marginTop = "-1px";
    } else {
      content.style.height = "calc(100vh - 250px)"; // Altura máxima deseada para el contenido colapsable
      content.classList.add("show");
      aboutButton.style.marginTop = "0";
    }
  });

  // Evento clic para el botón "aboutButton"
  aboutButton.addEventListener("click", function (event) {
    appState.currentPage = "about";
    updatePageContent();

    aboutButton.classList.add("active");
    worksButton.classList.remove("active");
    MobileAboutButton.classList.add("active");
    MobileWorksButton.classList.remove("active");

    if (content.classList.contains("show")) {
      content.style.height = "0";
      content.classList.remove("show");
      aboutButton.style.marginTop = "-1px";
    } else {
      content.style.height = "calc(100vh - 200px)"; // Altura máxima deseada para el contenido colapsable
      content.classList.add("show");
      aboutButton.style.marginTop = "0";
    }
  });

  // Evento clic para el botón "MobileWorksButton"
  MobileWorksButton.addEventListener("click", function (event) {
    appState.currentPage = "works";
    updatePageContent();

    content.classList.add("show");
    aboutButton.style.marginTop = "0";

    aboutButton.classList.remove("active");
    worksButton.classList.add("active");
    MobileAboutButton.classList.remove("active");
    MobileWorksButton.classList.add("active");
  });

  // Evento clic para el botón "MobileAboutButton"
  MobileAboutButton.addEventListener("click", function (event) {
    appState.currentPage = "about";
    updatePageContent();

    content.classList.remove("show");
    aboutButton.style.marginTop = "-1px";

    aboutButton.classList.add("active");
    worksButton.classList.remove("active");
    MobileAboutButton.classList.add("active");
    MobileWorksButton.classList.remove("active");
  });

});

///////////////////////////////////////////////////////////////////// FLOURLY PROJECT ///////////////////////////////////////////////////////////

const flourlyContainer = document.getElementById("flourly-container");
const flourlyButton = document.getElementById("flourlyLink");
const flourlyCloseButton = document.getElementById("flourlyCloseLink");
const flourlySlider = document.querySelector(".slider");
const p = document.createElement("p");

flourlyContainer.style.display = "none";

flourlyButton.addEventListener("click", function () {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  flourlyContainer.style.display = "grid";
  SplitRight.style.pointerEvents = "none";

  if (screenWidth <= 920) {
    SplitRight.style.pointerEvents = "auto";

  } else {
    SplitRight.style.pointerEvents = "none";
  }
});

flourlyCloseButton.addEventListener("click", function () {
  
  flourlyContainer.style.display = "none";
  SplitRight.style.pointerEvents = "auto";

});

function player() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let currentIndex = 1;
  updateCounter();

  p.textContent = "1 / 3";
  p.style.gridRowStart = "5";
  p.style.gridRowEnd = "6";
  p.style.width = "100%";
  p.style.textAlign = "center";
  p.classList.add("counter");

  function updatePlayerVisibility() {
    if (screenWidth <= 920) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  }

  flourlySlider.insertAdjacentElement("afterend", p);

  updatePlayerVisibility(); // Llama a la función para establecer la visibilidad inicial.

  window.addEventListener("resize", function () {
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    updatePlayerVisibility(); // Actualiza la visibilidad en función del nuevo ancho de pantalla.
  });

  flourlySlider.addEventListener("scroll", () => {

    currentIndex = Math.round(flourlySlider.scrollLeft / flourlySlider.clientWidth);
    updateCounter();

  });

  function updateCounter() {
    p.textContent = `${currentIndex + 1} / 3`;
  }
}

window.addEventListener("DOMContentLoaded", player);
window.addEventListener("resize", player);

///////////////////////////////////////////////////////////////////// DOTLOTTIE VIDEOS ///////////////////////////////////////////////////////////

const dotlottieFlourly = document.querySelectorAll(".lottieflourly");
const dotlottieFlourlyMenu = document.querySelectorAll(".player");
const desktopPlayer = document.getElementsByClassName("desktop-player");
const mobilePlayer = document.getElementsByClassName("mobile-player");

function dotlottieplayer() {

  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 920) {
    dotlottieFlourlyMenu.forEach((item) => {
      item.speed = 1;
      item.loop = true;
      item.autoplay = true;
      item.hover = false;

      for (let i = 0; i < desktopPlayer.length; i++) {
        desktopPlayer[i].style.display = "none";
      }
  
      for (let j = 0; j < mobilePlayer.length; j++) {
        mobilePlayer[j].style.display = "block";
      }

    });
    
  } else {
    dotlottieFlourlyMenu.forEach((item) => {
      item.speed = 1;
      item.loop = true;
      item.autoplay = false;
      item.hover = true;

      for (let k = 0; k < desktopPlayer.length; k++) {
        desktopPlayer[k].style.display = "block";
      }
  
      for (let l = 0; l < mobilePlayer.length; l++) {
        mobilePlayer[l].style.display = "none";
      }

    })};
    

}

window.addEventListener("DOMContentLoaded", dotlottieplayer,);
window.addEventListener("resize", dotlottieplayer);

///////////////////////////////////////////////////////////////////// BUTTONS WORKS ///////////////////////////////////////////////////////////
const allElements = document.querySelectorAll(".all");
const commercialElements = document.querySelectorAll(".commercial");
const personalElements = document.querySelectorAll(".personal");
const allbutton = document.getElementById("buttonall");
const commercialbutton = document.getElementById("buttoncommercial");
const personalbutton = document.getElementById("buttonpersonal");
const projectwraps = document.querySelector(".projects-wrap")

function hideAll() {
  allElements.forEach(function (element) {
    element.style.display = "none";
  });
}

function deactivateButtons() {
  allbutton.classList.remove("active");
  commercialbutton.classList.remove("active");
  personalbutton.classList.remove("active");
}

window.addEventListener("DOMContentLoaded", function buttonWorks() {

  allbutton.classList.add("active");

  function handleButtonClick(button, elements) {
    hideAll();
    elements.forEach(function (element) {
      element.style.display = "grid";
    });
    deactivateButtons();
    button.classList.add("active");
    
    projectwraps.scrollTo(0, 0);
  }

  commercialbutton.addEventListener("click", function (event) {
    handleButtonClick(commercialbutton, commercialElements);
  });

  personalbutton.addEventListener("click", function (event) {
    handleButtonClick(personalbutton, personalElements);
  });

  allbutton.addEventListener("click", function (event) {
    handleButtonClick(allbutton, allElements);
  });

});


///////////////////////////////////////////////////////////////////// ABOUT MOBILE CONTENT ///////////////////////////////////////////////////////////

const column1 = document.querySelector(".about-column-1");
const column2 = document.querySelector(".about-column-2");
const address = document.querySelector(".address");
const text = document.querySelector(".text");
const signature = document.querySelector(".signature");


function aboutMobile() {
  let screenWidth = window.innerWidth;

  if (screenWidth <= 920) {
    address.style.gridRowStart = "3";
    address.style.gridRowEnd = "4";
    column1.insertAdjacentElement("afterbegin", text);
    text.style.gridRowStart = "2";
    text.style.gridRowEnd = "3";
    column2.insertAdjacentElement("beforeend", signature);
    signature.style.gridRowStart = "3";
    signature.style.gridRowEnd = "4";

  } else {
    address.style.gridRowStart = "2";
    address.style.gridRowEnd = "3";
    column2.insertAdjacentElement("afterbegin", text);
    text.style.gridRowStart = "1";
    text.style.gridRowEnd = "2";
    column1.insertAdjacentElement("beforeend", signature);
    signature.style.gridRowStart = "3";
    signature.style.gridRowEnd = "4";


  }
}

window.addEventListener("DOMContentLoaded", aboutMobile);
window.addEventListener("resize", aboutMobile);