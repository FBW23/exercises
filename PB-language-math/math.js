// // # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum

// ### a. Lowest Number

// Print out the lowest number between -1 and 4.
console.log(Math.min(-1,0,1,2,3,4));

// ### b. Highest Number

// Print out the highest number between -1 and 4.
console.log(Math.max(-1,0,1,2,3,4));

// ## 2. Rounding


// ### a. Round up

// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log(Math.round(3321.32321));
console.log(Math.round(326.76));
console.log(Math.round(76788.7));
console.log(Math.round(-9.78));
console.log(Math.round(43.342));
// ### b. Round down
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(43.342));

// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

// ## 3. Dice Roll!
let randomNumber = Math.random();
console.log(Math.floor(randomNumber*(5)+1));


// Create a program that prints a random **_integer_** from 1 - 6.