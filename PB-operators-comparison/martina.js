// 0. Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.

let x = 20;
let y = 30;
console.log('0. Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.');
console.log('x=' , x , 'y=', y);

// 1. Check whether x and y are equal.

console.log('1. Check whether x and y are equal.');
console.log(x === y); // third = is for type equality check // 1. FALSE

// 2. Check whether x and y are *not* equal. 

console.log(' 2. Check whether x and y are *not* equal.');
console.log(x !== y); // 2. TRUE


// 3. Check whether x is greater than y. 

console.log('  3. Check whether x is greater than y. ');
console.log(x > y); // 3. FALSE

// 4. Check whether x is less than or equal to y. 

console.log('4. Check whether x is less than or equal to y.  ');
console.log(x <= y); // 4. true

// 5. Check whether y is greater than x. 

console.log('5. Check whether y is greater than x. ');
console.log(y > x); // 5. true

// 6. Declare another variable "z" and give it a value of 5. Multiply z and x, and check whether this result is greater than z added to y. 

console.log('6. Declare another variable "z" and give it a value of 5. Multiply z and x, and check whether this result is greater than z added to y. ');
let z = 5;
let multiplyOne = z * x; //20*5=100 
let two = z + y; //5+30=35
console.log(multiplyOne > two); // 100 > 35 // true

// 7. Subtract z from x and check whether this result is less than y divided by z. 

console.log('7. Subtract z from x and check whether this result is less than y divided by z. ')
let sub = x - z; //20-5=15
let div = y / z; //30/5=6
console.log(sub < div); // 15<6 false  

console.log('8. Check whether z, x and y are equal. ');
console.log(x === y === z); // false

// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.  
console.log('9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.');
let xremz = x % z; // 20%5 = 0
let yremz = y % z; // 30%5 = 0
console.log(xremz === yremz); // 0 === 0 TRUE 

console.log(' 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.');

console.log(x + z > y - z); // FALSE 20+5 > 30-5

console.log(x + z >= y - z); // TRUE :) Awesome!

console.log(x + z === y - z); // TRUE :) Awesome!

console.log(x + z <= y - z); // TRUE :) Awesome!

/**
11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
 */