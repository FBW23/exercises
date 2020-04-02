function _fixRoundingErrors(float) {
    return parseFloat(float.toFixed(2));
}

// How can we use this? 
// What values can valueType be? 
// Explained a little bit more ;) 

function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
    if ((originalHeight <= 0) || (originalWidth <= 0) || (newValue <= 0)) {
        return 0;
    }
    let formula = (valueType === "h") ?
        originalWidth / originalHeight :
        originalHeight / originalWidth;
<<<<<<< HEAD
    return fixRoundingErrors(formula * newValue);
}

export{fixRoundingErrors,calculateAspectRatio} 
=======
    return _fixRoundingErrors(formula * newValue);
}

export { calculateAspectRatio };
>>>>>>> f1a33fc134d1448ddc45134df375d21d69b70557
