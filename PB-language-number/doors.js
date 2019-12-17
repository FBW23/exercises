let phrase="hello,my name is Fran and I am ";
let age=25;
console.log (phrase.concat(age));
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.


// 2. Converting
// Create a variable with the value of "1005". Convert it to a number.
// Create a variable with the value of "10.05". Convert it to a number.
let bubbles="1005";
let integer= parseInt(bubbles);
console.log(integer);

let bazinga="10.05";
let integerr= parseFloat(bazinga);
console.log(integerr);
// 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// 30
// 939
// // 40.9

let first=30;
let second=939;
let third=40.9;

// if (first  > 31) {
//   result = "Odd";
// } else {
//   result = "Even";
// }
// console.log(result)

// if (second,third  > 31) {
//   result = "Odd";
// } else {
//   result = "Even";
// }
// console.log(result)


//------------------

let num=1200;
let message;
if (num%2){
    message = 'odd';
}
else{
    message='even';
}

console.log(message);