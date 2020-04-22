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