// Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.

let x = 20;
let y = 30;

// Check whether x and y are equal.

console.log(x === y); // third is for type equlity check // FALSE

// Check whether x and y are not equal.

console.log(x !== y); // TRUE

// Check whether x is greater than y.

console.log(x > y); // FALSE

// Check whether x is less than or equal to y.

console.log(x <= y); // TRUE

// Check whether y is greater than x.

console.log(y > x); // TRUE

// Declare another variable "z" and give it a value of 5. Multiply z and x, and check whether this result is greater than z added to y.

let z = 5;
let firstRes = (z * x);
let secondRes = (z + y);
console.log('first res=', firstRes);
console.log('second res=', secondRes);
console.log(firstRes > secondRes); // TRUE

// Subtract z from x and check whether this result is less than y divided by z.

let thridRes = (x - z);
let fourthRes = (y / z);
console.log(thridRes);
console.log(fourthRes);
console.log(thridRes < fourthRes); // FALSE

// Check whether z, x and y are equal.

console.log(x === y === z); // FALSE

// Check whether the remainder of x divided by z and the remainder of y divided by z are equal.

let xremz = (x % z);
let yremz = (y % z);
console.log(x === y); // TRUE

// Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.

console.log(x + z > y - z); // FALSE 20+5 > 30-5

console.log(x + z === y - z); // we three equal sings - TRUE