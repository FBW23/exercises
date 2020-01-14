function multiplyByNumber(number, number2) {
    console.log('Create a function that multiples a number by another number >', number * number2);
}
multiplyByNumber(5, 5);

const myFunction = function multiplyByNumber(number, number2) {
    console.log('Rework the syntax of the above function so that the function declaration is stored as a value >', number * number2);
};
myFunction(5, 5);

const myArrowFunction = (number, number2) => {
    console.log('Rework the syntax of the function declaration so that is uses the arrow function shorthand >', number * number2);
};
myArrowFunction(5, 5);

function remainder(number, number2) {
    if (number % number2 === 0) {
        console.log('it is divisible by 5.');
    } else {
        console.log('it is not divisible by 5.')
    }
}
remainder(24, 34);

const remainder2 = function remainder(number, number2) {
    if (number % number2 === 0) {
        console.log('it is divisible by 5.');
    } else {
        console.log('it is not divisible by 5.');
    }
};
remainder2(300, 50);

const remainder3 = (number, number2) => {
    if (number % number2 === 0) {
        console.log('it is divisible by 5.');
    } else {
        console.log('it is not divisible by 5.');
    }
};
remainder3(70, 5);