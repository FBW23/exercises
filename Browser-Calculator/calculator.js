// Calculator

let num1, num2;

const addition = (x, y) => {
  return x + y;
}


const subtraction = (x, y) => {
  return x - y;
}


const multiplication = (x, y) => {
  return x * y;
}


const division = (x, y) => {
  return x / y;
}

// special
const modulo = (x, y) => {
  return x % y;
}

// test 
num1 = 2;
num2 = 2;

console.log(addition(num1,num2)); 
console.log(subtraction(num1,num2)); 
console.log(multiplication(num1,num2)); 
console.log(division(num1,num2)); 
console.log(modulo(num1,num2)); 