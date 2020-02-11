// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
console.log('---------------------1. Combining Arrays');
const euroCountries = ['france', 'Spain', 'Portugal'];
const asianCountries = ['China', 'India', 'Thailand'];
euroCountries.push(...asianCountries);
console.log(euroCountries);

// * Once again create two arrays. Save all elements of both arrays to another variable. 

const americanCountries = ['USA', 'Canada', 'Mexico'];
const africanCountries = ['Morocco', 'Nigeria', 'South Africa'];
const africaAmerica = americanCountries.concat(africanCountries);
console.log(africaAmerica);

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
console.log('---------------------2. Copying Arrays');
const copyAfricanCountries = [...africanCountries];
console.log(copyAfricanCountries);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
console.log('---------------------3. Find the Largest');

const largestNumber = array => Math.max(...array);

console.log(largestNumber([1, 19, 6]));

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log('---------------------4. Find the Smallest');
const smallestNumber = array => Math.min(...array);

console.log(smallestNumber([38, 23, 100]));

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
console.log('---------------------5. Clone and Merge');
const person = {name: "John"};
const job = {role: "Teacher"};

// * 5.1 Clone the person object.
const newPerson = {...person};
console.log(newPerson);

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
const employee = {...person, ...job};
console.log(employee);
// * 5.3 Then change the values of the properties in the employee object.
employee.name = 'Julien';
employee.role = 'Student';
console.log(employee);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average 
// of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

console.log('---------------------6.  Is the average a whole number?');

const isWhole = (...numList) => {
    let sum = 0;
    for (let number in numList) {
        sum += numList[number];
    } if(sum % numList.length === 0) {
        return true;
    } return false;
};

// const isWhole = arr => arr.reduce((p,c) => p +c ) / arr.length);

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(9, 2, 4, 9));

// * Once you have created a function, pass in an array as an argument which contains four elements - 
// check if this method still outputs the correct result!
console.log();

console.log(isWhole([9, 2, 4, 9]));  // => wrong result
console.log(isWhole(...[9, 2, 4, 9]));  // => correct result
