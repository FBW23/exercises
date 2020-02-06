/**8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

Examples:

evenNums(8) ➞ [2, 4, 6, 8]
evenNums(4) ➞ [2, 4]
evenNums(2) ➞ [2] Notes:
If there are no even numbers, return an empty array.
Do not include 0.
Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.

i.e. alphaOrder("webdev") ➞ "bdeevw"*/

const evenNums = num => {
    let allEvenNums = [];
    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            allEvenNums.push(i);
        }
    }
    return allEvenNums;
};

// Examples:
console.log(evenNums(8));
// ➞ [2, 4, 6, 8]
console.log(evenNums(4));
// ➞ [2, 4]
console.log(evenNums(2));
// ➞ [2]
