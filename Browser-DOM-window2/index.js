const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
let userNumber = parseInt(prompt(`Guess a number between 1 - 10`));
let attempts = 1;
let newArr = [];
newArr.push(userNumber);

for (; attempts < 4; attempts++) {
  if (newArr.includes(randomNumber)) {
    alert(`Success, the number was ${randomNumber}. Attempts: ${attempts}`);
  } else {
    userNumber = parseInt(prompt('Wrong!!! Try Again!'))
    newArr.push(userNumber);
  }
}
if (!newArr.includes(randomNumber)) {
  alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`)
}

console.log(newArr);