  
  export function updatePointerEvents() {
    const splitRight = document.getElementById("works-content");
    if (window.innerWidth <= 920) {
        splitRight.style.pointerEvents = "auto";
    } else {
        splitRight.style.pointerEvents = "none";
    }
  }
  
  export function lavaSlider() {
    var slideIndex = 1;
    showDivs(slideIndex);
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
    }
  
    window.plusDivs = function(n) {
      showDivs(slideIndex += n);
    }
  }
  