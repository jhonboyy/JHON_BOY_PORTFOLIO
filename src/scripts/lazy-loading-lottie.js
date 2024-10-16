document.addEventListener('DOMContentLoaded', () => {
    const lazyLotties = document.querySelectorAll('.lazy-lottie');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lottieContainer = entry.target;
          const lottiePlayer = lottieContainer.querySelector('LottieAnimation');
  
          // Asegúrate de que es un elemento específico del tipo correcto
          if (lottiePlayer && lottiePlayer instanceof HTMLElement) {
            const lottieSrc = lottiePlayer.getAttribute('data-src');
            if (lottieSrc) {
              lottiePlayer.setAttribute('src', lottieSrc); // Asigna el src dinámicamente
            }
          }
          
          // Añadir la clase 'loaded' para el fade-in
          lottieContainer.classList.add('loaded');
  
          // Dejar de observar este elemento, ya que ya fue cargado
          observer.unobserve(lottieContainer);
        }
      });
    });
  
    lazyLotties.forEach(lottie => {
      observer.observe(lottie);
    });
  });