// Your code goes here!

import * as module1 from './aspect-ratio.js';
import * as module2 from './percentage.js';


module1.default;
module2.default;

// 1st calculator
const moduloForm = document.querySelector('#modulo-form');
const modulo1 = document.querySelector('#modulo_1');
const modulo2 = document.querySelector('#modulo_2');
const moduloResult = document.querySelector('#modulo_result');
const modulo = function () {
    let first = parseInt(modulo1.value);
    let second = parseInt(modulo2.value);
    let moduloFunction = module2.modulo(first, second);
    moduloResult.value = moduloFunction;
};
moduloForm.addEventListener('change', modulo);

// second calculator
const percentageForm = document.querySelector('#percentage-form');
const percentage1 = document.querySelector('#percentage_1');
const percentage2 = document.querySelector('#percentage_2');
const percentageResult = document.querySelector('#percentage_result');

const percentage = function () {
    let first = parseInt(percentage1.value);
    let second = parseInt(percentage2.value);
    let percentageFunction = module2.percentage(first, second);
    percentageResult.value = percentageFunction;
};
percentageForm.addEventListener('change', percentage);

// 3rd calculator

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

// 4th calculator

const differenceForm = document.querySelector('#difference-form');
const difference1 = document.querySelector('#difference_1');
const difference2 = document.querySelector('#difference_2');
const differenceResult = document.querySelector('#difference_result');

const difference = function () {
    let first = parseInt(difference1.value);
    let second = parseInt(difference2.value);
    let differenceFunction = module2.difference(first, second);
    differenceResult.value = differenceFunction;
};
differenceForm.addEventListener('change', difference);

// 5th calculator

const aspectForm = document.querySelector('#aspect-form');
const aspectRatio1 = document.querySelector('#ratio_1');
const aspectRatio2 = document.querySelector('#ratio_2');
const ratioWidth = document.querySelector('#ratio_result-width');
const aspectRatioResult = document.querySelector('#ratio_result-height');

const calculateAspectRatio = function () {
    let originalRatio1 = parseInt(aspectRatio1.value);
    let originalRatio2 = parseInt(aspectRatio2.value);
    let valueType = parseInt(ratioWidth.value);
    let aspectRatioForm = module1.calculateAspectRatio(originalRatio1, originalRatio2, valueType, aspectRatioResult);
    aspectRatioResult.value = aspectRatioForm;
};
aspectForm.addEventListener('change', calculateAspectRatio);
//import * as aspectRatio from './aspect-ratio.js';
import {
    calculateAspectRatio
} from './aspect-ratio.js';

let aspectForm = document.querySelector("#aspect-form");
let originalWidth = document.querySelector("#ratio_1");
let originalHeight = document.querySelector("#ratio_2");
let newWidth = document.querySelector("#ratio_result-width");
let newHeight = document.querySelector("#ratio_result-height");

const calcAspectForm = function () {
    const oldWidth = Number(originalWidth.value);
    const oldHeight = Number(originalHeight.value);
    let newValue = null;
    let valueType = null;
    if (newWidth.value > 0) { // because in a 3-dimensional cannot be 0
        newValue = Number(newWidth.value);
        valueType = 'w';
    } else {
        newValue = Number(newHeight.value);
        valueType = 'h';
    }
    if (valueType === "w") {
        newHeight.value = calculateAspectRatio(oldWidth, oldHeight, newValue, valueType);
    } else {
        newWidth.value = calculateAspectRatio(oldWidth, oldHeight, newValue, valueType);
    }
}
aspectForm.addEventListener('change', calcAspectForm);
