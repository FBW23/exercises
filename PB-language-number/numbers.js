// * Create two variables. One variable should contain a string value and the other should contain a number. 
// Concatenate the string and the number.

let sentence= 'Welcome to the dimension number';
let numberOne= 420;

console.log(`${sentence} ${numberOne}`);



// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 

let convertOne= '1005';
let convertTwo= '10.05';

let number_One= parseFloat(convertOne);
let number_Two= parseFloat(convertTwo);
console.log(number_One);
console.log(number_Two);


// #### 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

let first= 30;
let second= 939;
let third= 40.9;
console.log('30 is a '+ typeof(first), '939 is a '+typeof(second), '40.9 is a '+typeof(third));

console.log(first% 2==0 ? '30 is even':'30 is odd');
console.log(second% 2==0 ? '939 is even':'939 is odd');
console.log(third% 2==0 ? '40.9 is even':'40.9 is odd');