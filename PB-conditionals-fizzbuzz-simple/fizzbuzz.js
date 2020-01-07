<<<<<<< HEAD

function fuzzBuzz() {
    var fuzz = document.getElementById("result");
    var number = Math.floor(Math.random() * 50) + 1;
    var three = "Fuzz";
    var five = "Buzz";
    if (number % 3 === 0 && number % 5 === 0) {
        fuzz.innerHTML = (number+" "+three+five);
        // document.getElementById("buzzMe").style.backgroundColor = green;
    } else if (number % 3 === 0) {

        fuzz.innerHTML = (number+" "+three);
        // document.getElementById("buzzMe").style.backgroundColor = red;
    } else if (number % 5 === 0) {
        fuzz.innerHTML = (number+" "+five);
    } else {
        fuzz.innerHTML = number;
        // document.getElementById("buzzMe").style.backgroundColor = blue;
 
    }
}
=======
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
>>>>>>> 341a97d86489516bdc9df9debb71451baaa1765d
