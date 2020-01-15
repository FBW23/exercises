// **1. Add Up.**
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed 
// to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
console.log('1. Add Up');

let sum = 0;
const myFunction = (number) => {
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
};
const output = myFunction(13);
console.log(output);
//or
console.log(myFunction(600));


// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples: 
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0
console.log('2. Cubed');

let sum1 = 0;

const sumOfCubes = (numb1, numb2, numb3) => {
    if (numb1, numb2, numb3) {
        return sum1 = Math.pow(numb1,3) + Math.pow(numb2,3) + Math.pow(numb3,3);
    } else if (numb1, numb2) {
        return sum1 = Math.pow(numb1,3) + Math.pow(numb2,3);
    }else if (numb1) {
        return sum1 = Math.pow(numb1,3);
    } else {
        return (0);
    }
};

console.log(sumOfCubes(1,5,9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts 
// with the initial string.

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false
