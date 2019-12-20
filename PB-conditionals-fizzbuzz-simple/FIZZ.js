let x;
if (x % 3) {
    console.log('Fizz');
} else if (x % 5) {
    console.log('Buzz')
} else if (x % 15) {
    console.log('FizzBuzz')
} else {
    console.log(x);
}
//for short-handing the operation notice that it is enough for a number to be divided by the least common multiple of tow chosen numbers to be able to divide by any of them , in this case it is 15 ; 
console.log(225/15);