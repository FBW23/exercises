// 1. Combining Arrays
//Create two arrays. e.g. euroCountries and 
//asianCountries. Add asianCountries items to the 
//end of euroCountries array.
//Once again create two arrays. Save all elements 
//of both arrays to another variable.

console.log("~~~~~~~~~~~~~~~1. Combining Arrays~~~~~~~~~~~~~~~~");

const euroCountries = ["Bulgaria", "Spain", "Greece", "Germany"];
const asianCountries = ["Japan", "China"];

euroCountries.push(...asianCountries);
console.log(euroCountries);

const food = ["Paella", "Rise with Chicken", "Bob"];
const drinks = ["Wine", "Beer", "Water"];

// const newVariable = [...food, ...drinks];

const newVariable = ([...food, ...drinks]).toString();

console.log(newVariable);

// 2. Copying Arrays
// Copy an array using the spread operator. 
// Store the copied array in another variable.

console.log("~~~~~~~~~~~~~~~2. Copying Arrays~~~~~~~~~~~~~~~~");

const myArray = [1, 2, 3, 4];
const cloneMyArray = [...myArray];
console.log(cloneMyArray);

//3. Find the Largest...
//Create a function to find the largest number in an array.

const findLargest = arr => {
  return Math.max(...arr);
};

console.log(findLargest([1, 2, 3, 4, 5]));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.

const findSmallest = arr => {
  return Math.min(...arr);
};

console.log(findSmallest([1, 2, 3, 4, 5]));


// 5. Clone and Merge
///Given two objects:
const person = {
  name: "John"
};
const job = {
  role: "Teacher"
};

//5.1 Clone the person object.

const clonePerson = {
  ...person
};
console.log(clonePerson);

//5.2 Merge these two objects into one object: 
//"employee". Use the spread operator to do so.

const employee = {
  ...person,
  ...job
};
console.log(employee);

//  Then change the values of the properties in the employee object.
employee.name = "Plamen";
employee.role = "Web Developer";

console.log(employee);

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and 
//returns true or false depending on whether 
//the average of all the arguments is a whole number or not.

const isWhole = (...arr) => {
  function sum(a, x, y, z, ) {
    return (a + x + y + z) / 4;
  };
  if (sum(...arr) % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(2, 2, 2, 2));
console.log(isWhole[2, 2, 2, 2]); // Prints undefined 