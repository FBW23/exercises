// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument. 

// i.e. 


// findGreatest([3, 4, 5], 4) ➞ 5

console.log("===========================");
console.log("1")


const findGreatest = (myArray, myNumber) => {

    if (myArray[0] > myNumber) {
        console.log(myArray[0]);

    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1]);

    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);

    }
};

findGreatest([2, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);
console.log("===========================");
// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3],4) ➞ 10

// **2. For the longest word.**
// Create a function to find the longest word in a given string. 
// i.e. longestWord("this is a web development course") ➞  "development"


console.log("===========================");
console.log("2")
const longestWord = (Mystring) => {
    let myArray = Mystring.split(' ');
    console.log(myArray);
    let myArrayLength = myArray.length;
    //console.log(myArrayLength);
    // let longestWord = [];
    let longestWord = myArray[0];
    for (let i = 0; i < myArrayLength; i++) {

        if (myArray[i].length <= longestWord.length) {

        } else {
            longestWord = myArray[i];

        }

    }
    return longestWord;
};
console.log(longestWord("this is a web development course"));

console.log("===========================");


// **3. Reverse.**
// Create a function to reverse a number. 

// i.e. reverse(34532) ➞ 23543
console.log("===========================");
console.log("3")
const reverse = (number) => {
    let reversed = number.toString().split('').reverse().join('');
    return Number(reversed);
};
console.log(reverse(34532));
console.log("===========================");
// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 



// i.e. findVowels("this is a string") ➞ 4
console.log("===========================");
console.log("4")

const findVowels2 = (myString) => {


    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;
    for (let i = 0; i < myString.length; i++) {
        let currentVowel = '';
        for (let j = 0; j < vowels.length; j++) {
            currentVowel = vowels[j];
            if (myString.charAt(i) === currentVowel) {
                vowelCount++;
            }

        }

    }

    return vowelCount;


};
console.log(findVowels2("this is a string"));
console.log(findVowels2("abrakadabra"));



const findVowels = (myString) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;
    for (let i = 0; i < myString.length; i++) {

        if (vowels[0] === myString.charAt(i) || vowels[1] === myString.charAt(i) || vowels[2] === myString.charAt(i) || vowels[3] === myString.charAt(i) || vowels[4] === myString.charAt(i)) {
            vowelCount++;
        }
    }

    return vowelCount;
};
console.log(findVowels("this is a string"));
console.log(findVowels("abrakadabra"));




console.log("===========================");
// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 
console.log("===========================");
console.log("5")

 //if we know the the maximum amount of numbers our array can hold, we can make the function 
 //find and count the missing numbers, even when more than 1 item is absent..
 





const missingNums = (myArray) => {
    //let totalShouldBe = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
    let totalShouldBe = 0;
    let sum = 0;

    for (let i = 0; i <= 10; i++) {
        totalShouldBe += i;
    }
    

    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }


    return totalShouldBe - sum;

};
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log("===========================");
// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 

// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0
console.log("===========================");
console.log("6")
const sumOfCubes = (myArray) => {
    let cube = 0;
    for (let i = 0; i < myArray.length; i++) {
        cube += Math.pow(myArray[i], 3);
    }
    return cube;

};
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));




console.log("===========================");
// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
console.log("===========================");
console.log("7")
const dictionary = (myString, myArray) => {

    let newArray = [];

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].startsWith(myString)) {
            newArray.push(myArray[i]);
        }
    }

    return newArray;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));


console.log("===========================");
// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:** 
// * If there are no even numbers, return an empty array. 
// * Do not include 0. 
console.log("===========================");
console.log("8")
const evenNums = (myArray) => {
    let even = [];
    //console.log(myArray)
    for (let i = 1; i <= myArray; i++) {
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    return even;
};

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

console.log("===========================");




// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.





// i.e. alphaOrder("webdev") ➞ "bdeevw" 
console.log("===========================");
console.log("Bonus")
const alphaOrder=(myString)=>{

    return myString.toLowerCase().split('').sort().join('');

};
console.log(alphaOrder("webdev"));
console.log("===========================");