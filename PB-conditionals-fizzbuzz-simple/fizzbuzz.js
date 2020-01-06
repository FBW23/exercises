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