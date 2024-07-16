export function FlourlyCounter (){
    // Configuración adicional que se realiza una sola vez
    const flourlyContainer = document.getElementById("flourly-container");
    const flourlySlider = flourlyContainer.querySelector(".slider");
    const flourlyMidContainer = document.querySelector(".project-container-mid.flourly");

    const p = document.createElement("p");
    p.classList.add("counter");
    p.textContent = "1 / 3";
    flourlyMidContainer.appendChild(p);

    let currentIndex = 1;

    function updateCounter() {
        p.textContent = `${currentIndex + 1} / 3`;
    }

    flourlySlider.addEventListener("scroll", () => {
      currentIndex = Math.round(flourlySlider.scrollLeft / flourlySlider.clientWidth);
      updateCounter();
    });
}