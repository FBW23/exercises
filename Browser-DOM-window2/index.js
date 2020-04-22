const randomNumber = Math.floor(Math.random() * 10 + 1); // generate a random number
//console.log(randomNumber); 

let userNumber = parseInt(prompt(`Guess a number between 1 - 10`)); // takes a user number
let attempts = 1;
let newArr = [];
newArr.push(userNumber); // pushing the number from the prompt

for (; attempts < 3; attempts++) {
  if (newArr.includes(randomNumber)) {
    alert(`Success, the number was ${randomNumber}. Attempts: ${attempts}`);
    break;
  } else {
    userNumber = parseInt(prompt('Wrong!!! Try Again!')) // asking the user for a second number
    newArr.push(userNumber); // pushing the new number into the newArr 
  }
}
if (!newArr.includes(randomNumber)) {
  alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`)
}

// console.log(newArr);