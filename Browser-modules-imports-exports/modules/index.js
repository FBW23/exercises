// Your code goes here!

import * as percentage  from  './percentage.js';
import * as aspectRatio from './aspect-ratio';

 

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
const percentageForm = document.querySelector('#percentage-form');
const percentInputNum1 = document.querySelector('#percentage_1');
const percentInputNum2 = document.querySelector('#percentage_2');
let percentageResult = document.querySelector('#percentage_result');

percentageForm.addEventListener('input', function() {
    const num1 = parseInt(percentInputNum1.value);
    const num2 = parseInt(percentInputNum2.value);
    percentageResult.value = percentage.percentage(num1, num2)
})

// Percentage OF Calculator

const percentageOfForm = document.querySelector('#percentageOf-form');
const percentNum1 = document.querySelector('#percentageOf_1');
const percentNum2 = document.querySelector('#percentageOf_2');
let percentOfResult = document.querySelector('#percentageOf_result');

percentageOfForm.addEventListener('input', function(){
    const num1 = parseInt(percentNum1.value);
    const num2 = parseInt(percentNum2.value);
    percentOfResult.value = percentage.percentageOf(num1, num2)
})

// difference

const differenceForm = document.querySelector('#difference-form');
const diff1 = document.querySelector('#difference_1');
const diff2 = document.querySelector('#difference_2');
let differenceResult = document.querySelector('#difference_result');
differenceForm.addEventListener('input', function(){
    const num1 = parseInt(diff1.value);
    const num2 = parseInt(diff2.value);
    differenceResult.value = percentage.difference(num1, num2)
});

// aspect ration

const aspectForm = document.querySelector('#aspect-form');
const aspect1 = document.querySelector =('#ratio_1');
const aspect2 = document.querySelector = ('#ratio_2');
let newWidth = document.querySelector('#ratio_result-width') ;
let newHeight = document.querySelector('#ratio_result-height') ;

aspectForm.addEventListener('input',function(){
    const num1 = parseInt(aspect1.value);
    const num2 = parseInt(aspect2.value);
    newWidth.value = aspectRatio.calculateAspectRatio
})