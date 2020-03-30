// Your code goes here!

import * as percentage  from  './percentage.js'
// import * as aspectRatio from './aspect-ratio'

 

// modulo
const moduloForm = document.querySelector('#modulo-form');
const modulo1 = document.querySelector('#modulo_1');
const modulo2 = document.querySelector('#modulo_2');
let moduloResult = document.querySelector('#modulo_result');
moduloForm.addEventListener('input', function(){
    const num1 = parseInt(modulo1.value);
    const num2 = parseInt(modulo2.value);
    moduloResult.value = percentage.modulo(num1, num2)
});

// Percentage calculation

// Percentage OF Calculator

const percentageOfForm = document.querySelector('#percentageOf-form');
const percentNum1 = document.querySelector('#percentageOf_1');
const percentNum2 = document.querySelector('#percentageOf_2');
let percentOfResult = document.querySelector('#percentageOf_result');

percentageOfForm.addEventListener('input', function(){
    const num1 = parseInt(percentNum1.value);
    const num2 = parseInt(percentNum2.value);
    percentOfResult.value = percentage.percentage(num1, num2)
})