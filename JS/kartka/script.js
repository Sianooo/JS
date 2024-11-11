const year = document.querySelector(".year");
const month = document.querySelector(".month");
const dayName = document.querySelector(".dayName");   
const dayWeek = document.querySelector(".dayWeek");
const birthdayElement = document.querySelector('.birthday');
const sezon = document.querySelector('.day')

let data = new Date();
// data.setMonth(5);
// data.setDate(15); 
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

if (data.getDate() === birthday.getDate() && data.getMonth() === birthday.getMonth()) {
    birthdayElement.innerHTML = `Dzisiaj są moje urodziny!`;
} else {
    let daysUntilBirthday = Math.ceil((birthday - data) / (1000 * 60 * 60 * 24));
    if (daysUntilBirthday === 1) {
        birthdayElement.innerHTML = `Do moich urodzin pozostał: 1 dzień`;
    } else {
        birthdayElement.innerHTML = `Do moich urodzin pozostało: ${daysUntilBirthday} dni`;
    }
}

if(dayNames[dayNumber] === "Niedziela"){
    dayWeek.style.color = "red";
    dayName.style.color = "red";
}

if(monthNumber===5 && dateNumber===16){
    sezon.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2024/06/27/11/25/ai-generated-8857067_1280.jpg")';
}else{
    if (monthNames[monthNumber] === "Marzec" || monthNames[monthNumber] === "Kwiecień" || monthNames[monthNumber] === "Maj") {
        sezon.style.backgroundImage = 'url("https://narudzkiej.pl/wp-content/uploads/2021/03/Jak-wiosna-wp%C5%82ywa-na-nasze-zdrowie-1-1024x683.jpeg")';
    } else if (monthNames[monthNumber] === "Czerwiec" || monthNames[monthNumber] === "Lipiec" || monthNames[monthNumber] === "Sierpień") {
        sezon.style.backgroundImage = 'url("https://ocdn.eu/pulscms-transforms/1/ceKk9kpTURBXy9kYjk5YmQxNWY1ZTIwZTVlYzcwZmJjNDljNDU0NDU4MS5qcGeTlQMARs0D6M0CM5UCzQSwAMLDlQIAzQLuwsPeAAOhMAGhMQGhM8M")';
    }else if (monthNames[monthNumber] === "Wrzesień" || monthNames[monthNumber] === "Październik" || monthNames[monthNumber] === "Listopad") {
        sezon.style.backgroundImage = 'url("https://i0.wp.com/palac.szczecin.pl/wp-content/uploads/2021/09/jesien.jpg?fit=900%2C600&ssl=1")';
    }else if (monthNames[monthNumber] === "Grudzień" || monthNames[monthNumber] === "Styczeń" || monthNames[monthNumber] === "Luty"){
        sezon.style.backgroundImage = 'url("https://pliki2.portalsamorzadowy.pl/i/20/65/84/206584_r0_940.jpg")';
    }
}

month.innerHTML = monthNames[monthNumber];
dayName.innerHTML = dateNumber;
dayWeek.innerHTML = dayNames[dayNumber];
