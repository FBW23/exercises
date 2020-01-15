console.log();
console.log('Exercise One');
console.log();

let multiply = 0;

function twoNumbers(firstNum, secondNum) {
    if (((typeof firstNum) === 'number') && ((typeof secondNum) === 'number')) {
        console.log(firstNum + ' and ' + secondNum + ' are both numbers.');
    } else {
        console.log('not a number');
    }
    for (let i = 1; i <= secondNum; i++) {
        console.log(Math.pow(firstNum, i));
    }
}

twoNumbers(3, 5);

console.log();
console.log('Exercise Two');
console.log();

let frucht = 'oranges';

function printFavoriteFruit() {
    frucht = 'pear';
    console.log('My favorite fruit is:', frucht);
}

printFavoriteFruit();

console.log();
console.log('Exercise Three');
console.log();


function exponent(numberOne, numberTwo) {
    let result = Math.pow(numberOne, numberTwo);
    console.log(result);
}
// console.log(result);
// console.log(result); this is not possible because the result is defined as a local variable
exponent(3, 5);