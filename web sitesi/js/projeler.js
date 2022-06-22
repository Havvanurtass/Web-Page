function openImg() {
  document.getElementById("myImg").style.display = "block";
};
function closeImg() {
   document.getElementById("myImg").style.display = "none";
};
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
       document.getElementById("myImg").style.display = "none";
	}
});

var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
};
function clickSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modalSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}