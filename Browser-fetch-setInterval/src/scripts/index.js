//Your code goes here!

const pomodoroSession = document.querySelector('input');



// Get Buttons
const buttons = document.querySelectorAll('button');

// Buttons functionality
buttons.forEach(element => element.addEventListener('click', function () {
  switch (element.id) {
    case 'btn-plus':
      console.log(element.id)
      pomodoroSession.value = parseInt(pomodoroSession.value) + 1;
      break;
    case 'btn-minus':
      console.log(element.id)
      pomodoroSession.value = parseInt(pomodoroSession.value) - 1;
      break;
    case 'btn-start':
      console.log(element.id)
      countDown(); // Start the Timer
      break;
    case 'btn-reset':
      console.log(element.id)
      clearInterval(interval)
      break;
    case 'btn-pause':
      console.log(element.id)
      break;
    case 'btn-continue':
      console.log(element.id)
      break;
  }
}))

// Countdown
let counter = 0;
let timeleft = parseInt(pomodoroSession.value);

function convertSeconds(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  return `${min} : ${sec}`
}

function countDown() {
  const timer = document.querySelector('#timer');

  
  function timeIt() {
    counter++;
    timer.innerHTML = convertSeconds(timeleft - counter);
    if (counter == timeleft) {
      clearInterval(interval);
      counter = 0;
    }
  }
  let interval = setInterval(timeIt, 1000);
}

