// *1. The Greater Numbers.**
//Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument. 

//i.e. 

//findGreatest([3, 4, 5], 4) ➞ 5

//findGreatest([10, 20, 30], 12) ➞ 20, 30

//findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest=(myArray, myNumber) => {
    if(myArray[0] > myNumber) {
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
    for (let i=0; i < Num.length; i++) {
        if (Num.indexOf(i)=== -1) {
            missing = i;
        }
    } return missing;


}
console.log(missNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));