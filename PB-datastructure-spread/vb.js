// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
console.log(``);
console.log(`======================================`);
console.log(`(1)`);
console.log(`Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. `);
console.log(`======================================`);
console.log(``);

const euroCountries = ['Germany', 'Sweden', 'France'];


const asianCountries = ['Japan', 'China', 'Korea'];


euroCountries.push(...asianCountries);
console.log(euroCountries);
console.log(``);
console.log(`======================================`);
console.log(``);
console.log(`* Once again create two arrays. Save all elements of both arrays to another variable. `);
// * Once again create two arrays. Save all elements of both arrays to another variable. 
console.log(`======================================`);
console.log(``);
const array1 = ['first', 'second', 'third'];

const array2 = ['fourth', 'fifth', 'sixth'];


const twoArraysTogether = `${array1},${array2}`;

console.log(twoArraysTogether);
console.log(``);
console.log(`======================================`);
console.log(``);
// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
console.log(``);
console.log(`======================================`);
console.log(`(2.)`);
console.log(`Create a function to find the smallest number in an array`);
console.log(``);
const asia = [...asianCountries];
console.log(asia);


console.log(`======================================`);
console.log(``);
// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
console.log(``);
console.log(`======================================`);
console.log(`(3.)`);
console.log(`Create a function to find the smallest number in an array`);
console.log(``);


biggestNumber = (numbers) => {

    return Math.max(...numbers);
}

console.log(biggestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(``);
console.log(`======================================`);
console.log(``);


// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
console.log(``);
console.log(`======================================`);
console.log(`(4.)`);
console.log(`Create a function to find the smallest number in an array`);
console.log(``);


smallestNumber = (numbers) => {

    return Math.floor(...numbers);
}

console.log(smallestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(``);
console.log(`======================================`);
console.log(``);

// #### 5. Clone and Merge
// Given two objects:

// const person = {name: "John"}
// const job = {role: "Teacher"}

// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
// * 5.3 Then change the values of the properties in the employee object.

console.log(``);
console.log(`======================================`);
console.log(`(5.)`);
console.log(`Clone and Merge. Given two objects:  const person = {name: "John"} const job = {role: "Teacher"}`);
console.log(`======================================`);
console.log(``);


const person = { name: "John" };
const job = { role: "Teacher" };


console.log(`======================================`);
console.log(`(5.1.)`);
console.log(`Clone the person object.`);
console.log(`======================================`);
console.log(``);


const person2 = { ...person };
console.log(person2);

console.log(``);
console.log(`======================================`);
console.log(`(5.2.)`);
console.log(` Merge these two objects into one object: "employee". Use the spread operator to do so.`);
console.log(`======================================`);
console.log(``);
const employee = { ...person, ...job };
console.log(employee);

console.log(``);
console.log(`======================================`);
console.log(`(5.3.)`);
console.log(` Then change the values of the properties in the employee object.`);
console.log(`======================================`);
console.log(``);
employee.role = 'soldier';
employee.name = 'Ultimate';
console.log(employee);
console.log(``);
console.log(`======================================`);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

console.log(``);
console.log(`======================================`);
console.log(`(6.)`);
console.log(`  Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.`);
console.log(`======================================`);
console.log(``);

const isWhole = (num1, num2, num3, num4) => {
    const average = (num1 + num2 + num3 + num4) / 4
    return Math.floor(average)===average;
}

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));


// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

const isWhole2 = (...num) => {
    let sum = 0;



    for (let i = 0; i < num.length; i++) {
        
        sum += num[i];
       //console.log(num[i]);
    }
    let average = sum / num.length;
   // console.log(sum);
   // console.log(average);
    return Math.floor(average)===average;
}
console.log(isWhole2(...[5, 5, 5, 5]));