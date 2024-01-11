const melnaButton = document.querySelector(".js-melns");
const violetaButton = document.querySelector(".js-violets");
const zilaButton = document.querySelector(".js-zils");
const dzeltenaButton = document.querySelector(".js-dzeltens");
const topNav = document.querySelector('nav');
const footerNav = document.querySelector('footer nav');


function setBackgroundColor(color) {
    topNav.style.backgroundColor = color;
    footerNav.style.backgroundColor = color; 
    localStorage.setItem('backgroundColorsilins', color);
}


melnaButton.addEventListener('click', function () {
    setBackgroundColor('rgba(51,51,51,255)');
});

violetaButton.addEventListener('click', function () {
    setBackgroundColor('rgba(142,30,146,255)');
});

zilaButton.addEventListener('click', function () {
    setBackgroundColor('rgba(4,67,110,255)');
});

dzeltenaButton.addEventListener('click', function () {
    setBackgroundColor('rgba(198,187,9,255)');
});


const storedColor = localStorage.getItem('backgroundColorsilins');
if (storedColor) {
    setBackgroundColor(storedColor);
}



let slaidInd = 0;

function slaidPar() {
    let i;
    const slaidi = document.getElementsByClassName("mySlides");

    for (i = 0; i < slaidi.length; i++) {
        slaidi[i].style.display = "none";
    }

    slaidInd++;

    if (slaidInd > slaidi.length) {
        slaidInd = 1;
    }

    slaidi[slaidInd - 1].style.display = "block";

    setTimeout(slaidPar, 5000);
}

function visSlai(n) {
    slaidInd += n;
    
    if (slaidInd > document.getElementsByClassName("mySlides").length) {
        slaidInd = 1;
    } else if (slaidInd < 1) {
        slaidInd = document.getElementsByClassName("mySlides").length;
    }

    slaidPar();
}

slaidPar();


let slideIndex = 0;


document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";


    setTimeout(showSlides, 5000);
}


function plusSlides(n) {
    slideIndex += n;

    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }

    showSlides();
}


