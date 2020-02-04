// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument 
//being an array of numbers, and the second argument being a number. 
//The function should return the elements of the array which are greater than the second argument.

console.log("=== TASK 1 ===")

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

findGreatest([3, 4, 5], 4); //5
findGreatest([10, 20, 30], 12); //20, 30
findGreatest([0, 10, 3], 4); // 10


console.log("=== TASK 2 ===")
// 2. For the longest word. Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course") ➞ "development"
const longestWord = (a) => {
    let longest;
    let arr = a.split(" ");
    console.log(arr);
    if (arr[0].length > arr[1].length) {
        return longest = arr[0];
    } else {
        longest = arr[1];
    }
    if (arr[2].length > longest.length) {
        longest = arr[2];
    }
    if (arr[3].length > longest.length) {
        longest = arr[3];
    }
    if (arr[4].length > longest.length) {
        longest = arr[4];
    }
    if (arr[5].length > longest.length) {
        longest = arr[5];
    }
    console.log(longest)
};

longestWord("this is a web development course");



console.log("=== TASK 3 ===")
// 3. Reverse. Create a function to reverse a number.
const reverse = (b) => {
    let toArray = b.toString().split("").reverse().join("");
    console.log(toArray);

};
reverse(34532);


console.log("=== TASK 4 ===")
//4.AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of 
//vowels (i.e. in English, "a, e, i, o, u") in the string.

const letters = (vowels) => {
    let counting = 0;
    let vogais = vowels.split("");
    if (vogais.indexOf("a")) {
        counting++;
    }
    return counting

    console.log(vogais);

};

console.log(letters("quantas vogais tem nessa frase?"));

// i.e. findVowels("this is a string") ➞ 4


console.log("=== TASK 5 ===")
// 5. Missing Number. Create a function that takes an array of all integers 
//between 1 and 10 (excluding one) and returns the missing integer.

const missingNums = (intArray) => {
let sortedNums = intArray.sort()
console.log(sortedNums);
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));


console.log("=== TASK 6 ===")
// // 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes. 
// function sumOfCubes (cubes) => {
//     let cubes = [];
//     let sum = 0;
//     i = cubes.length;
// }

// sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

console.log("=== TASK 7 ===")
// 7. Dictionary. Create a function that takes an initial string and an array of words, 
//and returns a filtered array of the words that start with the same letters as the initial string.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

//  function dictionary (str, words) => {
// if(words[i].startsWith(str)) {
//     return words.filter(dictionary)
// }
//  }
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", "trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []


 console.log("=== TASK 8 ===")
// 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.
const evenNums = (even) => {
     let arr = []; 
     for(let i = 2; i <= even; i++) {
         if(i % 2 === 0) {
            arr.push(i); 
         }
     }
     return arr;
 }


console.log(evenNums(20));
console.log(evenNums(4));
console.log(evenNums(2));
//Notes:
// If there are no even numbers, return an empty array.
// Do not include 0.


console.log("=== BONUS TASK ===")
// Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. 
//NB: assume numbers, symbols and punctuation are not included in the string.

const alphaOrder = (alfaStr) => {
let sorted = alfaStr.split("").sort().join("");
console.log(sorted)
} 

alphaOrder("sughsddsdfjknsiauhliwwnefl");