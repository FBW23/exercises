console.log();
console.log("1. UPDATER")
console.log();
let determiner = 7;
let updater = 5;

let x = (determiner >= 0) ? 'Greater or equal to 0' : 'Less than 0';

console.log(x);

if (determiner >= 0) {
    console.log("Greater or equal to 0");
} else {
    console.log("Less than 0");
}

console.log();
console.log("1. New Variables")
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