console.log(`# Objects: Part 2`);

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

console.log(`**2. Scrabble.**`);
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

console.log(`**3. Is it an empty object?**`);
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

console.log(`**4. Counting Letters.**`);
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

const countLetters = string => {
    let object = {};
    string = string.toLowerCase();
    for (let index in string) {
        if (object[string[index]]) {
            object[string[index]]++;
        } else {
            object[string[index]] = 1;
        }
    }
    return object;
}

// // -
console.log(countLetters("precipitevolissimevolmente"));
// // ➞ {t: 1, r: 1, e: 2}

console.log(`**5. Free Shipping.**`);
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

const freeShipping = object => {
    sum = 0;
    for (key in object) {
        sum += object[key];
    }
    if (sum > 50) {
        return true;
    }
    return false;
};

console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));
// ➞ false
console.log(freeShipping({
    "Surround Sound Equipment": 499.99
}));
// ➞ true
console.log(freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));
// ➞ false

console.log(`**6. Programming Object.**`);

// ```javascript
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    newMethod: function () {
        if (programming.isChallenging === true && programming.isRewarding === true) {
            return `Learning the programming languages: "JavaScript, Python, Ruby, Go".`;
        }
    }
};

// ```

// - Write the command to add the language "Go" to the end of the languages array.

programming.languages.push('Go');
console.log(programming.languages);

// - Change the difficulty to the value of 7.

programming.difficulty = 7;
console.log(programming.difficulty);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;
console.log(programming);

// - Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;
console.log(programming);

// - Using a loop, iterate through the languages array and console.log all of the languages.

for (const key in programming.languages) {
    console.log(`language values ->`, programming.languages[key]);
};

// - Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
    console.log(`key ->`, key);
}
// - Using a loop, console.log all of the values in the programming object.

for (const value in programming) {
    console.log(`value ->`, programming[value]);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

console.log(programming.newMethod());

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.

console.log(Object.freeze(programming));
delete programming.languages;
console.log(programming);
