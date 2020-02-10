// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 });
// // ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true

const withinAGivenRange = (number, objectMinMax) => {
    // let isWithin = false;
    // if (number >= objectMinMax.min && number <= objectMinMax.max) {
    //     isWithin = true;
    // }
    return (number >= objectMinMax.min && number <= objectMinMax.max);
};

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

// SHORTEST 

const withinAGivenRange2 = (number, objectMinMax) => (number >= objectMinMax.min && number <= objectMinMax.max);

console.log(withinAGivenRange2(4, {
    min: 0,
    max: 5
}));
console.log(withinAGivenRange2(4, {
    min: 4,
    max: 5
}));
console.log(withinAGivenRange2(4, {
    min: 6,
    max: 10
}));
console.log(withinAGivenRange2(5, {
    min: 5,
    max: 5
}));

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:

// access array array[x]
// access objects obj[y]

const maximumScore = (arr) => {
    let sum = 0;
    for (const key in arr) {
        // const arrayItem = arr[key];
        // const scoreValue = arrayItem.score;
        // sum += scoreValue;
        sum += arr[key].score;
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

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

const ifEmpty = object => !(Object.keys(object).length);

console.log(ifEmpty({
    a: 1
}));
console.log(ifEmpty({}));

// Examples:
// - {} ➞ true
// - {a: 1} ➞ false
// console.log(isEmpty({a: 1}));
// console.log(isEmpty({}));

// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

const countLetters = (string) => {
    let myObject = {};
    for (const letter in string) {
        console.log(string.indexOf(letter));
    }
};

// -
countLetters("tree");
// // ➞ {t: 1, r: 1, e: 2}