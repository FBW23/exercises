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


const sumOfCubes = (numb1, numb2, numb3) => {
    if (numb1, numb2, numb3) {
        return Math.pow(numb1, 3) + Math.pow(numb2, 3) + Math.pow(numb3, 3);
    } else if (numb1, numb2) {
        return Math.pow(numb1, 3) + Math.pow(numb2, 3);
    } else if (numb1) {
        return Math.pow(numb1, 3);
    } else {
        return 0;
    }
};

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts 
// with the initial string.

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false
console.log('3. String Check');

const myString = (string, word) => {
    if (word.startsWith(string)) {
        return true;
    } else {
        return false;
    }
};

console.log(myString("bu", "button"));
console.log(myString("tri", "triplet"));
console.log(myString("beau", "pastry"));
console.log(myString("cho", "chateau"));

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
// otherwise return false.

// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false

console.log('4. Less Than or Equal to Zero?');

const lessThanOrEqualToZero = (numb4) => {
    if (numb4 <= 0) {
        return true;
    } else {
        return false
    };
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(100));


// **5. Count Occurrences.** 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

// i.e. 
// countOccurrences("this is a string", "i") ➞ 3 
