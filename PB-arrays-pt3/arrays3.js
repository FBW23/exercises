console.log(`:::::::::::::::::::::Task 1:::::::::::::::::::::`)

function isFourLetters(arr) {
  return arr.filter(function (str) {
    return str.length === 4;
  });
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));

console.log(`:::::::::::::::::::::Task 2:::::::::::::::::::::`)

const monthName = mon => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];

console.log(monthName(3)); //➞ "March"
console.log(monthName(12)); //➞ "December"
console.log(monthName(6)); //➞ "June"
console.log(`:::::::::::::::::::::Task 3:::::::::::::::::::::`)
const amplify = num1 => {
  let num2 = [];
  for (let i1 = 0; i1 < num1; i1++) {
    if (i1 % 4 === 0) {
      num2.push(num1)
    }
  }
}
console.log(`:::::::::::::::::::::Task 4:::::::::::::::::::::`)

function unique(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray.indexOf(myArray[i]) === myArray.lastIndexOf(myArray[i])) {
      return myArray[i];
    }
  }
}

console.log(unique([3, 3, 3, 7, 3, 3])); //➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); //➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); //➞ 0
console.log(`:::::::::::::::::::::Task 5:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task 6:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task Bonus 1:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task Bonus 2:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task Bonus 3:::::::::::::::::::::`)