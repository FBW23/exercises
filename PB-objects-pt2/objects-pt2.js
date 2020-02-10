// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. 
// Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 }) ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true
console.log('-------------------------1. Check if a number is within a given range.');

const withinAGivenRange = (number, object) => number >= object.min && number <= object.max;

console.log(withinAGivenRange(4, {
    min: 0,
    max: 5
}));
console.log(withinAGivenRange(4, {
    min: 4,
    max: 5
}));
console.log(withinAGivenRange(4, {
    min: 6,
    max: 10
}));
console.log(withinAGivenRange(5, {
    min: 5,
    max: 5
}));

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player 
// can earn from the tiles in their hand.
// Example:
// [
// { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 }
// ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log('-------------------------2. Scrabble.');

const maximumScore = array => {
    let sum = 0;
    for (let object in array) {
        sum += array[object].score;
    }
    return sum;
};

console.log(maximumScore([{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
]));



// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// - {} ➞ true
// - {a: 1} ➞ false
console.log('-------------------------3. Is it an empty object?');

// const isEmpty = (object) => {
//     for (let key in object) {
//         return false;
//     }
//     return true;
// };
const isEmpty = (object) => !(Object.keys(object).length);

console.log(isEmpty({}));
console.log(isEmpty({
    a: 1
}));


// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. 
// Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}
console.log('-------------------------4. Counting Letters.');

const countLetters = string => {
    let newObject = {};
    for (let i= 0; i< string.length; i++) {
        let count = string.indexOf(i);
        console.log(count);
    }
};
console.log(countLetters("tree"));