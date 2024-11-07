const year = document.querySelector(".year");
const month = document.querySelector(".month");
const dayName = document.querySelector(".dayName");   
const dayWeek = document.querySelector(".dayWeek");
const birthdayElement = document.querySelector('.birthday');
const sezon = document.querySelector('.day')

let data = new Date();
year.innerHTML = data.getFullYear();

let monthNumber = data.getMonth();
let dayNumber = data.getDay();
let dateNumber = data.getDate();

const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];


let birthday = new Date(data.getFullYear(), 5, 16);
if (data > birthday) {
    birthday.setFullYear(data.getFullYear() + 1);
}

let daysUntilBirthday = Math.ceil((birthday - data) / (1000 * 60 * 60 * 24));

if (daysUntilBirthday === 1) {
    birthdayElement.innerHTML = `Do moich urodzin pozostał: 1 dzień`;
} else {
    birthdayElement.innerHTML = `Do moich urodzin pozostało: ${daysUntilBirthday} dni`;
}

if(dayNames[dayNumber] === "Niedziela"){
    dayWeek.style.color = "red";
    dayName.style.color = "red";
}

if (monthNames[monthNumber] === "Marzec" || monthNames[monthNumber] === "Kwiecień" || monthNames[monthNumber] === "Maj") {
    sezon.style.backgroundImage = 'url("https://s1.1zoom.me/b5050/731/Forests_Spring_Bells_485191_1920x1080.jpg")';
} else if (monthNames[monthNumber] === "Czerwiec" || monthNames[monthNumber] === "Lipiec" || monthNames[monthNumber] === "Sierpień") {
    sezon.style.backgroundImage = 'url("https://s1.1zoom.me/b6264/147/Cosmos_plant_Summer_Sky_567881_1920x1080.jpg")';
}else if (monthNames[monthNumber] === "Wrzesień" || monthNames[monthNumber] === "Październiik" || monthNames[monthNumber] === "Listopad") {
    sezon.style.backgroundImage = 'url("https://www.tapeteos.pl/data/media/492/big/jesien_1920x1080_002.jpg")';
}else{
    sezon.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8P2Q2bi_yK98wlDWOOQ8PC_tPHFCu5GArOA&s")';
}


month.innerHTML = monthNames[monthNumber];
dayName.innerHTML = dateNumber;
dayWeek.innerHTML = dayNames[dayNumber];
