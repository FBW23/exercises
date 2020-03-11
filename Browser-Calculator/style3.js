// const add1 = document.querySelector('.add1');
// const add2 = document.querySelector('.add2');
// const result1 = document.querySelector('.result1');

let add1 = document.querySelector('#add1');
let add2 = document.querySelector('#add2');

function adding() {
    let result1 = document.querySelector('#result1');
    result1.value = Number(add1.value) + Number(add2.value);
}

add1.addEventListener("change", adding)
add2.addEventListener("change", adding)


// Minus

let minus1 = document.querySelector('#minus1');
let minus2 = document.querySelector('#minus2');

function minus () {
    let result2 = document.querySelector('#result2');
    result2.value = Number(minus1.value ) -  Number(minus2.value);
}

minus1.addEventListener("change", minus)
minus2.addEventListener("change", minus)

// Multiply

let mul1 = document.querySelector('#mul1');
let mul2 = document.querySelector('#mul2');

function multiply () {
    let result3 = document.querySelector('#result3');
    result3.value = Number(mul1.value ) *  Number(mul2.value);
}

mul1.addEventListener("change", multiply)
mul2.addEventListener("change", multiply)

// Divide

let divid1 = document.querySelector('#divid1');
let divid2 = document.querySelector('#divid2');

function dividing () {
    let result4 = document.querySelector('#result4');
    result4.value = Number(divid1.value ) /  Number(divid2.value);
}

divid1.addEventListener("change", dividing)
divid2.addEventListener("change", dividing)

// Percentage

let per1 = document.querySelector('#per1');
let per2 = document.querySelector('#per2');

function percentages () {
    let result5 = document.querySelector('#result5');
    result5.value = Number(per1.value ) %  Number(per2.value);
}

per1.addEventListener("change", percentages)
per2.addEventListener("change", percentages)