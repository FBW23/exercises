// # True or False? 


// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
// * Which comparison operator should we generally use? Why?
// * What would happen if we were to use `=`?

console.log(3 == "3"); //true
console.log(3 === "3"); //false
//If the values have different types, the values are considered unequal=== strict comparison


// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

let check="true";

console.log(!(check));


// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
// let firstName, givenName;

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(name);
// ```
let firstName, givenName;

firstName= "Stacey";
let name = givenName || firstName || 'John'; 
console.log(name);