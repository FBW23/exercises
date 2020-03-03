// let lowerLimit = 1;
// let upperLimit = 10;
// let tries = 3;
// let answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
// let guess = '';
// let message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';

// // Keep prompting the user for a guess until the game ends.
// while (tries > 0) {
//     // Prompt the user for a guess.
//     guess = prompt(message, guess);
    
//     // If the cancel button was pushed, let the user know the game is ending and
//     // break out of the loop.
//     if (guess == null) {
//         alert('Quitting game now.');
//         break;
//     }
//     // If the guess is a number...
//     else if (isFinite(guess) && guess != '') {
//         // Make sure the guess is converted into a number.
//         guess = +guess;
        
//         // If the guess is less than the range let the user know.
//         if (guess < lowerLimit) {
//             alert('Your guess should be no less than ' + lowerLimit + '.');
//         }
//         // If the guess is greater than the range let the user know.
//         else if (guess > upperLimit) {
//             alert('Your guess should be no greater than ' + upperLimit + '.');
//         }
//         // If the guess is too high let the user know.
//         else if (guess > answer) {
//             alert('Your guess is too high.');
//         }
//         // If the guess is too low let the user know.
//         else if (guess < answer) {
//             alert('Your guess is too low');
//         }
//         // If none of the other cases were true that means the answer must have
//         // been guessed so let the user know and break out of the loop.
//         else {
//             alert('Great job, you got it!');
//             break;
//         }
//     }
//     // If the guess is not a number, let the user know.
//     else {
//         alert('You must enter a number as a guess.');
//     }
    
//     tries = tries - 1;
// }

// if (tries == 0) {
//     alert('You ran out of tries.  The number was ' + answer + '.');
// }

// let randomNumber = Math.floor(Math.random() * 10 + 1);
// alert(randomNumber);
// let guess = prompt("Guess a number between 1-10");
// for (let i = 1; i < 3; i++) {
//   if (randomNumber == guess) 
// // const result = parseInt(randomNumber, guess)
//   {
//     alert("Congratulation you Got right NUMBER. \n \nThe Correct number is " +randomNumber );
//     break; // \n \ is to move into a new line
//   } else {
//     guess = prompt("Please try again");
//   }
// }
// alert("Wrong Answer. The correct Number was " + randomNumber);

// let randomNumber = Math.floor(Math.random() * 10 + 1);
// alert(randomNumber);
// let guess = prompt("Guess a number between 1-10");
// for (let i = 1; i < 3; i++) {
// //   if (randomNumber == guess) 
// if (parseInt(guess)===randomNumber)
// // const result = parseInt(randomNumber, guess)
//   {
//     alert("Congratulation you Got right NUMBER. \n \nThe Correct number is " +randomNumber );
//     break; // \n \ is to move into a new line
//   } else {
//     guess = prompt("Please try again");
//   }
// }
// alert("Wrong Answer. The correct Number was " + randomNumber);