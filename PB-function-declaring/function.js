// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

 function multiply(number1, number2) {
console.log(number1 * number2 )
 }
 multiply(3,5);

//  2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

const multiples = function (number1, number2) {
    console.log(number1 * number2)
}
multiples(3, 5);

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const arrowMultiples = (number1, number2) => {
    console.log(number1 * number2)
}
arrowMultiples(40,12);


// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division, given two numbers.

const arrowRemainder = (number1, number2) => {
    console.log(number1 / number2 )
}
arrowMultiples(40,12);