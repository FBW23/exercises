//import * as percentage from './percentage.js';

import {
    modulo,
    percentage,
    percentageOf,
    difference
} from './percentage.js';


export {
    fixRoundingErrors,
    calculateAspectRatio
}
from './aspect-ratio.js';

const moduloForm = document.querySelector("#modulo-form");
const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");


const moduloFunction = () => {
    let first = Number(modulo1.value);
    let second = Number(modulo2.value);
    moduloResult.value = modulo(first, second);

    // console.log(typeof moduloResult.value)
};

moduloForm.addEventListener("change", moduloFunction);



const percentageForm = document.querySelector("#percentage-form");
const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");


const percentageFunction = () => {
    let first = Number(percentage1.value);
    let second = Number(percentage2.value);
    percentageResult.value = percentage(first, second);

    // console.log(typeof moduloResult.value)
};

percentageForm.addEventListener("change", percentageFunction);



const percentageOfForm = document.querySelector("#percentageOf-form");
const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");


const percentageOfFunction = () => {

    let first = Number(percentageOf1.value);
    let second = Number(percentageOf2.value);

    percentageOfResult.value = percentageOf(first, second);


};

percentageOfForm.addEventListener("change", percentageOfFunction);



const differenceForm = document.querySelector("#difference-form");
const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");


const differenceFunction = () => {
    let first = Number(difference1.value);
    let second = Number(difference2.value);
    differenceResult.value = modulo(first, second);

    // console.log(typeof moduloResult.value)
};

differenceForm.addEventListener("change", differenceFunction);




//ASPECT RATIO


let aspectForm = document.querySelector("#aspect-form");
let originalWidth = document.querySelector("#ratio_1");
let originalHeight = document.querySelector("#ratio_2");
let newWidth = document.querySelector("#ratio_result-width");
let newHeight = document.querySelector("#ratio_result-height");

// aspectRatio = () => {
//     originalWidth = Number(originalWidth.value);
//     originalHeight = Number(originalHeight.value);
//     //  let valueType=typeof(ratioResultWidth.value)
//     if (newWidth.value) {
//         let newValue = Number(newWidth.value);
//     }
//     if (newHeight.value) {
//         let newValue = Number(newHeight.value);
//     };
//     console.log(typeof (newValue));
//     let valueType = typeof (newValue);


//     ratioResultWidth.value = calculateAspectRatio(originalWidth, originalHeight, newValue, valueType)


// };


originalWidth = Number(originalWidth.value);
originalHeight = Number(originalHeight.value);
let newValue = 0;
if (newWidth.value > 0) {
    newValue.value = Number(newWidth.value);
}
if (newHeight.value > 0) {
    newValue.value = Number(newHeight.value);
};
console.log(typeof (newValue));
let valueType = typeof (newValue);

// function fixRoundingErrors(float) {
//     return parseFloat(float.toFixed(2));
// }

// function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
//     if ((originalHeight <= 0) || (originalWidth <= 0) || (newValue <= 0)) {
//         return 0;
//     }
//     let formula = (valueType === "h") ?
//         originalWidth / originalHeight :
//         originalHeight / originalWidth;
//     return fixRoundingErrors(formula * newValue);


}




newValue.value = fixRoundingErrors();




// aspectForm.addEventListener("change", aspectRatio);
aspectForm.addEventListener("change", calculateAspectRatio);
