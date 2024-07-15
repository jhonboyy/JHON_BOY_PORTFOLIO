// Consolidate element selections to be reused in different functions
function getElements() {
  return {
    column1: document.querySelector(".about-column-1"),
    column2: document.querySelector(".about-column-2"),
    address: document.querySelector(".address"),
    text: document.querySelector(".text"),
    signature: document.querySelector(".signature")
  };
}

// Function to adjust layout based on the width
export function adjustLayout() {
  const elements = getElements();
  const width = window.innerWidth;
  const { address, column1, column2, text, signature } = elements;

  // Verificar que todos los elementos existen
  if (address && column1 && column2 && text && signature) {
    if (width <= 920) {
      address.style.gridRowStart = "3";
      address.style.gridRowEnd = "4";
      column1.insertAdjacentElement("afterbegin", text);
      text.style.gridRowStart = "2";
      text.style.gridRowEnd = "3";
      column2.insertAdjacentElement("beforeend", signature);
      signature.style.gridRowStart = "3";
      signature.style.gridRowEnd = "4";
    } else {
      address.style.gridRowStart = "2";
      address.style.gridRowEnd = "3";
      column2.insertAdjacentElement("afterbegin", text);
      text.style.gridRowStart = "1";
      text.style.gridRowEnd = "2";
      column1.insertAdjacentElement("beforeend", signature);
      signature.style.gridRowStart = "3";
      signature.style.gridRowEnd = "4";
    }
  } else {
    console.warn("Algunos elementos no existen en 'elements'");
  }
}

// Function to handle resize event
function handleResize() {
  adjustLayout();
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);