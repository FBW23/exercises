const button = document.querySelector('button');
const p = document.querySelector('p');
let date = new Date();
console.log(date)
let day = date.getDay();
console.log(day)
const week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDay = week[day];

let daysLeft;

if(currentDay === "Monday") {
  daysLeft = 5;
} else if (currentDay === "Tuesday") {
  daysLeft = 4;
} else if (currentDay === "Wednesday") {
  daysLeft = 3;
} else if (currentDay === "Thursday") {
  daysLeft = 2;
} else if (currentDay === "Friday") {
  daysLeft = 1;
}

function getInputValue() {
  let inputValue = document.querySelector('#myInput').value
  p.innerText = `Hello ${inputValue}. Today is ${currentDay}. Only ${daysLeft} days left until weekend`
}

button.addEventListener('click', getInputValue);
