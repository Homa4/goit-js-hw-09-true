// const startButton = document.querySelector('botton[data-start]');
// const stopButton = document.querySelector('botton[data-stop]');
// let timerId;

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// startButton.addEventListener('click', () => {
//     document.body.style = `background-color:${getRandomHexColor()}`;
//     timerId = setInterval(() => {
//         document.body.style = `background-color:${getRandomHexColor()}`
//     }, 1000);
//     startButton.disabled = true;
// })

// stopButton.addEventListener('click', () => {
//     startButton.disabled = false;
//     clearInterval(timerId);
// })

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId;
//change color  
//color rotation per sec
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startButton.addEventListener('click', () => {
    document.body.style = `background-color:${getRandomHexColor()}`;
    timerId = setInterval(() => {
        document.body.style = `background-color:${getRandomHexColor()}`;
    }, 1000);
    startButton.disabled = true;
})

stopButton.addEventListener('click', ()=> {
    startButton.disabled = false;
    clearInterval(timerId);
})