var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
  
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(typeof slides + " " + slides.length);

  
  if (n > slides.length) {
    slideIndex = 1;
  }
 
  if (n < 1) {
    slideIndex = slides.length;
  }

  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }

  slides[slideIndex - 1].style.display = "block";
  
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function (e) {
  
  if (e.keyCode == 123) {
    return false;
  }

  
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }

  
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }

  
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
};
