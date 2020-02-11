// Spread the Word
// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
console.log('====== Task 1 =====')
const euroCountries = ['France', 'Latvia', 'Belarus', 'Cyprus', 'San Marino'];
const asianCountries = ['Nepal', 'Mongolia', 'Bhutan', 'Indonesia', 'Philipines'];
let concaty = euroCountries.concat(asianCountries);
console.log(concaty);
// Once again create two arrays. Save all elements of both arrays to another variable.
// 2. Copying Arrays
console.log('====== Task 2 =====')
const sobremesas = ['Bolo', 'Brigadeiro', 'Quindim'];
const novaSobremesa = {
    ...sobremesas
};
console.log(novaSobremesa)

// Copy an array using the spread operator. Store the copied array in another variable.
// 3. Find the Largest...
// Create a function to find the largest number in an array.
console.log('=======Task 3 =====')

const bigNumbers = [2, 3, 4, 5, 899];
console.log(Math.max(...bigNumbers));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log('======Task 4  ====')
const smallNumbers = [2, 3, 4, 5, 899];
console.log(Math.min(...smallNumbers));
// 5. Clone and Merge
// Given two objects:

const person = {let values = [2, 56, 3, 41, 0, 4, 100, 23];
    let count = values.length;
const job = {
    role: "Teacher"
};
// 5.1 Clone the person object.
const newPerson = {
    ...person
};
console.log(newPerson);
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
console.log('======Task 5.2=====')
let employee = {
    ...newPerson,
    ...job
};
console.log(employee);
console.log('======Task 5.3======')
// 5.3 Then change the values of the properties in the employee object.
employee.role = 'Magician';
console.log(employee);

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

// function isWhole(a, b, c, d) => (a, b, c, d)



// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!/*  */