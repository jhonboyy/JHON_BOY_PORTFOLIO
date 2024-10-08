document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-image');
  
    lazyImages.forEach((image) => {
      // Asegurarse de que el elemento sea tratado como HTMLImageElement
      const imgElement = image;
  
      imgElement.addEventListener('load', () => {
        imgElement.classList.add('loaded');
      });
  
      // Verificar si la imagen ya está cargada
      if (imgElement.complete) {
        imgElement.classList.add('loaded');
      }
    });
  });