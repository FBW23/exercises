// * Randomize a number between 1-10. Do not show the player.

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let message = prompt('Guess a number between 1 and 10');

let randomNumber = Math.floor(Math.random() * (+10 - +1));

let message = prompt('Guess the number between 1 and 10');

if (message === randomNumber) {
  alert("You guessed the right number");
} else {
    alert("You guessed the wrong number. The number was " + randomNumber);
}

function randomFunction() {
  let randomNumber = Math.floor(Math.random() * 10 + 1); // max +  min

  let message = prompt(`Guess the number between 1 and 10. (The right number is ${randomNumber}).`);

  let attempts = 3;

  for (let i = 1; i < 4; i++) {
    if (parseInt(message) === randomNumber) { // (message == randomNumber)
      alert(`Congratulations! You guessed the right number.`);
      return `The right number was ${randomNumber}.`;
    } else if (attempts > 1) { // as long as you have 1 attempt left
      message = prompt(`Your number was wrong. You have ${--attempts} attempts left. Type a new number!`);
    }
  }
  alert(`You ran out of attempts. The correct number is ${randomNumber}.`);

}

randomFunction();

console.log(document);
console.log(document.head);
console.log(document.title);
let title = document.getElementById('websiteTitle');
console.log(title);

title.style.color = 'green';

let links = document.querySelectorAll('a');
console.log(links);
for (let i = 0; i < links.length; i++) {
  links[i].style.color = 'hotpink'
}
