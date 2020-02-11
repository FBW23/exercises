// # Spread the Word

console.log();
console.log('#### 1. Combining Arrays');
console.log();
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

let euroCountries = ["germany", "holland", "spain"];
let asianCountries = ["myanmar", "laos", "cambodia"];
euroCountries.push(...asianCountries);
console.log(euroCountries);
let euroPopStars = ["adele", "geri halliwell", "bonny tyler"];
let usaPopStars = ["pink", "kylie minogue", "madonna"];
let worldPopStars = euroPopStars.concat(...usaPopStars); // push does not work in this context of creating a variable.
console.log(worldPopStars);

console.log();
console.log('#### 2. Copying Arrays');
console.log();
// * Copy an array using the spread operator. Store the copied array in another variable. 

let cloneEuroCountries = [...euroCountries];

console.log();
console.log('#### 3. Find the Largest... ');
console.log();
// Create a function to find the largest number in an array.

const setOfNumbers = arr => {
    return Math.max(...arr);
}

console.log(setOfNumbers([13, 57, 43, 82]));

console.log();
console.log('#### 4. Find the Smallest');
console.log();
// Create a function to find the smallest number in an array.

const setOfNumbers2 = arr => {
    return Math.min(...arr);
}

console.log(setOfNumbers2([13, 57, 43, 82]));

console.log();
console.log('#### 5. Clone and Merge');
console.log();
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

const person = {
    name: "John"
};

const job = {
    role: "Teacher"
};

let clonePersonObject = {
    ...person
};

const employee = {...person, ...job};
console.log(employee);
employee.name = 'Skualo';
employee.role = 'Sk8r';
console.log(employee);

console.log();
console.log('#### Bonus: 6.  Is the average a whole number?');
console.log();

// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

const isWhole = (...numbers) => {
    let sum = 0;
    let average = 0;
    for (let num in numbers) {
        sum += numbers[num];   
        console.log('sum ->', sum); 
        average = sum / numbers.length;
        // console.log('average ->', average);
    }
    console.log(`average ->`, average);
    return Number.isInteger(average);
};

// KEINE AHNUNG!!!

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(9, 2, 4, 9));