// 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. 
//Return all words in the array that are exactly four letters.
console.log("===task 1===")
const isFourLetters = (arrStr) => {
    let empty = [];
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length === 4) {
            empty.push(arrStr[i])
        }
    }
    return empty
};

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

//2. Months. Create a function that takes a number (from 1 to 12) and return its 
//corresponding month name as a string.
console.log("===task 2===");


function monthName(num) {
    switch (num) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("not a month");
            break;
    }

};

monthName(3);
monthName(5);
monthName(15);

// 3. Amplify the Multiples of 4. 
//Create a function that takes an integer and return

//where For each number in the array that can be evenly divided by 4, that number is 
//amplified by 10 (i.e. return 10 times the number).

// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

const amplify = (integer) => {
    let newArray = [];
    for (let i = 0; i <= integer; i++) {
        if (integer % 4) {
            return integer;
        } else {
                return true;
            } 
        } //console.log(newArray);
    }

console.log(amplify(19));