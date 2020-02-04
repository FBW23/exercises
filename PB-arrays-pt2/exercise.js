// *1. The Greater Numbers.**
//Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument. 

//i.e. 

//findGreatest([3, 4, 5], 4) ➞ 5

//findGreatest([10, 20, 30], 12) ➞ 20, 30

//findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log((myArray[1]));
    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);
    }
};
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);


// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

// i.e. longestWord("this is a web development course") ➞  "development"

// function longestWord(str){
//     const myArray = str.split(" ");
//     console.log(myArray);
//     const otherArray = myArray.sort((a,b) => {
//         return a.length < b.length;
//     } );
// return otherArray[0].length;
// }
// console.log(longestWord("this is a web development course"));

function longestWord(text) {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }
    return result;
}
console.log(longestWord("this is a web development course"));

// **3. Reverse.**
// Create a function to reverse a number. 

// i.e. reverse(34532) ➞ 2354

// function number(n)
// {
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(number(34532));

const revNumber = rN => rN.toString().split("").reverse().join("");

console.log(revNumber(34532));


// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and 
// counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

const myVowels = mV => mV.replace(/[^aeiou]/gi, '').length;
console.log(myVowels("this is a string"));

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 

const missNum = (Num) => {

    let missing = -1;
    for (let i = 0; i <= 10; i++) {
        if (Num.indexOf(i) === -1) {
            missing = i;
        }
    } return missing;


}
console.log(missNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));


// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 

// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

function sumOfCubes(ofCube) {
    let sum = 0;
    for (let i = 0; i < ofCube.length; i++) {

        sum += Math.pow(ofCube[i], 3); // sum += (ofCube[i]**3;)

    } return sum;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));


// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

const dictionary = (myString, myDic) => {
    let newArray = [];
    for (let i = 0; i < myDic.length; i++) 
    {
        if (myDic[i].startsWith(myString)) 
        {
            newArray.push(myDic[i]);
        }
    }
    return newArray;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:** 
// * If there are no even numbers, return an empty array. 
// * Do not include 0. 


