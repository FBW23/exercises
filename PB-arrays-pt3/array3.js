console.log('======= Task 1 ======')

// 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
// Examples:

// console.log(isFourLetters([])); //➞ ["John", "Jack"]
// isFourLetters([]) //➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) //➞ ["Deer"]

const isFourLetters = ["John", "James", "Jack", "Jeanne", "Tomato", "Corn", "Lettuce", "Dog", "Cat", "Deer"];
console.log(isFourLetters.filter(function (str) {
    return str.length === 4; // keep strings with length =4function 
}));


// 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
console.log('======== Task 2 =========')
function getMonth(number){
    let months=['undefined','Jan','Fev']//not  sure  what am I  doing  wrong  here......
    console.log(months[1]);
    return months+number;
    
}
console.log(getMonth(1));


// 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
console.log('======Task 4 ======= ')

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i];
        }

    }
}
// Examples:

console.log(unique([3, 3, 3, 7, 3, 3])); //➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log('======= Bonus Question ======')
// 1. Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples

function isSymmetrical(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
 

console.log(isSymmetrical('3233222'));