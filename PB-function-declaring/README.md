# Declaring Functions 

#### 1. Multiply - Function Declaration
* Create a function that multiples a number by another number.

#### 2. Multiply - Function Declarations as Values
* Rework the syntax of the above function so that the function declaration is stored as a value.

#### 3. Multiply - Arrow Function
* Rework the syntax of the function declaration so that is uses the arrow function shorthand.

#### 4. Declarations
* Create functions (using all three declarations) to check the remainder of division given two numbers. 

function multiplyWithTwo(number){
    //here we can define what should happen
    //function block
    console.log(number * 2);
}

multiplyWithTwo(5);

const myFunction = function (number) {
    console.log(number * 2);
};

//calling a function
multiplyWithTwo(15);

//Arrow function

const myArrowFunction = (number) => {
    console.log (number *2);
};