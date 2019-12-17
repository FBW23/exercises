
console.log('Print out the lowest number between -1 and 4.')
console.log(Math.min(-1,0,1,2,3,4));


// Print out the highest number between -1 and 4.
console.log('Print out the highest number between -1 and 4.')
console.log(Math.max(-1,0,1,2,3,4));
// ## 2. Rounding

// ### a. Round up

// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log('Round up the following number: 3321.32321')
console.log(Math.ceil(3321.32321));
console.log('Round up the following number:  326.76')
console.log(Math.ceil(326.76));
console.log('Round up the following number: 76788.7')
console.log(Math.ceil(76788.7));
console.log('Round up the following number: -9.78')
console.log(Math.ceil(-9.78));
console.log('Round up the following number: 43.342')
console.log(Math.ceil(43.342));
// ### b. Round down

// Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
console.log('Round down the following number: 3321.32321')
console.log(Math.floor(3321.32321));
console.log('Round down the following number:  326.76')
console.log(Math.floor(326.76));
console.log('Round down the following number: 76788.7')
console.log(Math.floor(76788.7));
console.log('Round down the following number: -9.78')
console.log(Math.floor(-9.78));
console.log('Round down the following number: 43.342')
console.log(Math.floor(43.342));
// ## 3. Dice Roll!

// Create a program that prints a random **_integer_** from 1 - 6.

console.log(Math.ceil(Math.random()*6));

