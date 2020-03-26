//1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. 
//Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.
console.log("=== TASK 1 ====");

let euroCountries = ["France", "Italy", "Germany"];
let asianCountries = ["China", "Japan", "Russia"];
euroCountries.push(...asianCountries);
console.log(euroCountries);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
console.log("=== TASK 2 ====");
const spreadedArray = [...euroCountries];
console.log(spreadedArray);

// 3. Find the Largest...
// Create a function to find the largest number in an array.
console.log("=== TASK 3 ====");

const largestNumber = (array) => {
    return Math.max(...array);
}
console.log(largestNumber([2, 54, 1, 989, 3655]));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log("=== TASK 4 ====");
const smalestNumber = (array) => {
    return Math.min(...array);
}
console.log(smalestNumber([34, 987, -1, 26]));


// 5. Clone and Merge
// Given two objects:
console.log("=== TASK 5 ====");

const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};

// 5.1 Clone the person object.
const clonedPerson = {
    ...person
};
console.log(clonedPerson);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {
    ...person,
    ...job
};
console.log(employee);


// 5.3 Then change the values of the properties in the employee object.
employee.name = "Bianca";
employee.role = "Student";
console.log(employee);


//Bonus: 6. Is the average a whole number?

// Create a function that takes 4 integers as parameters and returns true or false depending on 
//whether the average of all the arguments is a whole number or not.
console.log("=== TASK 6 ====");

// const isWhole = (num1, num2, num3, num4) => {
//     let average = (num1 + num2 + num3 + num4) / 4
//     if (Number.isInteger(average)) {
//         return true;
//     } else {
//         return false;
//     }
// };

const isWhole = (array) => {
    let average = array[0] + array[1] + array[2] + array[3] / array.length;
if (array.isInteger([average])) {
    return true;
} else {
    return false;

}
};

console.log(isWhole([5, 5, 5, 5]));
console.log(isWhole([4, 6, 2, 8]));
// Once you have created a function, pass in an array as an argument which contains 
//four elements - check if this method still outputs the correct result!