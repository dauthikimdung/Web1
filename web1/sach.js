var slideIndex = 0; 
function plusSlides(n) {
    clearTimeout(val);
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    clearTimeout(val);
    slideIndex = n-1;
    showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    val = setTimeout(showSlides, 3500); // Change image every 2 seconds
}
/* show2*/

function currentSlide1(n) {
    showSlides1(n);
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (n > slides.length) {n = 1}
    if (n < 1) {n = slides.length}
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active1";
    
}
/*show3*/
var slideIndex2=0;
function currentSlide2(n) {
    clearTimeout(val);
    slideIndex2 = n-1;
    showSlides2();
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    if (slideIndex2 < 1) {slideIndex2 = slides.length}

    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active1";
    val = setTimeout(showSlides2, 3000); // Change image every 2 seconds
}
