// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function myFunction (number) {
    console.log(number * 5);
}
myFunction(5);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const myFunctionTwo = function (number){
    console.log(number * 4);
};
myFunctionTwo(6);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const myArrow = (number) => {
    console.log(number * 10);
};
myArrow(5);


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