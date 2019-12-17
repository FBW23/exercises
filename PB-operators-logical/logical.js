// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "a" with the value of true, and "b" with the value of false. 
let a = true;
let b = false;


// 1. Check the result of:

// - a) a AND b. 
console.log(a && b);
//false
// - b) a OR b. 
console.log(a || b);
//true

// - c) NOT (a AND b). 
console.log(!(a || b ));
//false

// 2. Declare three more variables "x", "y", "z". Give these variables number values. 
let x=2;
let y=3;
let z=4;

// 3. Check the result of whether:

// - a) x is greater than z AND x is greater than y. 
console.log(x > z && x > y);
//false

// - b) x is NOT equal to y. 
console.log(!(x === y));
//true

// - c) z is less than y OR z is greater than x. 
console.log(z < y || z > x);
//true

// - d) x is equal to z OR x is NOT equal to y.
console.log(x === z || x !== y);
//true

// - e) x is greater than or equal to 10 AND y is less than or equal to 10. 
console.log((x >= 10) &&  (y <= 10));
//false

// - f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
console.log((x*z<100) || (x*y>100));
//true

// 4. BONUS: Explain in words the logic of each result in a comment after the result.


