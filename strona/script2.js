
const gwiazdki = document.querySelectorAll('.gwiazdka');
const formularzOpinii = document.querySelector('#formularz-opinii');
const tekstOpinii = document.querySelector('#tekst-opinii');
const listaOpinii = document.querySelector('#lista-opinii');
let obecnaOcena = 0;


gwiazdki.forEach((gwiazdka, indeks) => {
    gwiazdka.addEventListener('mouseover', () => {
        gwiazdki.forEach((g, i) => {
            if (i <= indeks) {
                g.classList.add('hover');
            } else {
                g.classList.remove('hover');
            }
        });
    });

    gwiazdka.addEventListener('mouseleave', () => {
        gwiazdki.forEach(g => g.classList.remove('hover'));
    });

    gwiazdka.addEventListener('click', () => {
        obecnaOcena = indeks + 1;
        gwiazdki.forEach((g, i) => {
            if (i < obecnaOcena) {
                g.classList.add('selected');
            } else {
                g.classList.remove('selected');
            }
        });
    });
});

formularzOpinii.addEventListener('submit', (e) => {
    e.preventDefault();

    if (obecnaOcena === 0) {
        alert('Proszę wybrać ocenę w gwiazdkach!');
        return;
    }

    const tekstOpiniiWartosc = tekstOpinii.value.trim();
    if (!tekstOpiniiWartosc) {
        alert('Proszę dodać opis do swojej opinii!');
        return;
    }

    const elementOpinii = document.createElement('div');
    elementOpinii.classList.add('element-opinii');
    elementOpinii.innerHTML = `
        <div class="gwiazdki-opinii">${'&#9733;'.repeat(obecnaOcena)}</div>
        <p>${tekstOpiniiWartosc}</p>
    `;
    listaOpinii.appendChild(elementOpinii);

    obecnaOcena = 0;
    gwiazdki.forEach(g => g.classList.remove('selected'));
    tekstOpinii.value = '';
});
