//Your code goes here!

//grab elements

const mins = document.querySelector('#mins');
const sec = document.querySelector('#secs');
const buttonMin = document.querySelector('#btn-minus');
const buttonPlus = document.querySelector('#btn-plus');
const userInput = document.querySelector('#time');
const buttonStart = document.querySelector('#btn-start');
const buttonReset = document.querySelector('#btn-reset');
const buttonPause = document.querySelector('#btn-pause');
const buttonCont = document.querySelector('#btn-continue');
const timer = document.querySelector('#timer');
let interval = null;
let counter = 0;
let inicialNumber = 0;


//increase number
function increase() {
    userInput.value = ++inicialNumber
}
function decrease() {
    if (userInput.value > 0) {
        userInput.value = --inicialNumber
    }

}

function convertSec(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    return `${min} : ${sec}`
}

function convertMinutes(timeLeft) {
    return (timeLeft / 60).toFixed(0)
}

function countDown() {
    const timeLeft = parseFloat(userInput.value) * 60;
    function timeThis() {
        counter++;
        const minutesAndSecondsLeft = timeLeft - counter;
        timer.innerHTML = convertSec(minutesAndSecondsLeft);
        userInput.value = convertMinutes(minutesAndSecondsLeft);
        if (counter === timeLeft) {
            clearInterval(interval);
            counter = 0;
        }
    }
    interval = setInterval(timeThis, 1000)
}

//start

function start() {
    countDown();
}


//pause
function pause() {
    clearInterval(interval)
}

//reset
function reset() {
    clearInterval(interval);
    timer.innerHTML = '<span class="mins">25</span><span> : </span><span class="secs">00</span>';
}

//continue
function continueTimer() {
    countDown();
}

buttonPlus.addEventListener('click', increase);
buttonMin.addEventListener('click', decrease);
buttonStart.addEventListener('click', start);
buttonPause.addEventListener('click', pause);
buttonReset.addEventListener('click', reset);
buttonCont.addEventListener('click', continueTimer);