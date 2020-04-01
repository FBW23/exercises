<<<<<<< HEAD


function fixRoundingErrors(float) {
    return parseFloat(float.toFixed(2));
}

 function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
=======
function _fixRoundingErrors(float) {
    return parseFloat(float.toFixed(2));
}

// How can we use this? 
// What values can valueType be? 
// Explained a little bit more ;) 

function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
>>>>>>> 566a4ea576d8a6271e58da5110866610d650481c
    if ((originalHeight <= 0) || (originalWidth <= 0) || (newValue <= 0)) {
        return 0;
    }
    let formula = (valueType === "h") ?
        originalWidth / originalHeight :
        originalHeight / originalWidth;
<<<<<<< HEAD
    return fixRoundingErrors(formula * newValue);
}

export{ calculateAspectRatio}
=======
    return _fixRoundingErrors(formula * newValue);
}

export { calculateAspectRatio };
>>>>>>> 566a4ea576d8a6271e58da5110866610d650481c
