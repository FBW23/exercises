let randomNumber = Math.floor(Math.random() * 10 + 1);
alert("You have 3 Attempts to guess a Number from 1-10 ");
let guess = prompt("Guess a number between 1-10");
for (let i = 1; i < 3; i++) {
  if (randomNumber == guess) {
    alert(
      "Congratulation you Got right NUMBER. \n \nThe Correct number is " +
        randomNumber
    );
    break;
  } else {
    guess = prompt("Please try again");
  }
}
alert("Sorry !!! No more Attempts. The correct Number was " + randomNumber);
