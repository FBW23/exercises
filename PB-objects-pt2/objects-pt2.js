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
    let myString = string.toLowerCase();
    for (let index in myString) {
        if (newObject[myString[index]]) {
            newObject[myString[index]]++;
        } else {
            newObject[myString[index]] = 1;
        }
    }
    return newObject;
};
console.log(countLetters("tree"));

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. 
// An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
console.log('-------------------------5. Free Shipping.');

// const freeShipping = object => {
//     let sum1 = 0;
//     for (let key in object) {
//         sum1 += object[key];
//         if (sum1 > 50) {
//             return true;
//         }
//         return false;
//     }
// };

const freeShipping = price => Object.values(price).reduce((a, b) => a + b) > 50;

console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));
console.log(freeShipping({
    "Surround Sound Equipment": 499.99
}));
console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

// **6. Programming Object.**
console.log('-------------------------6. Programming Object.');


// ```javascript
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    getIsFun: function() {
        if (this.isChallenging && this.isRewarding) {
            return `Learning the programming languages ${this.languages} is rewarding and challenging.`; 
        } 
    }
};
// - Write the command to add the language "Go" to the end of the languages array.
console.log();

programming.languages.push("Go");
console.log(programming.languages);

// - Change the difficulty to the value of 7.
console.log();

programming.difficulty = 7;
console.log(programming.difficulty);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
console.log();

delete programming.jokes;
console.log(programming.jokes);

// - Write a command to add a new key called isFun and a value of true to the programming object.
console.log();

programming.isFun = true;
console.log(programming.isFun);

// - Using a loop, iterate through the languages array and console.log all of the languages.
console.log();

for (const key in programming.languages) {
    console.log(programming.languages[key]);
}

// - Using a loop, console.log all of the keys in the programming object.
console.log();

for (const key in programming) {
    console.log(key);
}
// - Using a loop, console.log all of the values in the programming object.
console.log();

for (const key in programming) {
    console.log(programming[key]);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", 
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. 
console.log();

console.log(programming.getIsFun());
// **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
// => it's printing the name of the function (getIsFun)


// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming);