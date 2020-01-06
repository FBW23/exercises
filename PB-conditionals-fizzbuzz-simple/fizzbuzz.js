console.log();
let number = 37;

if ((number % 3 === 0) && (number % 5 === 0)) {
    console.log('FizzBuzz')
} else if (number % 3 === 0) {
    console.log('Fizz');
} else if (number % 5 === 0) {
    console.log('Buzz')
} else {
    console.log(number);
}

// BONUS

if (!(number % 3) && !(number % 5)) { // if ((number % 15 === 0)) - using only one condition
    console.log('FizzBuzz')
} else if (!(number % 3)) {
    console.log('Fizz');
} else if (!(number % 5)) {
    console.log('Buzz');
} else {
    console.log(number);
}

// A MORE ELABORATED CODE

// const myNumber = 15;
// let myString = '';
// if (myNumber % 3 === 0) {
//     myString = 'Fizz';
// }
// console.log(myString);
// if (myNumber % 5 === 0) {
//     myString += 'Buzz';
// } else if (myString === '') {
//     myString = myNumber;
// }
// console.log(myString);

const myNumber = Math.round(Math.random()*15);
console.log(myNumber);
let myString = ''; // undefined
if (myNumber % 3 === 0) {
    myString = 'Fizz';
}
console.log(myString);
if (myNumber % 5 === 0) {
    myString += 'Buzz';
} else if (myString === undefined) {
    myString = myNumber;
}
console.log(myString);