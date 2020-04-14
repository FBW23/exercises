// Your code goes here!

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