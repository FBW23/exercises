// let randomNumber = Math.floor(Math.random() * (+10 - +1));

// let message = prompt('Guess the number between 1 and 10');

// if (message === randomNumber) {
//   alert("You guessed the right number");
// } else {
//     alert("You guessed the wrong number. The number was " + randomNumber);
// }

function randomFunction() {
  let randomNumber = Math.floor(Math.random() * (+10 - +1));

  let message = prompt(`Guess the number between 1 and 10`);

  let attempt = 1;

  if (message == randomNumber) {
    alert(`You guessed the right number! The number was ` + randomNumber + `. Attempts: ${attempt}.`)
  } else {
    for (let i = 0; i < 2; i++) {
      attempt += i;
      prompt(`You guessed the wrong number, the number was ${randomNumber}. It is your attempt number ${attempt + 1}. Guess again`);
    }
    alert(`You are out of tries, the number was ` + randomNumber);
  }
}

randomFunction()