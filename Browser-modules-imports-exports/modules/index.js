// Your code goes here!
import * as module1 from './aspect-ratio.js';
import * as module2 from './percentage.js';
module1.default;
module2.default;
// 1st calculator
const moduloForm = document.querySelector('#modulo-form');
const inputOne = document.querySelector('#modulo_1');
const inputTwo = document.querySelector('#modulo_2');
const moduloResult = document.querySelector('#modulo_result');
const modulo = function() {
    let first = parseInt(inputOne.value);
    let second = parseInt(inputTwo.value);
    let moduloFunction = module2.modulo(first, second);
    moduloResult.value = moduloFunction;
};
moduloForm.addEventListener('change', modulo);

//Percentage Calculations

const percentageForm = document.querySelector('#percentage-form');
const inputPerc1 = document.querySelector('#percentage_1');
const inputPerc2 = document.querySelector('#percentage_2');
const percentageResult = document.querySelector('#percentage_result');
const percentage = function () {
    let first = parseInt(inputPerc1.value);
    let second = parseInt(inputPerc2.value);
    let percentageFunction = module2.percentage(first, second);
    percentageResult.value = percentageFunction;
};
percentageForm.addEventListener('change', percentage);
// Percentage increase Calculator
const percentageOfForm = document.querySelector('#percentageOf-form');
const percentageOf1 = document.querySelector('#percentageOf_1');
const percentageOf2 = document.querySelector('#percentageOf_2');
const percentageOfResult = document.querySelector('#percentageOf_result');
const percentageOf = function () {
    let first = parseInt(percentageOf1.value);
    let second = parseInt(percentageOf2.value);
    let percentageOfFunction = module2.percentageOf(first, second);
    percentageOfResult.value = percentageOfFunction;
};
percentageOfForm.addEventListener('change', percentageOf);
 //
 const differenceForm = document.querySelector('#difference-form');
 const difference1 = document.querySelector('#difference_1');
 const difference2 = document.querySelector('difference_2');
 const differenceResult = document.querySelector('#difference_result');

 const differenceOf =function(){
     let first = parseInt(difference1.value);
     let second = parseInt(difference2.value);
     let differenceFunction = module2.difference(first, second);
     differenceResult.value = differenceFunction;
 };

 differenceForm.addEventListener('change', differenceOf);

