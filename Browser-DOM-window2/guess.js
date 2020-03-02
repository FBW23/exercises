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

let guess = prompt('Guess a number between 1 and 10');
function guessGame() {
    let randomize = Math.floor(Math.random()*11);
    let number = 0;
    for (let i=0 ; i<2; i++) {
        if(number !== randomize[i]) {
            prompt('Nope, sorry! Try again!');
        } 
        else if (number === randomize[i]){
            prompt('Congrats, you found it in ' + randomize[i] + ' attempts.');
        }
    } alert('The number was ' + randomize);
}
guessGame();
