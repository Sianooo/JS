
const stars = document.querySelectorAll('.star');
const reviewForm = document.getElementById('review-form');
const reviewText = document.getElementById('review-text');
const reviewsList = document.getElementById('reviews-list');
let currentRating = 0;


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

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('hover');
            } else {
                s.classList.remove('hover');
            }
        });
    });

    star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hover'));
    });

    star.addEventListener('click', () => {
        currentRating = index + 1;
        stars.forEach((s, i) => {
            if (i < currentRating) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});


reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (currentRating === 0) {
        alert('Proszę wybrać ocenę w gwiazdkach!');
        return;
    }

    const reviewTextValue = reviewText.value.trim();
    if (!reviewTextValue) {
        alert('Proszę dodać opis do swojej opinii!');
        return;
    }

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <div class="review-stars">${'&#9733;'.repeat(currentRating)}</div>
        <p>${reviewTextValue}</p>
    `;
    reviewsList.appendChild(reviewItem);


    currentRating = 0;
    stars.forEach(s => s.classList.remove('selected'));
    reviewText.value = '';
});

document.getElementById('shoe-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const occasion = document.getElementById('occasion').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value.trim();
    const budget = document.getElementById('budget').value.trim();

    if (!occasion || !size) {
        alert("Proszę wypełnić wszystkie wymagane pola!");
        return;
    }

    const result = document.getElementById('shoe-result');
    result.innerHTML = `
        <h3>Twoje idealne obuwie:</h3>
        <p><strong>Okazja:</strong> ${occasion}</p>
        <p><strong>Rozmiar:</strong> ${size}</p>
        ${color ? `<p><strong>Kolor:</strong> ${color}</p>` : ''}
        ${budget ? `<p><strong>Budżet:</strong> ${budget} PLN</p>` : ''}
        <p>Sprawdź naszą kolekcję i znajdź idealne buty dla siebie!</p>
    `;
});