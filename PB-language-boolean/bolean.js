// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. 
// Then, check whether they are equal while using strict comparison. 
console.log(3=="3");  //its an abstract comparation
console.log(3==="3"); //most strict, compare the differents between types of value
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
//strict eguality is most strict than the loo
// * Which comparison operator should we generally use? Why?   - 'Strict equality is most used" 
// * What would happen if we were to use `=`?  
 


// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator
// ,print the `false` option by checking the value of the initial variable.
let angel = true;
let situation = !(angel === true)? 'haven':'hell';
console.log(situation);
// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.



// ```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
// printed Stacey
