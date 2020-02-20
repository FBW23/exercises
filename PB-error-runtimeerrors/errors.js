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
    const newStr = reverseStr({'k':1});

    console.log(newStr);

} catch (e) {
    console.log(e);
}