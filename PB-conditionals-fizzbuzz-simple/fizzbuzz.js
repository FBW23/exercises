let myNumber = 4;
if (((myNumber % 3) == 0) && ((myNumber % 5) == 0)) {
    console.log('FizzBuzz');
} else if ((myNumber % 3) == 0) {
    console.log('Fizz');
} else if ((myNumber % 5) == 0) {
    console.log('Buzz');
} else {
    console.log(myNumber);
}