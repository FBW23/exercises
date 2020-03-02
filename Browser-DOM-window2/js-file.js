// let randomNumber = Math.floor(Math.random() * (+10 - +1));

// let message = prompt('Guess the number between 1 and 10');

// if (message === randomNumber) {
//   alert("You guessed the right number");
// } else {
//     alert("You guessed the wrong number. The number was " + randomNumber);
// }

function randomFunction() {
  let randomNumber = Math.floor(Math.random() * 11);

  let message = prompt(`Guess the number between 0 and 10. (The right number is ${randomNumber}).`);

  let attempts = 3;

  for (let i = 0; i < attempts; i++) {
    if (message == randomNumber) {
      alert(`Congratulations! You guessed the right number.`);
      return `The right number was ${randomNumber}.`;
    } else {
      prompt(`Your number was wrong. You have ${--attempts} attempts left.`);
    }
  }
  alert(`You ran out of attempts. The correct number is ${randomNumber}.`);
}

  randomFunction();