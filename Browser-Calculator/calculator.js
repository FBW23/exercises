
const fullBox = document.querySelector('.fullBox')
fullBox.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('#input01').value);
    const num2 = parseInt(document.querySelector('#input02').value);
    const result = document.querySelector('.result');
    const addition = (x, y) => {
        return x + y;
      }
result.value = addition(num1, num2);
});

const fullBox2 = document.querySelector('.fullBox2')
fullBox2.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('#input03').value);
    const num2 = parseInt(document.querySelector('#input04').value);
    const result = document.querySelector('.result2');
    const substr = (x, y) => {
        return x - y;
      }
result.value = substr(num1, num2);
});

const fullBox3 = document.querySelector('.fullBox3')
fullBox3.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('#input05').value);
    const num2 = parseInt(document.querySelector('#input06').value);
    const result = document.querySelector('.result3');
    const multiply = (x, y) => {
        return x * y;
      }
result.value = multiply(num1, num2);
});

const fullBox4 = document.querySelector('.fullBox4')
fullBox4.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('#input07').value);
    const num2 = parseInt(document.querySelector('#input08').value);
    const result = document.querySelector('.result4');
    const divide = (x, y) => {
        return x / y;
      }
result.value = divide(num1, num2);
});

const moduloBox = document.querySelector('.moduloBox')
moduloBox.addEventListener('change', (event) => {
    const num1 = parseInt(document.querySelector('#input09').value);
    const num2 = parseInt(document.querySelector('#input10').value);
    const result = document.querySelector('.result5');
    const modulo = (x, y) => {
        return x % y;
      }
result.value = modulo(num1, num2);
});
