export function showLavaContainer(){        
    const button = document.getElementById('lavabutton');
    const closebutton = document.getElementById('lavaCloseLink')
    const lavacontainer = document.getElementById('lava-container'); // Accede al primer elemento
  
  button.addEventListener('click', function(event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace
      lavacontainer.style.display = "grid"; // Cambia el estilo de display a grid
      document.getElementById("works-content").style.pointerEvents = "none";
  
  });
  
  closebutton.addEventListener('click', function(event) {
    event.preventDefault(); // Previene la acción predeterminada del enlace
    lavacontainer.style.display = "none"; // Cambia el estilo de display a grid
    document.getElementById("works-content").style.pointerEvents = "auto";
  
  });
  
  }
  
  export function showFramaContainer(){        
    const button = document.getElementById('framaLink');
    const closebutton = document.getElementById('framaCloseLink')
    const framacontainer = document.getElementById('frama-container'); // Accede al primer elemento
  
  button.addEventListener('click', function(event) {
      document.getElementById("works-content").style.pointerEvents = "none";
      event.preventDefault(); // Previene la acción predeterminada del enlace
      framacontainer.style.display = "grid"; // Cambia el estilo de display a grid
  });
  
  closebutton.addEventListener('click', function(event) {
    document.getElementById("works-content").style.pointerEvents = "auto";
    event.preventDefault(); // Previene la acción predeterminada del enlace
    framacontainer.style.display = "none"; // Cambia el estilo de display a grid
  });
  
  }
  
  export function showFlourlyContainer(){        
    const button = document.getElementById('flourlyLink');
    const closebutton = document.getElementById('flourlyCloseLink')
    const flourlycontainer = document.getElementById('flourly-container'); // Accede al primer elemento
  
  button.addEventListener('click', function(event) {
      document.getElementById("works-content").style.pointerEvents = "none";
      event.preventDefault(); // Previene la acción predeterminada del enlace
      flourlycontainer.style.display = "grid"; // Cambia el estilo de display a grid
  });
  
  closebutton.addEventListener('click', function(event) {
    document.getElementById("works-content").style.pointerEvents = "auto";
    event.preventDefault(); // Previene la acción predeterminada del enlace
    flourlycontainer.style.display = "none"; // Cambia el estilo de display a grid
  });
  
  }

  export function rightWorksButtons() {
    const buttons = [
      document.getElementById('buttonall'),
      document.getElementById('buttonpersonal'),
      document.getElementById('buttoncommercial')
    ];
  
    const allElements = document.querySelectorAll(".all");
    const commercialElements = document.querySelectorAll(".commercial");
    const personalElements = document.querySelectorAll(".personal");
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
  
        buttons.forEach(btn => btn.classList.remove("active"));
        
        if (button.id === 'buttonall') {
          button.classList.add("active");
          showElements(allElements);
        } else if (button.id === 'buttonpersonal') {
          button.classList.add("active");
          hideElements(commercialElements);
          showElements(personalElements);
        } else if (button.id === 'buttoncommercial') {
          button.classList.add("active");
          hideElements(personalElements);
          showElements(commercialElements);
        }
      });
    });
  
    function showElements(elements) {
      elements.forEach(element => element.style.display = "grid");
    }
  
    function hideElements(elements) {
      elements.forEach(element => element.style.display = "none");
    }
  }