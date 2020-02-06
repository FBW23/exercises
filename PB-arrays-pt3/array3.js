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
// function monthly(number) {
//     let months = {  //object containning   the months  and using a number  as  an index....
//         1 : 'January',
//         2 : 'February',
//         3 : 'March',
//         4 : 'April',
//         5 : 'May',
//         6 : 'June',
//         7:  ' July',
//         8 : ' August',
//         9 : ' September',
//         10 : ' October',
//         11 : ' November',
//         12 : ' December',
//     }; return months[number] || 'not found'; // returning  months[inside the array the parameter of the function] 

// }
// console.log(monthly(3));
const month = number =>
    ({
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        } [number] ||
        "What? are you Crazy? That is not a month!");
console.log(month(2));
console.log(month(3));
console.log(month(6));
console.log(month(8));
console.log(month(0));


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

console.log('==========  Task 5 ======')

// 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

// The returned string should only contain alphabetic characters (a-z).
// Preserve case in the returned string (see 4th example above).
// Examples:

const abc = 'abcdefghijklmnopqrstuvwxyz'; //created a const with a string w/all letters which later will be counted as numbers/values

const wordRank = (x) => {
    let words = x.split(/\s+/); //splitting words to count chars plus regEx Allows . to match newline characters.
    let best, maxscore = 0;
    for (let word of words) { // The for...of statement creates a loop iterating over iterable objects// {
        let score = 0;
        for (let letter of word) {
            score += 1 + abc.indexOf(letter); //adding the math  for the characters
        }
        if (score > maxscore) {
            best = word;
            maxscore = score;
        }
    }
    return best;
}


console.log(wordRank("The quick brown fox.")) // "brown"
console.log(wordRank("Nancy is very pretty.")) //"pretty"
console.log(wordRank("Check back tomorrow, man!")) // "tomorrow"
console.log(wordRank("Today is Wednesday.")) //"Wednesday"


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



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(name) {
    if (GUEST_LIST.hasOwnProperty(name)) {
        return 'Hi! I\'m ' + name + ' and I\'m from ' + GUEST_LIST[name];
    } else {
        return "Hi! I'm a guest.";

    }
}
console.log(greeting('Sam'));
console.log(greeting('Coco'));
console.log(greeting('Wendy'));


const planets={
    Mercury:	3.7,
    Venus :	8.87,
    Earth :	9.81,
    Mars  :	3.711,
    Jupiter:	24.79,
    Saturn:	10.44,
    Uranus:	8.69,
    Neptune:	11.15 };
    

//convert planetary weight
function spaceWeights(planetA, weight, planetB) {
	let result=planetB * weight/planetA;
        return +result.toFixed(2);
   
}

console.log(spaceWeights(planets.Earth,1,planets.Mars));