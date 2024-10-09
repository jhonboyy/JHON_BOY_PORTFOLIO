document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-flourly');
    const infoText = document.getElementById('slider-info');
    const slides = document.querySelectorAll('.slide-flourly');
    
    if (!slider || !infoText || slides.length === 0) {
      console.error("Error: Elementos necesarios no encontrados para el slider flourly.");
      return; // No ejecuta el resto del script si los elementos no existen
    }

    const totalSlides = slides.length;

    slider.addEventListener('scroll', () => {
      const scrollLeft = slider.scrollLeft;
      const slideWidth = slider.clientWidth;
      const currentSlideIndex = Math.round(scrollLeft / slideWidth);

      // Actualizar el texto con el número del slide visible
      infoText.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    });
  });