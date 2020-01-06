console.log();
let number = 15;

if ((number % 3) === 0) {
    console.log('Fizz');
} else if ((number % 5) === 0) {
    console.log('Buzz')
} else if (((number % 3) && (number % 5)) === 0) {
    console.log('FizzBuzz')
} else {
    console.log(number);
}
