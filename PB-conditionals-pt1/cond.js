let a = 9,
    b = 8;
if ((50 <= a && a <= 99) || (50 <= b && b <= 99)) {
    console.log(true);
} else {
    console.log(false);
}
//2.
let c = 10,
    d = 19,
    e = 4;
if ((50 >= c && c <= 99) || (50 >= d && d <= 99) || (50 >= e && e <= 99)) {
    console.log(true);
} else {
    console.log(false);
}
//3.
let f = 25,
    g = 20,
    h = 26;
if (f > g && f > h) {
    console.log(f);
} else if (g > h) {
    console.log(g);
} else {
    console.log(h);
}

//4.
let originalString = "javascript";
let py = 'Py';
let newString = py.concat(originalString);
let checkString = "Pylkjl";
if ((checkString.includes(py))) {
    console.log(originalString);
}
//5.
let i = 50,
    j = 4;
let sum = i + j;
if (sum >= 50 && sum <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//6.
let k = 12,
    l = 4;
let Sum = k + l;
let minus = k - l;

if (Sum === 8 || minus === 8) {
    console.log(true);
}

//7.

let m = 12,
    n = 15;
let SUm = m + n;
if (m === 15 || n === 15 || SUm === 15) {
    console.log(true);
}
//8.

let int1 = 70,
    int2;

if (int1 % 7 || int1 % 11 || int2 % 7 || int2 % 11) {
    console.log(true);
}

//9.
let int3 = 5,
    int4 = 5;
let sum2 = int3 + int4;
if (int3 === int4) {
    console.log(3 * sum2);
} else {
    console.log(sum2);
}
//10.
let number = 20;
if (number - 19 > 0) {
    console.log((number - 19) * 2);
}
//11.
let firstName = 'jamil',
    age = 19;
if (age < 13) {

    console.log('firstName is a child');
} else if (age >= 13 && age < 20) {

    console.log('firstName is a teenager');
} else if (age = 20 && age < 30) {
    console.log('firstName is a young adult');
} else {
    console.log('firstName is a adult');
}