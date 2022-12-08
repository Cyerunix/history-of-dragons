let index = 1;
showSlides(index);

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

function showDropdown() {
  let dropdown = document.getElementsByClassName("dropdownMenu")[0];
  dropdown.style.display = 'block';
}

function hideDropdown() {
  let dropdown = document.getElementsByClassName("dropdownMenu")[0];
  dropdown.style.display = 'none';
}