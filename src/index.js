var slideIndex = 0;
var bol=true;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
  if(bol==true){
  	showtitle();
  	bol=false;
  }
}
showSlides();
function showtitle(){
	let typed = new Typed('.type', {
    strings: ["Software Engineer", "Web Developer", "IT Consultant"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
    startDelay: 1000,
    showCursor: true
  })
}

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
