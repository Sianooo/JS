const formularz = document.querySelector('#formularz-buty');
const wynik = document.querySelector('#wynik');


const wyswietlanieNapisu=()=>{
    const napis=document.querySelector('#napis')
    napis.textContent="Nasza Kolekcja Butów";
}

const wyswietlanieNapisu2=()=>{
    const napis=document.querySelector('#napis')
    napis.textContent="Buty na każdą okazję – Wybierz najlepsze!";
}

const pokazCzas = () => {
    let data = new Date();

    let month = data.getMonth();
    let day = data.getDay();
    let year = data.getFullYear();
    let hours = data.getHours()
    let minutes = data.getMinutes() 
    let seconds = data.getSeconds()
    let dayNumber = data.getDate();

    switch(month){
        case 0: month = "Styczeń"; break;
        case 1: month = "Luty"; break;
        case 2: month = "Marzec"; break;
        case 3: month = "Kwiecień"; break;
        case 4: month = "Maj"; break;
        case 5: month = "Czerwiec"; break;
        case 6: month = "Lipiec"; break;
        case 7: month = "Sierpień"; break;
        case 8: month = "Wrzesień"; break;
        case 9: month = "Październik"; break;
        case 10: month = "Listopad"; break;
        case 11: month = "Grudzień"; break;
    }

    switch(day){
        case 0: day = "Niedziela"; break;
        case 1: day = "Poniedziałek"; break;
        case 2: day = "Wtorek"; break;
        case 3: day = "Środa"; break;
        case 4: day = "Czwartek"; break;
        case 5: day = "Piętek"; break;
        case 6: day = "Sobota"; break;
    }

    document.querySelector('#czasWyswietlany').textContent = `${day} ${dayNumber} ${month} ${year} ${hours}:${minutes}:${seconds}`;

    setTimeout(pokazCzas, 1000);
};

pokazCzas();

let tab = new Array('zdjecia/but.png', 'zdjecia/but2.png');
let i = 0;

const zmianaObrazka = () => {
    document.querySelector('#obrazek').src = tab[i];
    i++;
    if (i === 2) {
        i = 0;
    }
    setTimeout(zmianaObrazka, 2000);
};

zmianaObrazka();


formularz.addEventListener('submit', (e) => {
    e.preventDefault();

    const imie = document.querySelector('#imie').value.trim();
    const typButy = document.querySelector('#typ-buty').value;
    const rozmiarButy = document.querySelector('#rozmiar-buty').value;

    if (!imie || !rozmiarButy) {
        alert('Proszę uzupełnić wszystkie pola!');
        return;
    }

    wynik.textContent = `Cześć ${imie}! Wybrałeś/aś buty typu "${typButy}" w rozmiarze ${rozmiarButy}. Świetny wybór!`;
    wynik.style.display = 'block';

    formularz.reset();
});



