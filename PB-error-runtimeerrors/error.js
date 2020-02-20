console.log('========Task 1  =======')
// Debugging Exercises
// 1. Fido says...
// In the following code, we want fido to bark. Instead, we get an error. Why?
class Dog {
    constructor(name) {
        this.name = name;

    }
    bark() {
        console.log(`${this.name} says woof`);
    }
}
const fido = new Dog("fido");
fido.bark() //TypeError: fido.bark is not a function
// Edit the code to make fido bark.
// 2. Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.

// Example
// getMonthName(15) -> Invalid Month Number!

console.log('========Task 3 =======')
// 3. Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
 const reverseString = function(string) {
    return string.split('').reverse().join('');
}
reverseString("hello");
reverseString(80085);
// Example
// reverseString(2019) -> ERROR! This is not a string!

console.log('=============Task 4 =========')
// 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Someone wrote the following code:

function compareArrays(arr1, arr2) {
    if (arr1.sort().toString() === arr2.sort().toString()) {
        return true
    } else {
        return false
    }
}
// Why doesn't the code work?

// Fix the code (or restart) to solve the problem.

// Examples of output

console.log(compareArrays([1, 2], [1, 3])) //➞ false

console.log(compareArrays([1, 2], [1, 2])) // ➞ true

console.log(compareArrays([4, 5, 6], [4, 5, 6])) // ➞ true

console.log(compareArrays([4, 7, 6], [4, 5, 6])) // ➞ false
console.log('======Task 5 ======')
// 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.

const sum = (array) => array.reduce((a, b) => a + b);



console.log(sum([1, 2, 3]));