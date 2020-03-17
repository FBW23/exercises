// ## Create a guessing game for players. 

// * Randomize a number between 1-10. Do not show the player.
// * Make the player guess the number in a prompt.
// ![alt text](./images/start-game.png "Starting Game") 
// * If the player guesses the correct number, print out whether the player was successful and in how many attempts 
// (print in the console). 
// ![alt text](./images/game-win.png "Won Game") 
// * If the player is incorrect, change the text in the prompt to inform the player, e.g. "Nope, sorry! Try again!
// ![alt text](./images/wrong-answer.png "Wrong Answer") 
// * If the player fails to guess the number after three attempts, print out that the player was unsuccessful 
// AND what the number was. e.g. "Sorry, you failed to guess the number in three attempts. The number was 0!"
// ![alt text](./images/game-lost.png "Lost Game") 

 
function guessGame() {
    let randomize = Math.floor(Math.random()*10 +1);
    let guess = prompt('Guess a number between 1 and 10. => ' +  randomize);
    for (let i=1 ; i<3; i++) {
        if (guess == randomize) {
            guess = alert('Congrats, you found it in ' + i + ' attempts.');
            break;
        } else {
            guess = prompt('Nope, sorry! Try again!');
        } 
        
    }  alert('The number was ' + randomize);
    
}
guessGame();
