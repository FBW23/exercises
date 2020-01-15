// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "a" with the value of true, and "b" with the value of false. 
let a = true;
let b = false;
// 1. Check the result of:

// - a) a AND b. 
let aAndB =(a) && (b) ? true : false;
console.log(aAndB);


// - b) a OR b. 
let aOrb = (a) || (b) ? true : false;
console.log(aOrb);


// - c) NOT (a AND b). 
let aNotb = (a !== true) && (b) ? true : false;
console.log(aNotb);



// 2. Declare three more variables "x", "y", "z". Give these variables number values. 
let x = 2;
let y = 4;
let z = 6;

// 3. Check the result of whether:

// - a) x is greater than z AND x is greater than y. 

let greater = (x>z) && (x>y) ? true : false;
console.log(greater);


// - b) x is NOT equal to y. 

let notEqual = (x!=y) ? false : true; 
console.log(notEqual);


// - c) z is less than y OR z is greater than x. 
let greaterThan = (z<y) || (z>x) ? true : false;
console.log(greaterThan);
// - d) x is equal to z OR x is NOT equal to y.

let equal = (x===z) || (x!=y) ? false : true;
console.log(equal);


// - e) x is greater than or equal to 10 AND y is less than or equal to 10. 
let greaOrequ = (x>=10) && (x<=10) ? true : false;
console.log(greaOrequ);

// - f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
let multi = (x*z<100) || (x*y>100) ? true : false;
console.log(multi);


// 4. BONUS: Explain in words the logic of each result in a comment after the result.


