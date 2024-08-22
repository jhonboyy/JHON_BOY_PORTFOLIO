export const applyAnimation = (from, to, callback) => {
  const executeCallback = () => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  function updateCSSVariables() {
    const root = document.documentElement;
    const viewportHeight = window.innerHeight;
    
    root.style.setProperty('--slide-up-works-to', `${198 - viewportHeight}px`);
    root.style.setProperty('--slide-up-works-repeat-to', `${148 - viewportHeight}px`);
    root.style.setProperty('--slide-up-about-to', `${198 - viewportHeight}px`);
    root.style.setProperty('--slide-down-about-from', `${250 - viewportHeight}px`);
  }

  // Debounce function to limit the rate of updates
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Update CSS variables with debounce
  const debouncedUpdateCSSVariables = debounce(updateCSSVariables, 200);

  // Function to check if the device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Store initial device state
  let currentDeviceState = isMobile() ? 'mobile' : 'desktop';

  // Function to handle resizing
  const handleResize = () => {
    const newDeviceState = isMobile() ? 'mobile' : 'desktop';
    if (newDeviceState !== currentDeviceState) {
      currentDeviceState = newDeviceState;
      // Reapply the appropriate animations
      const action = actions[`${from}->${to}`];
      if (action) {
        action();
      }
    }
    // Update CSS variables
    debouncedUpdateCSSVariables();
  };

  // Add event listeners with debounce
  window.addEventListener('resize', handleResize);
  window.addEventListener('load', () => {
    updateCSSVariables();
    handleResize();
  });
  
  // Execute the function to set initial CSS variables
  updateCSSVariables();

  // Define the actions for desktop
  const desktopActions = {
    'index->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'index->works': () => {
      moveElement('aboutButton', '-50px');
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'about->works': () => {
      moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
      moveElement('aboutButton', 'var(--slide-down-about-from)');
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButtonFromAbout(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'works->about': () => {
      disablePointerEvents('aboutButton');
      moveElement('worksButton', 'var(--slide-up-works-repeat-to)');
      animateAboutButtonFromWorks(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'works->index': () => {
      resetWorksPage();
      executeCallback();
    },
    'about->index': () => {
      resetAboutPage();
      executeCallback();
    },
    'direct->works': () => {
      setBorderTop('aboutButton', '1px solid black');
      disablePointerEvents('worksButton');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'direct->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'works->works': () => {
      moveElement('aboutButton', '-50px');
      disablePointerEvents('worksButton');
      setBorderTop('aboutButton', '1px solid black');
      animateWorksButton(() => {
        showMenuImage();
        animateProjectsSection();
        executeCallback();
      });
    },
    'about->about': () => {
      disablePointerEvents('aboutButton');
      animateAboutButton(() => {
        showAboutMenuImage();
        animateAboutSection();
        executeCallback();
      });
    },
    'lava-circular->works': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      aboutButton.style.borderTop = "1px solid black";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('menuImage').style.opacity = "1";
      document.querySelector(".MenuImageContainer").classList.remove("animate-fade-in");
    },
    'works->lava-circular': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    'frama->works': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      aboutButton.style.borderTop = "1px solid black";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('menuImage').style.opacity = "1";
      document.querySelector(".MenuImageContainer").classList.remove("animate-fade-in");
    },
    'works->frama': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    'flourly->works': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      aboutButton.style.borderTop = "1px solid black";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('menuImage').style.opacity = "1";
      document.querySelector(".MenuImageContainer").classList.remove("animate-fade-in");
    },
    'works->flourly': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    'flourly->flourly': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    'lava-circular->lava-circular': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    'frama->frama': () => {
      worksButton.style.top = "calc(148px - 100vh)";
      document.getElementById('works-content').style.opacity = "1";
      document.getElementById('works-content').style.pointerEvents = "none";
    },
    
  };

  // Define the actions for mobile
  const mobileActions = {
    'index->about': () => {
      animateAboutSection();
      executeCallback();
    },
    'index->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'about->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'works->about': () => {
      animateAboutSection();
      executeCallback();
    },
    'works->index': () => {
      executeCallback();
    },
    'about->index': () => {
      executeCallback();
    },
    'direct->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'direct->about': () => {
      animateAboutSection();
      executeCallback();
    },
    'works->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'lava-circular->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'frama->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'flourly->works': () => {
      animateProjectsSection();
      executeCallback();
    },
    'works->frama': () => {
      animateProjectsSection();
      executeCallback();
    },
    'works->lava-circular': () => {
      animateProjectsSection();
      executeCallback();
    },
    'works->flourly': () => {
      animateProjectsSection();
      executeCallback();
    },
    'lava-circular->lava-circular': () => {
      animateProjectsSection();
      executeCallback();
    },
    'frama->frama': () => {
      animateProjectsSection();
      executeCallback();
    },
    'flourly->flourly': () => {
      animateProjectsSection();
      executeCallback();
    },
    'about->about': () => {
      animateAboutSection();
      executeCallback();
    }
  };

  // Function to reapply the correct actions based on the current device state
  const reapplyActions = () => {
    const actions = currentDeviceState === 'mobile' ? mobileActions : desktopActions;
    const action = actions[`${from}->${to}`];
    if (action) {
      action();
    }
  };

  // Add event listener to reapply actions on resize
  window.addEventListener('resize', debounce(reapplyActions, 200));

  // Choose actions based on device type
  const actions = currentDeviceState === 'mobile' ? mobileActions : desktopActions;

  // Execute the corresponding action
  const action = actions[`${from}->${to}`];
  if (action) {
    action();
  }
};

// Auxiliary functions
const disablePointerEvents = (elementId) => {
  document.getElementById(elementId).classList.add('no-pointer-events');
};

const moveElement = (elementId, topValue) => {
  document.getElementById(elementId).style.top = topValue;
};

const setBorderTop = (elementId, value) => {
  document.getElementById(elementId).style.borderTop = value;
};

// Animation functions with callbacks
function animateWorksButton(callback) {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.remove('animate-slide-up-works');
  worksButton.classList.add('animate-slide-up-works-repeat');
  setTimeout(callback, 1000);
}

function showMenuImage() {
  const projectsSection = document.getElementById('menuImage');
  projectsSection.classList.add('animate-fade-in');
}

function animateAboutButton(callback) {
  const aboutButton = document.getElementById('aboutButton');
  const worksButton = document.getElementById('worksButton');
  aboutButton.classList.add('animate-slide-up-about');
  worksButton.classList.add('animate-slide-up-works-repeat');
  setTimeout(callback, 1000);
}

function showAboutMenuImage() {
  const aboutImage = document.getElementById('menuImage');
  aboutImage.classList.add('animate-fade-in');
}

function animateProjectsSection() {
  const projectsSection = document.getElementById('works-content');
  projectsSection.classList.add('animate-fade-in');
}

function animateAboutSection() {
  const aboutSection = document.getElementById('about-content');
  aboutSection.classList.add('animate-fade-in');
}

function animateWorksButtonFromAbout(callback) {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.remove('animate-slide-up');
  aboutButton.classList.add('animate-slide-down-about');
  setTimeout(callback, 1000);
}

function animateAboutButtonFromWorks(callback) {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.add('animate-slide-up-about');
  setTimeout(callback, 1000);
}

function resetWorksPage() {
  const worksButton = document.getElementById('worksButton');
  worksButton.classList.remove('animate-slide-up-works');
}

function resetAboutPage() {
  const aboutButton = document.getElementById('aboutButton');
  aboutButton.classList.remove('animate-slide-up-about');
}
