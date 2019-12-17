console.log("");
console.log("Print out the lowest number between -1 and 4. ->", Math.min(-1, 0, 1, 2, 3, 4));
console.log("");
console.log("Print out the highest number between -1 and 4. ->", Math.max(-1, 0, 1, 2, 3, 4));
console.log("");
console.log("Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342. ->", Math.ceil(3321.32321), Math.ceil(326.76), Math.ceil(76788.7), Math.ceil(-9.78), Math.ceil(43.342));
console.log("");
console.log("Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329. ->", Math.floor(3321.32321), Math.floor(326.76), Math.floor(76788.7), Math.floor(-9.78), Math.floor(28.329));
console.log("");
console.log("Create a program that prints a random **_integer_** from 1 - 6.");
console.log("");
let randomNumber = Math.random();
console.log("random number between 0 and 6 ->", Math.ceil(randomNumber * 6));
console.log();
console.log("6 SIDES DICE ROLL")
let min = 1;
let max = 6;
console.log("Result is: ", Math.floor(Math.random() * (max - min + 1)) + min);
console.log();
// NUMBER PITFALLS

console.log("typeof NaN is ->", typeof (NaN));
console.log("is 23 not a number?", isNaN(23)); // boolean to determine if it is a number or not
console.log("is a string not a number?", isNaN('bau')); // true - not a number
console.log("is Infinity a number?", isNaN(1 / 0));
console.log("one divided by zero gives:", 1 / 0); // infinity
console.log("typeof Infinity ->", typeof (Infinity)); // number
// e = 2.7;
// pi = 3.14;
console.log("shows the constants saved in the JS library ->", Math.E, Math.PI, Math.exp(5)); // 
console.log("calculation with these constants ->", Math.E * Math.PI); // calculation with these constants.
// DEALING WITH ROUNDING ERRORS
console.log();
console.log(Math.E / Math.PI);
console.log(Math.round(Math.PI)); // cuts off all the digits after the point
console.log("PI ->", Math.PI);
console.log(Math.PI.toFixed(1)); // leaves one digit after the comma
console.log(Math.PI.toFixed(2)); // money calculation - leaves two digits after the comma
console.log(Number.prototype.toFixed(1));
console.log(Math.PI.toFixed(20)); // more digits available!
// toFixed will put out a string if we don't clculate afterwards
console.log();
console.log(typeof (-Infinity));
console.log(Infinity - Infinity); // calculate NaN
console.log(Infinity + Infinity); // Infinity
console.log(-Infinity + Infinity); // NaN
// calculation with infinity possible (but strange)
