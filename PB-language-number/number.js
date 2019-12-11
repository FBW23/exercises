// # Strings and Numbers

// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// ```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(`${introSentence} ${age}`);// just merge string with number
console.log(introSentence+' '+age);


// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 
const zipCode = '1005';
const newZip = parseInt(zipCode);
console.log(newZip); 
const stepWidth='10.05';
const newWidth= parseInt(stepWidth);
console.log(newWidth);


// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9


let one = 30,
second =939,
third = 40.9;
console.log( (one%2)? 'odd':'even',(second%2)? 'odd':'even',(third%2)? 'odd':'even');
