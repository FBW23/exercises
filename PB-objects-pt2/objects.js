/**1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
Examples:
4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true*/

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

const ifEmpty = object => Object.keys(object).length === 0;
console.log(ifEmpty({}));

/**Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

countLetters("tree") ➞ {t: 1, r: 1, e: 2}*/

const countLetters = (string) => {
    let object = {};
    let myString = string.toLowerCase();
    // for(let i=0; i< myString.length; i++)
    for (let balasz in myString) {
        //let currentLetter = myString[balasz];
        let currentLetter = myString.charAt(balasz);
        // not possible with dot notation 
        if (object[currentLetter]) { // check if key/value is present 
            object[currentLetter]++; // add only if already present
        } else {
            object[currentLetter] = 1; // push only if not present yet 
        }
    }
    return object;
};

console.log(countLetters("tree"));
console.log(countLetters("Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz"));


const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// delete different methods 
programming.languages = undefined; // deletes only value
console.log(programming);
delete programming.languages; // deletes key and value completely

// add different methods
programming['hello'] = 'hello';
console.log(programming);
programming.add = 'hello world';
console.log(programming);

// add method
programming.myMethod = function () {
    console.log('Hello World');
}

// update 
programming.difficulty = 10; // update with dot notation
programming['difficulty'] = 12; // update with bracket notation

// update method
programming.myMethod = function (name = '') {
    console.log('Hello World ' + name);
}

// execute Method? 
programming.myMethod();
programming.myMethod('');
programming.myMethod('Martina');

// delete method 
delete programming.myMethod;
console.log(programming);
//programming.myMethod('Martina'); not possible

//freeze = IMMUTABLE 
Object.freeze(programming);
programming.newKey = 'newValue'; // not possible to add 
console.log(programming);
programming.difficulty = 0; // not possible to change
console.log(programming);
delete programming.difficulty; //not possible to delete 
console.log(programming);