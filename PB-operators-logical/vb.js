// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "a" with the value of true, and "b" with the value of false. 
console.log('0. Declare two variables: "a" with the value of true, and "b" with the value of false. ');
let a=true;
let b=false;


// 1. Check the result of:
console.log('1. Check the result of: ');
// - a) a AND b. 
console.log('- a) a AND b. ');
console.log('a: '+a);
console.log('b: '+b);



// - b) a OR b. 
console.log('- b) a OR b.  ');
console.log(a || b );

//Checks whether any of a or b is true.

// - c) NOT (a AND b). 

console.log('- c) NOT (a AND b) ');
console.log(a && b ? true:false);

//checks whether both a and b are true.


// 2. Declare three more variables "x", "y", "z". Give these variables number values. 
let x=1;
let y=2;
let z=3;



// 3. Check the result of whether:

console.log('// 3. Check the result of whether:');

// - a) x is greater than z AND x is greater than y. 
console.log('a) x is greater than z AND x is greater than y.');
console.log(x>z && x>y)
//since x is not bigger than z and x is also not bigger than y, the answer is false

// - b) x is NOT equal to y. 
console.log('b) x is NOT equal to y.');
console.log(x!==y ? 'unequal':'equal' );
//x is not equal to y threfore it is true.


// - c) z is less than y OR z is greater than x. 
console.log('c) z is less than y OR z is greater than x. ');
console.log(z<y || z>x );
//z is bigger than y and z is bigger than x , therefore the output is true ( 1 or the other has to be true in order to get true)


// - d) x is equal to z OR x is NOT equal to y.
console.log('d) x is equal to z OR x is NOT equal to y.');
console.log( x===z || x!==y);
//although x  equal to z is false,  z unequal to y is true, therefore the outpot is true.


// - e) x is greater than or equal to 10 AND y is less than or equal to 10. 
console.log('e) x is greater than or equal to 10 AND y is less than or equal to 10. ');
console.log(x>=10 && y<=10);
//x is greater than or equal to  10 : false ,  y is lower than or equal to 10, true. therefore the output is false( both should be true to get true)

// - f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100. 
console.log(') x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.');
console.log(x*z < 100 || x*y > 100);
//x*z is lower than 100:true,  x*y is  higher than 100:false, 1 of them are true, output:true.

// 4. BONUS: Explain in words the logic of each result in a comment after the result.
console.log('4. BONUS: Explain in words the logic of each result in a comment after the result.');

