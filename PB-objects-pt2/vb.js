// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 }) ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true

console.log(`==================================`);
console.log(`1.`);

const withinAGivenRange = (number, objectMinMax) => {
    // let isWithin = false; // boolean 
    //     if (number >= objectMinMax.min && number <= objectMinMax.max) {
    //         isWithin = true;
    //     }
    // return isWithin;
    return (number >= objectMinMax.min && number <= objectMinMax.max);
};
const shortest = (number, objectMinMax) => (number >= objectMinMax.min && number <= objectMinMax.max);
console.log(shortest(4, {
    min: 0,
    max: 5
})); // true
console.log(shortest(4, {
    min: 4,
    max: 5
})); // true
console.log(shortest(4, {
    min: 6,
    max: 10
})); // false
console.log(shortest(5, {
    min: 5,
    max: 5
})); // edge case




console.log(`==================================`);

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
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

console.log(`==================================`);
console.log(`2.`);

const maxScore = (myArray) => {
    let sum = 0;
    for (const key in myArray) {
        //console.log(myArray[key]);
        let arrayItem = myArray[key];
        let scoreValue = arrayItem.score;
        sum += scoreValue;
    }
    return sum;
};


console.log(maxScore([{ tile: "N", score: 1 },
{ tile: "K", score: 5 },
{ tile: "X", score: 8 },
{ tile: "Z", score: 10 },
{ tile: "D", score: 2 },
{ tile: "A", score: 1 },
{ tile: "E", score: 1 }]));
console.log(`==================================`);
// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// - {} ➞ true
// - {a: 1} ➞ false



console.log(`==================================`);
console.log(`3.`);
const isEmpty = (object) => {
    Object.keys(object).length;
}
console.log(isEmpty({ a: 1 }));
console.log(isEmpty({}));
console.log(`==================================`);

// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}

console.log(`==================================`);
console.log(`4.`);
console.log(`==================================`);

let myObject = {};
let letters = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, u: 0, x: 0, y: 0, z: 0 };

const countLetters = (myString) => {


    for (let i = 0; i < myString.length; i++) {
        for (const key in letters) {
            if (key === myString.charAt(i)) {

                if (myObject[key]) {
                    myObject[key] += 1;
                }
                else {
                    myObject[key] = 1

                }
            }
        }
    }





    return myObject;

}

console.log(countLetters('bambula'));



// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
console.log(`==================================`);
console.log(`5.`);

const freeShipping2=(order)=> {
    const prices=Object.values(order);
    const reducerFunction = (sumOfPrices,currentPrice) => sumOfPrices+currentPrice


    return prices.reduce(reducerFunction,0);

}
console.log(freeShipping2({ "Sponge": 3.50, "Soap": 5.99 }));

/* console.log(freeShipping2({}))
const freeShipping = (order) => {
    let sum = 0;

    for (const key in order) {
        sum += order[key];
    }

    if (sum > 50) {
        return true;
    } else { return false }
};
console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })); */

console.log(`==================================`);
// **6. Programming Object.**

// ```javascript
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// ```

// - Write the command to add the language "Go" to the end of the languages array.

// - Change the difficulty to the value of 7.
// - Using the delete keyword, write the command to remove the jokes key from the programming object.
// - Write a command to add a new key called isFun and a value of true to the programming object.
// - Using a loop, iterate through the languages array and console.log all of the languages.
// - Using a loop, console.log all of the keys in the programming object.
// - Using a loop, console.log all of the values in the programming object.
// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
console.log(`==================================`);
console.log(`6.`);
console.log(`==================================`);









const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    myFunction: function () {
        if (this.isChallenging === true && this.isRewarding === true) {
            return `Learning programming languages: "${this.languages}" is rewarding and challenging`;
        }
    }
};


console.log(` `);
console.log(`Write the command to add the language "Go" to the end of the languages array. `);

console.log(` `);
console.log(` `);
programming.languages.push('Go');

console.log(` `);
console.log(`Change the difficulty to the value of 7. `);

console.log(` `);
programming.difficulty = 7;

console.log(` `);
console.log(` - Using the delete keyword, write the command to remove the jokes key from the programming object.`);

console.log(` `);
delete programming.jokes;

console.log(` `);
console.log(` - Write a command to add a new key called isFun and a value of true to the programming object.`);

console.log(` `);
programming["isFun"] = true;

console.log(` `);
console.log(`- Using a loop, iterate through the languages array and console.log all of the languages. `);

console.log(` `);
for (const index in programming.languages) {
    console.log(programming.languages[index])
};



console.log(` `);
console.log(`- Using a loop, console.log all of the keys in the programming object.`);

console.log(` `);

for (const index in programming) {
    console.log(programming[index]);
}

console.log(` `);
console.log(`- Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.`);

console.log(``);





console.log(programming.myFunction());


console.log(`freeze`);

//Object.freeze(programming);
console.log(programming);
console.log(``);
//programming.difficulty = 5;
console.log(programming)

const programming2 = programming;

programming2.difficulty = 5;
console.log(programming2)