// # True or False? 


// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 

console.log(3==='3');

// **Questions: Comment your answers in the js file.** 

// * Is there a difference? Why/why not? 
// * Which comparison operator should we generally use? Why?
// * What would happen if we were to use `=`?

let answer = 'There is a difference, because the loose comparison is checking only if they are the same, excluding the data type. We should use the strict comparison, because is more safe and will check also the types. If using = we were applying the value of a var to another var.'
console.log(answer);


// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

let a = true;
console.log(a = false);

// #### 3. Short Circuit
// Given the code below, what will print when we console log `name`? Comment your answer in the js file.

// ```javascript
// let firstName, givenName;

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(name);
// ```

let secndAswer = 'Stacey';
console.log(secndAswer);

