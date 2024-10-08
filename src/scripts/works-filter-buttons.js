function rightWorksButtons() {
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

  rightWorksButtons();