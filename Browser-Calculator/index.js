// ADDITION

const additionElement = document.querySelector('.addition');

additionElement.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('.addition .fieldOne').value);
    const num2 = parseInt(document.querySelector('.addition .fieldTwo').value);
    const result = document.querySelector('.addition .result');

    const addition = (x, y) => {
        return (x + y);
    }
    
    result.value = addition(num1, num2); 
})

// SUBTRACTION

const subtractionElement = document.querySelector('.subtraction');

subtractionElement.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('.subtraction .fieldOne').value);
    const num2 = parseInt(document.querySelector('.subtraction .fieldTwo').value);
    const result = document.querySelector('.subtraction .result');

    const subtraction = (x, y) => {
        return (x - y);
    }
    
    result.value = subtraction(num1, num2); 
})

// MULTIPLICATION

const multiplicationElement = document.querySelector('.multiplication');

multiplicationElement.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('.multiplication .fieldOne').value);
    const num2 = parseInt(document.querySelector('.multiplication .fieldTwo').value);
    const result = document.querySelector('.multiplication .result');

    const multiplication = (x, y) => {
        return (x * y);
    }
    
    result.value = multiplication(num1, num2); 
})

// DIVISION 

const divisionElement = document.querySelector('.division');

divisionElement.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('.division .fieldOne').value);
    const num2 = parseInt(document.querySelector('.division .fieldTwo').value);
    const result = document.querySelector('.division .result');

    const division = (x, y) => {
        return (x / y);
    }
    
    result.value = division(num1, num2); 
})

// MODULO 

const moduloElement = document.querySelector('.modulo');

moduloElement.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('.modulo .fieldOne').value);
    const num2 = parseInt(document.querySelector('.modulo .fieldTwo').value);
    const result = document.querySelector('.modulo .result');

    const modulo = (x, y) => {
        return (x % y);
    }
    
    result.value = modulo(num1, num2); 
})