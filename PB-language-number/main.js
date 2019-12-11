/*#### 1. Concatenation. 
* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;
```
*/

let num=25;
let string='my favourite number is'

console.log(`${string} ${num}`);



// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.






// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 

let string2='1005';
let string3='10.05';
let string2Num =parseFloat(string2) ;
let string3Num =parseFloat(string3) ;

console.log(parseFloat(string2Num));
console.log(parseFloat(string3Num));





// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9



let thirty=30;
let nine=939;
let forty=40.9;

console.log(thirty%2 === 0 ? '30 is even': '30 is odd' );

console.log(nine%2 === 0 ? '30 is even': '30 is odd' );
console.log(forty%2 === 0 ? '30 is even': '30 is odd' );

console.log(`Wife sends her programmer husband grocery shopping
    She tells him:
    I need butter, sugar and cooking oil. Also, get a loaf of bread and if they have eggs, get 6.
    The husband returns with the butter, sugar and cooking oil, as well as 6 loaves of bread.
    The wife asks: “Why the hell did you get 6 loaves of bread?”
    To which the husband replies: They had eggs.`)
