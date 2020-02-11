//1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. 
//Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.
console.log("=== TASK 1 ====");

let euroCountries = ["France", "Italy", "Germany"];
let asianCountries = ["China", "Japan", "Russia"]; 
let concat = euroCountries.concat(...asianCountries); 
console.log(concat);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
