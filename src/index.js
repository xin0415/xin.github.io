var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();

window.onscroll=function(){navfollow()};
var navbar=document.getElementById("navigation");
var sticky=navbar.offsetTop;

function navfollow(){
  if(window.pageYOffset>=sticky){
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }
}