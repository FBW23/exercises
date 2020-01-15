// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.



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