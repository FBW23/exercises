// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function Multiply(x, y) {
    console.log(x * y);
};


// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const MULTIPLY = function (x, y) {
    console.log(x * y);
};

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const ARROW = (x, y) => {
    console.log(x * y);
};



// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
function Alt(a, b) {
    console.log(a % b);
};

const ALT = function (a, b) {
    console.log(a % b);
};
const ARROW0 = (a, b) => {
    console.log(a % b);
};