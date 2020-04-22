//Your code goes here!
const pomodoroSession = document.querySelector('input');

// Get Buttons
const buttons = document.querySelectorAll('button');
const timer = document.querySelector('#timer');
let interval = null; // to be able to reset it 

// Buttons functionality
buttons.forEach(element => element.addEventListener('click', function () {
  switch (element.id) {
    case 'btn-plus':
      console.log(element.id);
      pomodoroSession.value = parseInt(pomodoroSession.value) + 1;
      break;
    case 'btn-minus':
      console.log(element.id);
      pomodoroSession.value = parseInt(pomodoroSession.value) - 1;
      break;
    case 'btn-start':
      console.log(element.id);
      countDown(); // Start the Timer
      break;
    case 'btn-reset':
      console.log(element.id);
      clearInterval(interval);
      timer.innerHTML = '<span class="mins">25</span><span> : </span><span class="secs">00</span>';
      break;
    case 'btn-pause':
      console.log(element.id);
      clearInterval(interval);
      break;
    case 'btn-continue':
      console.log(element.id);
      countDown();
      break;
  }
}));

function convertSeconds(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  if(sec < 10 ) {
    return `${min} : 0${sec}`;
  }
  return `${min} : ${sec}`;
}

function convertMinutes(timeleft) {
    return (timeleft / 60).toFixed(2);
}

function countDown() {
  const timeleft = parseFloat(pomodoroSession.value) * 60; // because input in minutes
  let counter = 0;
  function timeIt() {
    counter++;
    const minAndSecondsLeft = timeleft - counter;
    timer.innerHTML = convertSeconds(minAndSecondsLeft);
    pomodoroSession.value = convertMinutes(minAndSecondsLeft);
    if (counter === timeleft) {
      clearInterval(interval);
      counter = 0;
    }
  }
  interval = setInterval(timeIt, 1000); // 1 second
}
