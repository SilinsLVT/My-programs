
//Teksta izvade konsolē
console.log("Hello World!")

console.log(
    "Šī ir teksta rinda".toUpperCase()
)

console.log(
    "Šī ir vēlviena teksta rinda".toLowerCase()
)

//Matemātiska darbība
console.log(
    1 + 2 * 5 / 2 
)

//Masīvs
console.log(
    ['teksts1' , 'teksts2', 12345, "teksts 3"]
)

// Konstants masivs
const prieksmeti = ['WEB', 'DB', 'Prog. tehn.', 'Mobile APP']
console.log(
    prieksmeti[2]  //izvelas specifisku masiva elementu
)

//Objekti
console.log(
    {
        Vards: "Jānis",
        Uzvards: "Bērziņš",
        Vecums: "17"
    }
)

const adrese = { 
    valsts: "Latvija",
    novads: "Dienvidkurzemes novads",
    pilseta: "Grobiņa",
    iela: "Lielā ieal 64a"
}

console.log(  //paņem konkrētu objektu no adrese
    adrese.iela
)

let skaitlis1 = 1       // let(mainīgais). Senāk izmantoja var
let skaitlis2 = 88


console.log(skaitlis1+skaitlis2)  //saskaita kopa 2 elementus

skaitlis2 = 33  //pectam var mainīt kāda mainīgā elementu

console.log(skaitlis1+skaitlis2)

const Pi = 3.14



//Funkcijas

function reizinat(){
    console.log(5*6)
}


reizinat()   //Izsauc funkciju


function dalisana(skaitlis1, skaitlis2){  //parada specifiskus mainigos
    console.log(skaitlis1/skaitlis2)
}

dalisana(45, 8)  //Pasaka ka 1. mainigais ir 45, un otrs in 8. Tos sadala "dalisana" funkcija


//Notikumi jeb events

const box = document.querySelector('.js-box')  //paņem to, kas definets idex failā
console.log(box)

box.addEventListener('mouseenter', ()=>{   // Jūt, kad ieiet kastē
    console.log("Iegāju kastē")            //Parāda konsolē, ka ieiet kastē
    box.style.background = 'purple'        //Nokrāso violetu
})


box.addEventListener('mouseleave', ()=>{
    console.log("Izgāju no kastes")
    box.style.background = ''
})


//cits veids, ka izdarit ieprieksejo

function enter(x){
    x.style.background = "pink"
}

function leave(x){
    x.style.background = ""
}


//Nosacijumi:

let vecums = 17
if(vecums>=18){
    console.log("Viņš ir pilngadīgs")
}else{
    console.log("Viņš nav pilngadīgs")
}


// FOR cikls:

const menesi = ["janvaris", "februaris", "marts", "aprilis", "maijs"]

for(i = 0; i < menesi.length; i++){
    console.log(menesi[i])
}


// Intervali:

setTimeout(function(){  //pēc laika beidzas
    console.log("Info, kas parādās pēc 2 sekundēm")
}, 2000)   //1sek-1000milisek.


let rindkopa = document.getElementById("rindkopa")


setInterval(function(){
   console.log ("Info, kas parādās pēc 3 sekundēm")
   rindkopa.innerHTML += "Info, kas parādās pēc 3 sekundēm<br>"   //Ik pēc 3 sekundēm, html lapā sāk kopēties šis teikums
}, 3000);


const interval = setInterval(function(){
    console.log ("Info, kas parādās pēc 1 sekundes")
},1000)

setTimeout(function(){   //Pēc laika apstādina intervāli
   console.log("Intervals ir beidzies")
   clearInterval(Intervals) 
},5000)

//Informācijas saglabāšanas pārlūka atmiņā:

const pinkButton = document.querySelector(".js-pink")
const grayButton = document.querySelector(".js-gray")
const burti1Button = document.querySelector(".js-burti1")
const burti2Button = document.querySelector(".js-burti2")
const body = document.querySelector('body')
const varButton = document.querySelector(".js-var")

body.style.background = localStorage.bgcolor  // pasatās mājsalapas local storage, kāda krāsa bija

document.documentElement.style.setProperty("--burtuKrasa", localStorage.textColor)

pinkButton.addEventListener('click', function(){
    body.style.background = "pink"
    localStorage.bgcolor = "pink"  // mājsalapas krātuvēsaglabā fona krasu
})

grayButton.addEventListener('click', function(){
    body.style.background = "#ccc"
    localStorage.bgcolor = "#ccc"
})

burti1Button.addEventListener('click', function(){
    document.documentElement.style.setProperty("--burtuKrasa", "white")
    localStorage.textColor = "white"
});

burti2Button.addEventListener('click', function(){
    document.documentElement.style.setProperty("--burtuKrasa", "black")
    localStorage.textColor = "black"
});

varButton.addEventListener('click', function(){
    body.style.background = "var(--burtuKrasa)"
    localStorage.bgcolor = "var(--burtuKrasa)"
})



const cilveki = ["Janis", "Andris", "Ieva"]
console.log(
    cilveki[1] 
)


const melnaButton = document.querySelector(".js-melns");
const violetaButton = document.querySelector(".js-violets");
const zilaButton = document.querySelector(".js-zils");
const dzeltenaButton = document.querySelector(".js-dzeltens");
const body = document.querySelector('body');
const topNav = document.querySelector('nav'); // Targeting the top navigation
const footerNav = document.querySelector('footer nav'); // Targeting the footer navigation

// Function to set the background color based on the button clicked
function setBackgroundColor(button, color) {
    body.style.backgroundColor = color;
    topNav.style.backgroundColor = color; // Change the top navigation background color
    footerNav.style.backgroundColor = color; // Change the footer navigation background color
    localStorage.setItem('backgroundColor', color); // Store the color in local storage
}

// Event listeners for each button
melnaButton.addEventListener('click', function () {
    setBackgroundColor(this, 'rgba(51,51,51,255)');
});

violetaButton.addEventListener('click', function () {
    setBackgroundColor(this, 'rgba(142,30,146,255)');
});

zilaButton.addEventListener('click', function () {
    setBackgroundColor(this, 'rgba(4,67,110,255)');
});

dzeltenaButton.addEventListener('click', function () {
    setBackgroundColor(this, 'rgba(198,187,9,255)');
});

// Check if there's a stored color in local storage and apply it
const storedColor = localStorage.getItem('backgroundColor');
if (storedColor) {
    setBackgroundColor(null, storedColor);
}




slideIndex-SlaiInd

showSlides-SlaiduPar

slides-Slaidi

currentSlide- sobSlaids

changeSlide- slaiduParm





let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = document.getElementById('currentSlide');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    currentSlide.src = slides[slideIndex - 1].src;
    slides[slideIndex - 1].style.display = 'block';

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Initial call to start the slideshow
showSlides();









let SlaiInd = 0;

function SlaiduPar() {
    const slaidi = document.querySelectorAll('.slide');
    const sobSlaids = document.getElementById('sobSlaids');
    
    for (let i = 0; i < slaidi.length; i++) {
        slaidi[i].style.display = 'none';
    }

    SlaiInd++;
    if (SlaiInd > slaidi.length) {
        SlaiInd = 1;
    }

    sobSlaids.src = slaidi[SlaiInd - 1].src;
    slaidi[SlaiInd - 1].style.display = 'block';

    setTimeout(SlaiduPar, 5000);
}

function slaiduParm(n) {
    SlaiInd += n;
    SlaiduPar();
}

SlaiduPar();

