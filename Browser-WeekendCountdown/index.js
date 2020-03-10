const submitButton = document.querySelector('#submit');
const text = document.querySelector('p');
let date = new Date();
let day = date.getDay();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = week[day];
let daysLeft;

if (currentDay === 'Monday') {
    daysLeft = 5;
} else if (currentDay === 'Tuesday') {
    daysLeft = 4; 
} else if (currentDay === 'Wednesday') {
    daysLeft = 3;
} else if (currentDay === 'Thursday') {
    daysLeft = 2;
} else if (currentDay === 'Friday') {
    daysLeft = 1;
}

function modifyText() { 
    let inputValue = document.querySelector('#yourname').value;
    text.innerText = `Hello ${inputValue}! Today is ${currentDay}. Only ${daysLeft} days left to the Weekend!`;
}

function clearText() {
    text.innerText = `Please enter your name`;
    text.inputMode = 'reset';
}

const nameEnter = document.querySelector('#submit');
console.log(nameEnter);
submitButton.addEventListener("click", modifyText); 

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearText);