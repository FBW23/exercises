let randomNumber = Math.floor(Math.random() * 10 + 1);
alert(randomNumber);
let guess = prompt("Guess a number between 1-10");
for (let i = 0; i < 3; i++) {
  if (randomNumber == guess) {
    alert("Congratulation you Got right NUMBER. \n \nThe Correct number is " +randomNumber );
    break;
  } else {
    guess = prompt("Please try again");
  }
}
alert("Sorry !!! No more Attemps. The correct Number was " + randomNumber);
