let MyNumber=12;
if (MyNumber % 3 === 0) {
    console.log('Fizz');
} else  if  (MyNumber  % 5 === 0) {
    console.log('buzz');
} else if ((MyNumber  % 3 ===  0) && (MyNumber %5 === 0)) {
    console.log('FizzBuzz');
}
else {console.log(MyNumber);}