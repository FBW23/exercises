let myNumber = 15;
if ((myNumber % 3 === 0) && (myNumber % 5 === 0)) {  // or (myNumber % 15 === 0)
    console.log('FizzBuzz');
} else if (!(myNumber % 3)) {
    console.log('Fizz');
} else if (!(myNumber % 5)) {
    console.log('Buzz');
} else {
    console.log(myNumber);
}
/*Let's play mini FizzBuzz! For any given number, if the number is:

divisible by 3, print "Fizz".
divisible by "5", print "Buzz".
divisible by both 3 and 5, print "FizzBuzz".
That is, if any of the above conditions apply, print the above words instead of the number.

Otherwise, just print the number.*/

const myNumber = Math.round(Math.random()*15);
// Numbers must be Math.ceil() => rounds up
// Math.floor() => rounds down
// Math.round() => Rounds accordingly
console.log(myNumber);
let myString = ''; // STRING, but empty!
if (myNumber % 3 === 0) {
    myString = 'Fizz';
}
//console.log(myString);
if (myNumber % 5 === 0) {
    myString += 'Buzz';
}
//console.log(myString.length);
//if (myString === undefined) { //myString === undefined
if (!myString.length) {
    myString = myNumber;
}
console.log(myString);
