let index = 1;
showSlides(index);

$(function() {
  $(".prevButton").on("click", function() {
    changeSlide(-1);
  });
  $(".nextButton").on("click", function() {
    changeSlide(1);
  });
})

// Next/previous controls
function changeSlide(n) {
  showSlides(index += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideShow");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}