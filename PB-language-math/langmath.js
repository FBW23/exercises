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
console.log("random number between 0 and 6 ->", Math.ceil(randomNumber*6));
console.log();
let randomNumber2 = Math.random() + 1;
console.log("random number created with round ->", Math.round(randomNumber*6))