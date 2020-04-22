// Spread the Word
// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
console.log('====== Task 1 =====')
const euroCountries = ['France', 'Latvia', 'Belarus', 'Cyprus', 'San Marino'];
const asianCountries = ['Nepal', 'Mongolia', 'Bhutan', 'Indonesia', 'Philipines'];
euroCountries.push(...asianCountries);
console.log(euroCountries);
// Once again create two arrays. Save all elements of both arrays to another variable.
const euroBubbles = ['France', 'Latvia', 'Belarus', 'Cyprus', 'San Marino'];
const asianBubbles = ['5', 'Mongolia', 'Bhutan', 'Indonesia', 'Philipines'];
const euroAsianBubbles = euroBubbles.concat(asianBubbles);
console.log(euroAsianBubbles);
// 2. Copying Arrays
console.log('====== Task 2 =====')
const sobremesas = ['Bolo', 'Brigadeiro', 'Quindim'];
const novaSobremesa = [
    ...sobremesas
];
console.log(novaSobremesa);

// Copy an array using the spread operator. Store the copied array in another variable.
// 3. Find the Largest...
// Create a function to find the largest number in an array.
console.log('=======Task 3 =====')
const biggestNumber = num => Math.max(...num);
const bigNumbers = [2, 3, 4, 5, 899];
console.log(biggestNumber(bigNumbers));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log('======Task 4  ====')
const smallestNumber = num => Math.min(...num)
const smallNumbers = [2, 3, 4, 5, 899];
console.log(smallestNumber(smallNumbers));
// 5. Clone and Merge
// Given two objects:

const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};
// 5.1 Clone the person object.
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
employee.name = "Epaminondas"
console.log(employee);

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

const isWhole = arr => arr.reduce((p, c) => p + c) / arr.length;

const result = isWhole([1, 2, 3, 4]);

console.log(Number.isInteger(result));