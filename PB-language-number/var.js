// # Strings and Numbers

// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// ```javascript
// let introSentence = "hello, my name is Fran and I am";
// let age = 25;
// ```

let introSentence = "hello, my name is Fran and I am";
let age = 25;
// console.log(`${introSentence} ${age}`);
console.log(introSentence+' '+age);
// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 

const count ='1005';
const newCount=parseInt(count)
console.log(newCount);
const count_1 ='10.05';
const newCount_1=parseInt(count_1)
console.log(newCount_1);


// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

let zero='30';
let One='939';
let two='40.9';

console.log((zero%2)? 'odd':'even');
console.log((One%2)? 'odd':'even');
console.log((two%2)? 'odd':'even');


