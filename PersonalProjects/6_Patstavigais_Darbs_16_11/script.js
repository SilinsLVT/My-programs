const klase_X = 'x';
const klase_O = 'circle';

const uzvaras_nosacijumi = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

const visi_laucini = document.querySelectorAll(".cell");
const rezultatu_logs = document.getElementById('resultBox');
const rezultatu_pazinojums = document.querySelector('.resultInfo');
const atjaunota_poga = document.getElementById('restartButton');

const attelotSpeletaju = document.querySelector('.display');

const atsatisana = document.getElementById('atsatisana');

let speletajs_O;
let punkti_X = 0;
let punkti_O = 0;

function attelotPunktus() {
    const punktiXElement = document.getElementById('punktiX');
    const punktiOElement = document.getElementById('punktiO');
    punktiXElement.innerText = `X punkti: ${punkti_X}`;
    punktiOElement.innerText = `O punkti: ${punkti_O}`;
}

sakt_speli();

function sakt_speli() {
    speletajs_O = false;
    attelotSpeletaju.innerText = `${speletajs_O ? "O" : "X"}`;
    krasasMaina(); 
    visi_laucini.forEach((laucins) => {
        laucins.classList.remove(klase_X);
        laucins.classList.remove(klase_O);

      

        laucins.addEventListener('click', lietotaja_darbiba, { once: true });
    });

    rezultatu_logs.classList.remove('show');
}

function lietotaja_darbiba(klikskis) {
    const laucins = klikskis.target;
    const aktivais_speletajs = speletajs_O ? klase_O : klase_X;
    atzimet_laucinu(laucins, aktivais_speletajs);

    if (parbaudit_uzvaru(aktivais_speletajs)) {
        if (aktivais_speletajs === klase_X) {
            punkti_X += 1;
        } else {
            punkti_O += 1;
        }
        attelotPunktus();
        saglabaPunktus();
        beigt_speli(false);
    } else if (neizskirts()) {
        beigt_speli(true);
    } else {
        mainit_speletaju();
    }
}

function atzimet_laucinu(laucins, aktivais_speletajs) {
    laucins.classList.add(aktivais_speletajs);
}

function mainit_speletaju() {
    speletajs_O = !speletajs_O;
    attelotSpeletaju.innerText = `${speletajs_O ? "O" : "X"}`;
    krasasMaina();
}

function parbaudit_uzvaru(aktivais_speletajs) {
    return uzvaras_nosacijumi.some((nosacijums) => {
        return nosacijums.every((index) => {
            return visi_laucini[index].classList.contains(aktivais_speletajs);
        });
    });
}

function beigt_speli(neizskirts) {
    if (neizskirts) {
        rezultatu_pazinojums.innerText = "Neizšķirts rezultāts!";
    } else {
        const uzvaretajs = getUzvaretajs();
        uzvaretajs.forEach(index => {
            visi_laucini[index].classList.add('uzvara');
        });
        rezultatu_pazinojums.innerText = `Spēlētājs ${speletajs_O ? "O" : "X"} uzvarēja!`;
    }

    rezultatu_logs.classList.add('show');
}

function neizskirts() {
    return [...visi_laucini].every((laucins) => {
        return laucins.classList.contains(klase_X) || laucins.classList.contains(klase_O);
    });
}

function saglabaPunktus() {
    localStorage.setItem('punkti_X', punkti_X);
    localStorage.setItem('punkti_O', punkti_O);
}

function ieladePunktus() {
    punkti_X = parseInt(localStorage.getItem('punkti_X')) || 0;
    punkti_O = parseInt(localStorage.getItem('punkti_O')) || 0;
    attelotPunktus();
}

ieladePunktus();

atjaunota_poga.addEventListener('click', sakt_speli);

function paNullem() {
    punkti_X = 0;
    punkti_O = 0;
    attelotPunktus();
    saglabaPunktus();
}

atsatisana.addEventListener('click', paNullem);

function krasasMaina() {
    document.body.style.background = speletajs_O ? "#1a252c" : "#1c2c1a";
}

function getUzvaretajs() {
    return uzvaras_nosacijumi.find(nosacijums => {
        return nosacijums.every(index => {
            return visi_laucini[index].classList.contains(speletajs_O ? klase_O : klase_X);
        });
    });
}
