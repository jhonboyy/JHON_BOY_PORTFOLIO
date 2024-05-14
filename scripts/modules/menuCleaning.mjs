export function removeFirstH1Element(container) {
  const h1 = container.querySelector('h1');
  if (h1) {
      h1.remove();
  }
}

export function cleanUpIndex(buttonId) {
  const menuContainer = document.getElementById('mainContainer');
  const animationContainer = document.querySelector('.lottie-index');

  if (menuContainer && buttonId === "worksButton") {
      menuContainer.classList.add('menu-opened');
      menuContainer.classList.add('works');
      menuContainer.classList.remove('index');
      removeFirstH1Element(menuContainer);
      if (animationContainer) {
          animationContainer.remove();
      }


  } else if (menuContainer && buttonId === "aboutButton") {
      menuContainer.classList.add('menu-opened');
      menuContainer.classList.add('about');
      menuContainer.classList.remove('index');
      removeFirstH1Element(menuContainer);
      if (animationContainer) {
          animationContainer.remove();
      }

  }
}

export function ensureImageContainerExists(menuContainer) {
  let imageContainer = menuContainer.querySelector('.MenuImageContainer');
  if (!imageContainer) {
      imageContainer = document.createElement('div');
      imageContainer.classList.add("MenuImageContainer");
      menuContainer.appendChild(imageContainer);
      populateImageContainer(imageContainer);
  }
  return imageContainer;
}

export function populateImageContainer(imageContainer) {
  const imagesInfo = [{
          id: 'worksButton',
          src: './images/jhon-boy-illustration-works-page-person-resting.svg'
      },
      {
          id: 'aboutButton',
          src: './images/jhon-boy-illustration-works-page-person-upside-down.svg'
      }
  ];

  imagesInfo.forEach(info => {
      const img = document.createElement('img');
      img.src = info.src;
      img.style.display = 'none';
      img.dataset.buttonId = info.id;
      imageContainer.appendChild(img);
  });
}