let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-pro");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}

// const html = document.querySelector('.fa-html5')

// console.log('ada')

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("ul-navbar");
console.log('aman aja bre')
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  
});
