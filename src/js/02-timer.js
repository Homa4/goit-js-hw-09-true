// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
let date;
const startButton = document.querySelector('button[data-start]');
const spanTags = document.getElementsByClassName('value');

// const spanTagSec = document.querySelector('span[data-days]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.dir(selectedDates[0]);
        date = selectedDates[0];
        startButton.disabled = false;
    },
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

startButton.disabled = true;


flatpickr('input#datetime-picker', options);

startButton.addEventListener('click', () => {
    if (date > Date.now()) {
        timeCounter();
        setInterval(timeCounter, 1000)
    } else { 
        alert('Please choose a date in the future'); 
    }


})

function timeCounter(){
    const timeObj = convertMs(date - Date.now());
    let days = timeObj.days;
    let hours = timeObj.hours;
    let minutes = timeObj.minutes;
    let seconds = timeObj.seconds;

    days = days < 10 ? '0' + days : days;
    spanTags[0].innerHTML = `${days}`;
    spanTags[1].innerHTML = `${hours}`;
    spanTags[2].innerHTML = `${minutes}`;
    spanTags[3].innerHTML = `${seconds}`;
}