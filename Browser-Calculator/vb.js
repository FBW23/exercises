// # Calculator

// Description:

// - The user will be able to input two numbers for which they would like to do two types of calculations: Basic Arithmatic and Special Operations.

// - Basic arithmatic will involve addition, subtraction, multiplication and division.

// - Special operations will deal with the calculation of modulo. 

// - As soon as the users input the numbers, they will see an immediate result on the page as an outcome of the operation.

// Instructions:

// Create a Calculator app with the following operations:

// 1. Basic Arithmatic

// - Addition
// - Subtraction
// - Multiplication
// - Division

// 2. Special Operations

// - Modulo

// 3. Create a function which calculates the result of two numbers depending on whether the inputs are being added, subtracted, multiplied or divided.

// 4. Required Calculations: addition, subtraction, multiplication, division and remainder of division.

// 5. Display the result of the calculation to the user immediately.

// 6. Include a header on the page.

// 7. Create a simple UI so that the user can input two numbers to perform a calculation.

// Note: the calculations should only include two operands.

// 8. **Optional:** 
// - Feel free to use Bootstrap for styling.

// > Hint: Refer to the representation below, for an idea of what your result should look like.

// ![demo](demo.gif)


let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

//let input=document.querySelector("input");

let sum = document.querySelector("#sum");
let deduct = document.querySelector("#deduct");
let multiply = document.querySelector("#multiply");
let devide = document.querySelector("#devide");
let modulo = document.querySelector("#modulo");




const sumFunction = () => {
    let result = document.querySelector("#sum .result");
    let input1 = document.querySelector("#sum .input1");
    let input2 = document.querySelector("#sum .input2");
    result.value = Number(input1.value) + Number(input2.value);
};
const deductFunction = () => {
    let result = document.querySelector("#deduct .result");
    let input1 = document.querySelector("#deduct .input1");
    let input2 = document.querySelector("#deduct .input2");
    result.value = Number(input1.value) - Number(input2.value);
};

const devideFunction = () => {
    let result = document.querySelector("#devide .result");
    let input1 = document.querySelector("#devide .input1");
    let input2 = document.querySelector("#devide .input2");
    result.value = Number(input1.value) / Number(input2.value);
};

const multiplyFunction = () => {
    let result = document.querySelector("#multiply .result");
    let input1 = document.querySelector("#multiply .input1");
    let input2 = document.querySelector("#multiply .input2");
    result.value = Number(input1.value) * Number(input2.value);
};

const moduloFunction = () => {
    let result = document.querySelector("#modulo .result");
    let input1 = document.querySelector("#modulo .input1");
    let input2 = document.querySelector("#modulo .input2");
    result.value = Number(input1.value) % Number(input2.value);
};



sum.addEventListener("change", sumFunction);
deduct.addEventListener("change", deductFunction);
devide.addEventListener("change", devideFunction);
multiply.addEventListener("change", multiplyFunction);
modulo.addEventListener("change", moduloFunction);