const findGreatest = (array, number) => {
    if (array[0] > number) {
        console.log(array[0]);
    }
    if (array[1] > number) {
        console.log(array[1]);
    }
    if (array[2] > number) {
        console.log(array[2]);
    }
};

findGreatest([3, 4, 5], 4);

findGreatest([10, 20, 30], 12);

findGreatest([0, 10, 3], 4);

// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

// i.e. longestWord("this is a web development course") ➞  "development"

const longestWord = (str) => {

    let strSplit = str.split(' '); // split turns a string into an array
    // console.log(strSplit);
    let longestItem = 11;
    if (strSplit[0].length >= longestItem) {
        console.log(strSplit[0]);
    }
    if (strSplit[1].length >= longestItem) {
        console.log(strSplit[1]);
    }
    if (strSplit[2].length >= longestItem) {
        console.log(strSplit[2]);
    }
    if (strSplit[3].length >= longestItem) {
        console.log(strSplit[3]);
    }
    if (strSplit[4].length >= longestItem) {
        console.log(strSplit[4]);
    }
    if (strSplit[5].length >= longestItem) {
        console.length(strSplit[5]);
    }
};

longestWord("this is a web development course");

// **3. Reverse.**
// Create a function to reverse a number. 

const reverse = (num) => {
    let numStr = num.toString().split("").reverse().join(""); // turns the numbers into a string, reverses it and joins all the letters back together.
    console.log(numStr);
};

reverse(34532);
// ➞ 23543

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 

// const findVowels = str => {
//     let sum = 0;
//     let strSpl = str.split("");
//     // console.log(strSpl);
//     for (let i = 0; i < strSpl.length; i++) {
//         if (strSpl[i] === 'a' || strSpl[i] === 'e' || strSpl[i] === 'o' || strSpl[i] === 'i' || strSpl[i] === 'u') {
//             // console.log('sum ->', sum);
//             sum += 1;
//         }
//     }
//     return sum;
// };

const findVowels = str => {
    let sum = 0;
    let strVowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (strVowels.indexOf(str[i]) !== -1) {
            sum++;
        }
    }
    return sum;
};

console.log(findVowels("this is a string"));
// ➞ 4

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// const missingNums = arr => {
//     // console.log(beasts.indexOf('giraffe'));
//     // expected output: -1
//     let completeSequence = [1,2,3,4,5,6,7,8,9,10];
//     let missingObject = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== completeSequence[i]) {
//             missingObject = completeSequence[i];
//             console.log('missing', missingObject);
//             return
//         }
//     }
// };

// KEINE AHNUNG!!!

// // Examples: 
// console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// // ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]);
// // ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]);
// // ➞ 7 

// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 

const sumOfCubes = (arr) => {
    let cubesSumVar = 0;
    for (let i = 0; i < arr.length; i++) {
        let cubeArg = Math.pow(arr[i], 3);
        cubesSumVar += cubeArg;
    }
    return cubesSumVar;
};

// Examples: 
console.log(sumOfCubes([1, 5, 9]));
// ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([2]));
// ➞ 8
console.log(sumOfCubes([]));
// ➞ 0

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

const dictionary = (item, arr) => {
    let matchingWord = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(item)) {
            console.log(arr[i]);
        } 
    }
    return matchingWord
};

// Examples:
dictionary("bu", ["button", "breakfast", "border"]);
// ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]);
// ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]);
// ➞ []