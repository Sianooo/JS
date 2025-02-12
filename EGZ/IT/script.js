let wynik = document.querySelector('#wynik');

const zaznaczenie = function() {
    let regulamin = document.querySelector('#regulamin').checked;
    let zgloszenie = document.querySelector('#zgloszenie').value;
    let mail = document.querySelector('#mail').value;
    let nazwisko = document.querySelector('#nazwisko').value;
    let imie = document.querySelector('#imie').value;

    if (!regulamin) {
        wynik.textContent = "Musisz zapoznac sie z regulaminem";
        wynik.style.color = "red";
    } else {
        wynik.textContent = `${imie.toUpperCase()} ${nazwisko.toUpperCase()} Tresc Twojej Strony: ${zgloszenie}`;
        wynik.style.color = "navy";
    }
};