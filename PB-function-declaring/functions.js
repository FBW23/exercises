// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

<<<<<<< HEAD
function multiply(x, y) {
    console.log(x * y);
};
multiply(5, 6);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const MULTIPLY = function (x, y) {
    console.log(x * y);
};

MULTIPLY(5, 7);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const ARROW = (x, y) => {
    console.log(x * y);
};

ARROW(7, 9);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
function alt(a, b) {
    console.log(a % b);
};

alt(9, 3);

const ALT = function (a, b) {
    console.log(a % b);
};

ALT(2, 8);

const ARROW0 = (a, b) => {
    console.log(a % b);
};

ARROW0(6, 9);
=======


function multiplyWithNumber (number, number2){
    console.log(number*number2);
}
multiplyWithNumber(8, 8)

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.
const myMultiFunction = function (number, number2){
    console.log(number*number2);
}

myMultiFunction (9, 10);
// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const myArrowFunction = (number, number2) => {
    console.log (number * number2);
};

myArrowFunction(7, 9);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
function reminderOf(number, number2){
    console.log(number % number2);
}

reminderOf(8, 7);

const myReminderOf = function (number, number2) {
    console.log(number%number2);
};

myReminderOf(9, 7); 

const myArrawRemainder = (number, number2) => {
    console.log(number%number2);
};

myArrawRemainder(9, 3);
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a
