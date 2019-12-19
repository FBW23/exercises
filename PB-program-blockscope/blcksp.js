console.log();
console.log("1. UPDATER")
console.log();
let determiner = 7;
let updater = 5;

let x = (determiner >= 0) ? 'Greater or equal to 0' : 'Less than 0';

console.log("display result of ternary statement ->", x);

if (determiner >= 0) {
    console.log("Greater or equal to 0");
} else {
    console.log("Less than 0");
}

console.log();
console.log("2. New Variables");
console.log();
if (determiner >= 0) {
    updater = 'Greater or equal to zero';
    let message = 'Positive Integer';
    console.log(message);
} else {
    updater = 'Less than 0';
}

// console.log(updater); cannot be displayed outside of the block! unless I define the variable with var instead of let - in that case message would be printed anywhere on the page.

// I use a ternary statement when I have a condition and two arguments. IF / ELSE seems to serve the same function. I don't really understand so far when to use one and when the other! I guess the IF / ELSE statement lets me modify / interact with conditions in more resulting statements


// ELSE IF
let christmas = true;
let newYearsEve= false;
let decoration = null;

if (christmas) {
    decoration = "christmas decoration";
} else if (newYearsEve) { // a condition that applies asa the first is false
    decoration = "new years eves decoration";
} else {
    decoration = null;
}

console.log(decoration);

// some time later

christmas = false;
newYearsEve = true;

if (christmas) {
    decoration = "christmas decoration";
} else if (newYearsEve) { // a condition that applies asa the first is false
    decoration = "new years eves decoration";
} else {
    decoration = null;
}

console.log(decoration);

// It is not possible to have an "if else" condition in a ternary.

let month = 1;
if (month === 1) {
    console.log('january');
} else if (month !== 1) {
    console.log('february');
}

month = 2;

if (month === 1) {
    console.log('january');
} else if (month === 2) {
    console.log('february');
} else if (month === 3) {
    console.log('march');
} else if (month === 4) {
    console.log('april');
} else if (month === 5) {
    console.log('may');
} else if (month === 6) {
    console.log('june');
} else if (month === 7) {
    console.log('july');
} else if (month === 8) {
    console.log('august');
} else if (month === 9) {
    console.log('september');
} else if (month === 10) {
    console.log('october');
} else if (month === 11) {
    console.log('november');
} else if (month === 12) {
    console.log('december');
} else {
    console.log('happy new year');
}