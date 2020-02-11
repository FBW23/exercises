// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

const euroCountries = [ 'Germany', 'Italy', 'France'];
console.log(euroCountries);
const asianCountries = [ 'Japan', 'Indonesia', 'Malaysia'];
console.log(asianCountries);

console.log(euroCountries.push(...asianCountries)); // its to push the asian into europe
console.log(euroCountries);

const breakfast = [ 'bread', 'eggs', 'sausages'];
const lunch = [ 'rice', 'noodle', 'pasta'];
console.log(breakfast.concat(lunch));

console.log("............................2....................");

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 

const copyBreakfast = [...breakfast];
console.log(copyBreakfast);

console.log(".............................3...........................");

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

// const largestArray = [10, 7, 9, 23, 63, 109];
// const maxNumber = Math.max(...largestArray);
// console.log(maxNumber);
const largestArray = maxNumber => Math.max(...maxNumber);
console.log(largestArray([10, 7, 9, 23, 63, 109]));

console.log("..........................4...........................");

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

const smallestNumber = small => Math.min(...small);
console.log(smallestNumber([10, 7, 9, 23, 63, 109]));

console.log(".....................5......................");

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

const person = {name: "John"};
const job = {role: "Teacher"};

const employee = {...person, ...job};
console.log(employee);

const copyPerson = {...person};
console.log(copyPerson);

employee.name = 'Nags';
employee.role = 'Student';
console.log(employee);

console.log(".....................6.........................");

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

const calcAverage = (num) => {
    let sum = 0;
    for (number in num) {
        sum += num[number];
    }
    let average = sum / num.length;
    return average;
};
let result = calcAverage([1,2,3,4]);
const isInteger = (result) => Number.isInteger(result);
console.log(isInteger(result));