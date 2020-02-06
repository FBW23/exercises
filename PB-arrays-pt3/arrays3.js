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

function wordRank(s) {
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
console.log(wordRank("The quick brown fox.")); // ➞ "brown"
console.log(wordRank("Nancy is very pretty.")); // ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!")); //➞ "tomorrow"
console.log(wordRank("Today is Wednesday.")); // ➞ "Wednesday
console.log(`:::::::::::::::::::::Task 6:::::::::::::::::::::`)

const hackerSpeak = str => {
  str = str.replace(/[aA]/g, "4");
  str = str.replace(/[eE]/g, "3");
  str = str.replace(/[iI]/g, "1");
  str = str.replace(/[oO]/g, "0");
  str = str.replace(/[sS]/g, "5");
  return str;
};
console.log(hackerSpeak("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")); //➞ "b3c0m3 4 c0d3r"
console.log(`:::::::::::::::::::::Task Bonus 1:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task Bonus 2:::::::::::::::::::::`)
console.log(`:::::::::::::::::::::Task Bonus 3:::::::::::::::::::::`)