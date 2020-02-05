console.log(`-----------------EX1---------------`);
const isFourLetters = stringNames => {
    let totalNume = [];
    let letterCount = 4;
    for (let i = 0; i < stringNames.length; i++) {
        console.log(i);
        if (stringNames[i].length === letterCount) {
            totalNume.push(stringNames[i]);

        }

    }
    return "The word with the four letter is: " + totalNume;

};
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));

console.log(`-----------------EX2---------------`);
let months = [
    'January',
    'February',
    'March',
    'April', 'Mai',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December'
];

const monthName = missingMonth => months[missingMonth - 1];
console.log(monthName(3));
console.log(monthName(4));
console.log(monthName(1));
console.log(monthName(9));

console.log(`-----------------EX3---------------`);
const amplify = number1 => {
    let countingNumber = [];
    for (let g = 1; g <= number1; g++) {
        //console.log(g);
        if (g % 4 === 0) {
            countingNumber.push(g * 10);
        } else {
            countingNumber.push(g);
        }
    }
    return countingNumber;

};
console.log(amplify(4));
console.log(amplify(25));
console.log(`-----------------EX4---------------`);

const unique = setNumber => {
    let perfectNumber;
    for (let q = 1; q <= setNumber.length; q++) {
        console.log(q);
        if (setNumber.indexOf(setNumber[q], q + 1) === -1) {
            return setNumber[q];
        }
    }
};
console.log(unique([3, 3, 3, 7, 3, 3]));

console.log(`-----------------EX5---------------`);
const howMuchIsOneWord = word => {
    let sum = 0;
    let currentChar, curentNumber;
    const ALPHABET = ['alphabet', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //console.log(ALPHABET.length); 27
    for (let k = 0; k < word.length; k++) {
        currentChar = word.charAt(k).toLowerCase();
        curentNumber = ALPHABET.indexOf(currentChar);
        sum += curentNumber;
        // console.log(sum);
    }
    return sum;
};


const wordRank = sentence => {
    let word = '';
    let newArray = new Array(); // cream un Array gol posibil si [] fara nimik este egal;
    const myArray = sentence.split(' ');
    for (let p = 0; p < myArray.length; p++) {
        newArray.push(howMuchIsOneWord(myArray[p]));
       // console.log(newArray);
    }
    let theBiggestNumber = Math.max(...newArray);
    let position = newArray.indexOf(theBiggestNumber);
    word = myArray[position];
    return word;
    
}


console.log(wordRank("The quick brown fox.")) //"brown"
console.log(`_________________________________________________`);
console.log(wordRank("Nancy is very pretty .")) // "pretty"
console.log(`______________________________________________________`);
console.log(wordRank("Check back tomorrow , man!")) // "tomorrow"
console.log(`_____________________________________________________`);
console.log(wordRank("Today is Wednesday ."))