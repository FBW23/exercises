// ADDITION
const additionElement = document.querySelector('.addition');

additionElement.addEventListener('change', (event) => {
  const num1 = parseInt(document.querySelector('.add1').value);
  const num2 = parseInt(document.querySelector('.add2').value);
  const result = document.querySelector('.result-addition');
  // Addition function
  const addition = (x, y) => {
    return x + y;
  }
  // adding the result from the addition to the input field
  result.value = addition(num1, num2); // calling the addition function
});

// SUBTRACTION
const subtractionElement = document.querySelector('.subtraction');

subtractionElement.addEventListener('change', (event) => {
  const num1 = document.querySelector('.sub1').value;
  const num2 = document.querySelector('.sub2').value;
  const result = document.querySelector('.result-subtraction');
  // subtraction function
  const subtraction = (x, y) => {
    return x - y;
  }
  // adding the result from the subtraction to the input field
  result.value = subtraction(num1, num2); // calling the subtraction function
});

// MULTIPLICATION

const multiplicationElement = document.querySelector('.multiplication');

multiplicationElement.addEventListener('change', (event) => {
  const num1 = document.querySelector('.add1').value;
  const num2 = document.querySelector('.add2').value;
  const result = document.querySelector('.result-multiplication');
  // multiplication function
  const multiplication = (x, y) => {
    return x * y;
  }
  // adding the result from the multiplication to the input field
  result.value = multiplication(num1, num2); // calling the multiplication function
});

// DIVISION

const divisionElement = document.querySelector('.division');

divisionElement.addEventListener('change', (event) => {
  const num1 = document.querySelector('.div1').value;
  const num2 = document.querySelector('.div2').value;
  const result = document.querySelector('.result-division');
  // multiplication function
  const division = (x, y) => {
    return x / y;
  }
  // adding the result from the multiplication to the input field
  result.value = division(num1, num2); // calling the multiplication function
});

// MODULO
const moduloElement = document.querySelector('.modulo')
moduloElement.addEventListener('change', (event) => {
  const num1 = document.querySelector('.mod1').value;
  const num2 = document.querySelector('.mod2').value;
  const result = document.querySelector('.result-modulo');
  // multiplication function
  const modulo = (x, y) => {
    return x % y;
  }
  // adding the result from the multiplication to the input field
  result.value = modulo(num1, num2); // calling the multiplication function
});