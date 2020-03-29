// # The Guessing Game
// ## Create a guessing game for players. 

// * Randomize a number between 1-10. Do not show the player.
// * Make the player guess the number in a prompt.
// ![alt text](./images/start-game.png "Starting Game") 
// * If the player guesses the correct number, print out whether the player was successful and in how many attempts (print in the console). 
// ![alt text](./images/game-win.png "Won Game") 
// * If the player is incorrect, change the text in the prompt to inform the player, e.g. "Nope, sorry! Try again!
// ![alt text](./images/wrong-answer.png "Wrong Answer") 
// * If the player fails to guess the number after three attempts, print out that the player was unsuccessful AND what the number was. e.g. "Sorry, you failed to guess the number in three attempts. The number was 0!"
// ![alt text](./images/game-lost.png "Lost Game") 

// **See the images for reference**

const randomizer = () => {
     let num = Math.floor(Math.random() * 10 + 1);
     let text = prompt(`Guess the number! ${num}`);
     let attempt = 1;
     let s = ""
     let go = "go";


     // if (attempt>1){
     //     go="goes";
     //     s="s";}




     if (num === parseInt(text)) {
          alert(`You hit it! in ${attempt} go`);
     } else {

          attempt++;
          num = prompt('Nope, sorry!!! Try again:');
          if (num === parseInt(text)) {
               alert('Success, the number was ' + num + '! Attempts: ' + attempt);
          } else {
               attempts++;
               text = prompt('Nope, sorry!!! Try again:');
               if (num === parseInt(text)) {
                    alert('Success, the number was ' + num + '! Attempts: ' + attempt);
               } else {
                    alert('Nope, sorry!!! the correct number was ' + num);
               }
          }
     }
}

randomizer();


// function game() {
//      const randomNumber = Math.floor(Math.random() * 10 + 1);
//      console.log(randomNumber);
//      let inputNumber = prompt('Guess a number between 1 - 10:');
//      let attempts = 1;
//      console.log(typeof(inputNumber));
//      console.log(typeof(randomNumber));
//      if (randomNumber === parseInt(inputNumber)) {
//           alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
//      } else {
//           attempts++;
//           inputNumber = prompt('Nope, sorry!!! Try again:');
//           if (randomNumber === parseInt(inputNumber)) {
//                alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
//           } else {
//                attempts++;
//                inputNumber = prompt('Nope, sorry!!! Try again:');
//                if (randomNumber === parseInt(inputNumber)) {
//                     alert('Success, the number was ' + randomNumber + '! Attempts: ' + attempts);
//                } else {
//                     alert('Nope, sorry!!! the correct number was ' + randomNumber);
//                }
//           }
//      }
// }