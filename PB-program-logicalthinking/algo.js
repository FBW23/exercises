//1.
let a, b;

function event() {
    let message;
    if (a > b) {
        message = a;
    } else {
        message = b;
    }
    return message;
}

function print() {
    let z, r;
    return Math.max(z, r);
}


//2.
let x, y;

function isIt() {
    let result;
    if (x === y) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

//3.
let f, g;
let collection = [f, g]

function truth() {
    let lie;
    if (collection[0] > collection[1]) {
        lie = true;
    } else {
        lie = false;
    }
    return lie;
}
//3.
function math() {
    if (collection[0] - collection[1] > 0) {
        return 'true';
    } else {
        return false;
    }

}