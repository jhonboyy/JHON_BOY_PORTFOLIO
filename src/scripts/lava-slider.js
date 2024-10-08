document.addEventListener('DOMContentLoaded', () => {
  lavaSlider();
});

function lavaSlider() {
  let slideIndex = 1;
  showDivs(slideIndex);

  function showDivs(n) {
    const x = document.getElementsByClassName("mySlides");
    
    if (x.length === 0) {
      console.error("No elements with the class 'mySlides' found.");
      return;
    }

    // Ajustar el índice del slide si está fuera del rango
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }

    // Ocultar todos los slides
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    // Mostrar el slide actual
    x[slideIndex - 1].style.display = "block";
  }

  window.plusDivs = function (n) {
    showDivs(slideIndex += n);
  };
}
