var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const formURL = "https://script.google.com/macros/s/AKfycbxa6XGZlQan77yWNl8KjL8Fygeg55BQprtJMZQG5hQVOfw7vywg/exec?"

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  let values = 'name=' + e.target[0].value + '&email=' + e.target[1].value + '&message=' + e.target[2].value;
  let url = formURL + values;
  let xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.send();
}

window.addEventListener("load", function () {
  document.getElementById('contact-form').addEventListener("submit", processForm)
});

let noJsElements = document.getElementsByClassName("javascript-disabled");

for (let i = 0; i < noJsElements.length; i++) {
  noJsElements[i].style.display = 'none';
}
