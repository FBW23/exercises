console.log('**1. Where Have My Four Letter Words Gone?**');
console.log();
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

const isFourLetters = arr => {
    let fourLetterWords = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            fourLetterWords.push(arr[i]);
        }
    }
    return fourLetterWords;
};

// Examples:

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
// ➞ ["John", "Jack"]
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
// ➞ ["Corn"]
console.log(isFourLetters(["Dog", "Cat", "Deer"]));
// ➞ ["Deer"]

console.log('**2. Months.**');
console.log();
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function monthName(number) {
    let monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthString = "";
    switch (number) {
        case 1:
            monthString = monthsOfTheYear[0];
            return monthString;
            break;
        case 2:
            monthString = monthsOfTheYear[1];
            return monthString;
            break;
        case 3:
            monthString = monthsOfTheYear[2];
            return monthString;
            break;
        case 4:
            monthString = monthsOfTheYear[3];
            return monthString;
            break;
        case 5:
            monthString = monthsOfTheYear[4];
            return monthString;
            break;
        case 6:
            monthString = monthsOfTheYear[5];
            return monthString;
            break;
        case 7:
            monthString = monthsOfTheYear[6];
            return monthString;
            break;
        case 8:
            monthString = monthsOfTheYear[7];
            return monthString;
            break;
        case 9:
            monthString = monthsOfTheYear[8];
            return monthString;
            break;
        case 10:
            monthString = monthsOfTheYear[9];
            return monthString;
            break;
        case 11:
            monthString = monthsOfTheYear[10];
            return monthString;
            break;
        case 12:
            monthString = monthsOfTheYear[11];
            return monthString;
            break;
        default:
            console.log('Invalid Operator');
    }
};

// Examples:
console.log(monthName(3));
// ➞ "March"
console.log(monthName(12));
// ➞ "December"
console.log(monthName(6));
// ➞ "June"

console.log('**3. Amplify the Multiples of 4.**');
console.log();
// Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

const amplify = num => {
    let arrayOfIntegers = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            arrayOfIntegers.push(i * 10);
        } else {
            arrayOfIntegers.push(i);
        }
    }
    return arrayOfIntegers;
};

// * For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// * If the number cannot be divided evenly by 4, simply return the number.
// * The given integer will always be equal to or greater than 1.
// * Include the given number (the number in the parameters).

// Examples:
console.log(amplify(4));
// ➞ [1, 2, 3, 40]
console.log(amplify(3));
// ➞ [1, 2, 3]
console.log(amplify(25));
// ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

console.log('**4. One is not like the others...**');
console.log();
// Create a function that takes an array of numbers and return the number that's unique.

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) { // i + 1 works to jump to the next item
            return arr[i];
        }
    }
}

// Examples:
console.log(unique([3, 3, 3, 7, 3, 3]));
// ➞ 7
console.log(unique([0, 0, 0.77, 0, 0]));
// ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));
// ➞ 0

console.log('**5. Pig Latin Translation.**');
console.log(); 
// // Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin". 

// // * Move the first letter of each word to the end of the word.
// // * Add "ay" to the end of the word.
// // * Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.

const pigLatin = string => {
    let myNewString = "";
    let stringToArrays = string.toLowerCase().split(" ");
    for (let i = 0; i < stringToArrays.length; i++) {
        console.log(i, 'string word -> ', stringToArrays[i]);
        let firstChar = stringToArrays[i].substring(0, 1);
        myNewString = stringToArrays[i] + firstChar;
        console.log('first character ', firstChar);
    }
};

// KEINE AHNUUUNG

// // **Extra Practice**
// // * Preserve proper capitalization as in the examples below.

// // Examples:
// console.log(pigLatin("Cats are great pets."));
// // ➞ "Atscay areway reatgay etspay."
// console.log(pigLatin("Tom got a small piece of pie."));
// // ➞ "Omtay otgay away allsmay iecepay ofway iepay."
// console.log(pigLatin("He told us a very exciting tale."));
// // ➞ "Ehay oldtay usway away eryvay excitingway aletay."