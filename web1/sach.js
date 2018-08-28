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