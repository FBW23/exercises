// Calculator
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
// ADDITION
const additionElement = document.querySelector('.addition');
additionElement.addEventListener('change', (event) => {
    const num1 = document.querySelector('.fieldOne').value;
    const num2 = document.querySelector('.fieldTwo').value;
    const result = document.querySelector('.result');
    // Addition function
    const addition = (x, y) => {
        return (x + y);
    }
    // adding the result from the addition to the input field
    result.value = addition(num1, num2); // calling the addition function
})