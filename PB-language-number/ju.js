//#### 1. Concatenation. 
/* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;*/

let myString = '32';
console.log(myString);
myString = 'Hi, my name is Julia and I am ';
console.log(myString);
let myNumber = 32;
console.log(myNumber);
let n = myNumber.toString();
console.log(n);

console.log(myString + n);

//* In this case, what is the `+` operator doing? Comment your answer in the js file.

let myFirstanswer = 'The + operator is concatenating the words'
console.log(myFirstanswer);

//2. Converting 
//* Create a variable with the value of "1005". Convert it to a number.
//* Create a variable with the value of "10.05". Convert it to a number. 

let firstValue = '1005';
console.log(firstValue);

let secondValue = '10.05';
console.log(secondValue);

const newNumber = parseInt (firstValue, 10);
console.log(newNumber);

const newSecondnumber = parseFloat(secondValue);
console.log(newSecondnumber);

//Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
//* 30
//* 939
//* 40.9

let firstNumber = ;
let secondN = 939;
let lastN =40.9;

console.log(firstNumber%2===0 ? 'even':'odd');
console.log(secondN%2===0 ? 'even':'odd');
console.log(lastN%2===0 ? 'even':'odd');

console.log('is firstnumber and secondnumber equal')

console.log(firstNumber=== 'ljlkj' ? 'true':'nottrue');


















