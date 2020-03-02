let randomNumber = Math.floor(Math.random() * 10 + 1);
alert(randomNumber);
let guess = prompt("Guess a number between 1-10");
// let answer = 3;
for (let i = 1; i < 10; i++) {
  if (randomNumber === guess) {
    alert("Congratulation you Got right NUMBER");
    break;
  } else {
    guess = prompt("Please try again");
  }
}
alert("the correct Number was " + randomNumber);
