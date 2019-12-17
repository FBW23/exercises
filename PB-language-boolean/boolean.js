// # True or False? 


// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
// * Which comparison operator should we generally use? Why?
// * What would happen if we were to use `=`?

console.log('Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. ');
console.log('loose:  ' + (3 == '3'));
console.log('strict:  ', (3 === '3'));

//There is a difference, as the loose check checks only the values of 3 , the strict comparisons also takes it into account that one of them is string, the other onse is a number.

//Strict, as comparing a string to a number can have a different outcome to the desired one.

//The code would not run.


// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
console.log('Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.');
let a = 'true';
console.log(a === 'false' ? 'true':'false');
// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
// let firstName, givenName;

// console.log(`name`)  === name as a string printed, as `name` is not a variable($name), but a string, and we are using the backstring method, so we son't need ' '  to declare a string.

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(`name`) === will not rune as the variable givenName is not defined.

// console.log(name); ==== same as above

// ```