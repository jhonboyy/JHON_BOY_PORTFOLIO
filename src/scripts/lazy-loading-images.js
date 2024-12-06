document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('.lazy-image');
  const loadedImages = JSON.parse(localStorage.getItem('loadedImages')) || [];

  lazyImages.forEach((image) => {
    const imageUrl = image.src;

    // Si la imagen ya está en localStorage o está marcada como completa
    if (loadedImages.includes(imageUrl) || image.complete) {
      image.classList.add('loaded', 'no-animation'); // Añadir clase no-animation
      image.setAttribute('data-loaded', 'true');

      // Eliminar el atributo loading="lazy"
      image.removeAttribute('loading');
      return;
    }

    // Escuchar el evento 'load' para nuevas imágenes
    image.addEventListener('load', () => {
      if (!image.hasAttribute('data-loaded')) {
        image.classList.add('loaded');
        image.setAttribute('data-loaded', 'true');

        // Guardar en localStorage
        loadedImages.push(imageUrl);
        localStorage.setItem('loadedImages', JSON.stringify(loadedImages));

        // Eliminar el atributo loading="lazy" después de cargar
        image.removeAttribute('loading');
      }
    });
  });
});