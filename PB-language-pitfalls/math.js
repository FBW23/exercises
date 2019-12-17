// # Pitfalls 

// #### 1. NaN
// **Question: Comment your answer in your js file**: What does NaN stand for? 
// * Check if `"hello"` is NaN. 
// * Check if `3` is NaN.
// * What is the type of NaN?

let word= "hello";
console.log(isNaN("hello"));
//true

let number="3"
console.log(isNaN("3"));
//false

//NaN is not a keyword (unlike true, false, null, etc..), it is a property of the global object.



// #### 2. Rounding 
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`. 
// Use a method to make sure that only `0.02` is printed.

let a="0.1";
let b="0.2";
console.log((0.1*0.2).toFixed(2));



// #### 3. Infinity
// * Divide Infinity by `0`. 
// * Divide Infinity by Infinity. 
// * Divide `1` by `0`.
console.log(Infinity/0);
console.log(Infinity/Infinity);
console.log(1/0);


