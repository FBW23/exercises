//Your code goes here!

const pomodoroSession = document.querySelector('input');

// Countdown

function countDown() {
  let timer = document.querySelector('#timer');
  
  let counter = 0;
  let timeleft = 60;

  function convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    return `${min} : ${sec}`
  }

  function timeIt() {
    counter ++;
    timer.innerHTML = convertSeconds(timeleft - counter);
  }
  setInterval(timeIt, 1000);
}

countDown();

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
      pomodoroSession.value = parseInt(pomodoroSession.value) -1;
      break;
    case 'btn-start':
      console.log(element.id)
      break;
    case 'btn-reset':
      console.log(element.id)
      break;
    case 'btn-pause':
      console.log(element.id)
      break;
    case 'btn-continue':
      console.log(element.id)
      break;
  }
}))