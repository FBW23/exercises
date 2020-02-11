// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 

const euroCountries = ['Germany', 'Italy', 'Spain'];
const asianCountries = ['China', 'India', 'Japan'];

euroCountries.push(...asianCountries);

console.log(euroCountries);

// * Once again create two arrays. Save all elements of both arrays to another variable. 

const animals = ['Cats', 'Worms', 'Elephants'];
const plants = ['Babosa', 'Cactus', 'Palms'];

const aniPlants = [...animals, ...plants];

console.log(aniPlants);


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
const myArray = ['Egal', 'Avocado'];
const mySecondArray = ['Brunch', 'Park'];

const myClone = [...myArray, ...mySecondArray];
console.log(myClone);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
const numbers = [1, 2, 3, 4];

const findTheLargest = (numbers) => {
    let max = Math.max(...numbers);
    return max;
};


console.log(findTheLargest(numbers));

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
const findTheSmallest = (numbers) => {
    return Math.min(...numbers);
};

console.log(findTheSmallest(numbers));
// #### 5. Clone and Merge
// Given two objects:
// ```javascript
const person = { name: "John" };
const job = { role: "Teacher" };
// ```
// * 5.1 Clone the person object.
const personClone = { ...person };
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...personClone, ...job};
console.log(employee);
// * 5.3 Then change the values of the properties in the employee object.
employee.name = 'Julia';
employee.role = 'student';

console.log(employee);
// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
const isWhole = (...args) =>{
    let sum = 0;
    
    for(item in args){
        sum += args[item]; 
    
    } let average = sum/args.length;
    return Math.floor(average)===average

    };

console.log(isWhole(4, 4));
console.log(isWhole(9, 2, 2, 5));
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!