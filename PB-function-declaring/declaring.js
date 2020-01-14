// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function myFunction (number1, number2) {
    console.log(number1 * number2);
}
myFunction(5,12);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const myFunctionTwo = function (number1, number2){
    console.log(number1 * number2);
};
myFunctionTwo(6,11);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const myArrow = (number1, number2) => {
    console.log(number1 * number2);
};
myArrow(5,10);


// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 

const myArrowFunction = (number1, number2) => {
    if (number1 % number2 ===  0) {
        console.log('no remainder');
    } else {
        console.log('some remainder');
    }
};
myArrowFunction(10,2);

function twoNumbers(number1, number2) {
    if (number1 % number2 ===  0) {
        console.log('no remainder');
    } else {
        console.log('some remainder');
    }
}
twoNumbers(8,3);

const myTwoNumbers = function (number1, number2) {
    if (number1 % number2 ===  0) {
        console.log('no remainder');
    } else {
        console.log('some remainder');
    }
};
myTwoNumbers(10,5);