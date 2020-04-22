/*
function getMonth(n) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    if (months[n] !== undefined) {
        return months[n];
    } else {
        throw new Error('Invalid Month Number');
    }
}

try {
    const monthName = getMonth(15);
    console.log(monthName);
} catch (e) {
    console.error(e);
}
*/
///////////////////////// reverse string

function reverseStr(str) {
    if (typeof (str) === 'string') {
        return str.split("").reverse().join("");
    } else {
        throw new Error('Please use a string and not another datatype!');
    }
}

try {
    const newStr = reverseStr({ 'k': 1 });

    console.log(newStr);

} catch (e) {
    console.log(e);
}

//////////////////////////////////

function compareArrays(ar1, ar2) {
    if (ar1.length !== ar2.length) {
        return console.log(false);
    }
    for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] !== ar2[i]) {
            return console.log(false);
        }
    }
    return console.log(true);
}

compareArrays([1, 2, 3], [1, 2, 3]);


///////////////////////

let arr1 = [2,4,6,8];

function sumArr(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    else {
        return arr.pop() + sumArr(arr);
    }
};

sumArr(arr1);