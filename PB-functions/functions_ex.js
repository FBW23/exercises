console.log(`------------Task1--------------`);
const addUp = (number) => {
    let sumUP = 0;
    for (let i = 1; i <= number; i++) {
        sumUP += i;
    } return sumUP;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log('\n');
console.log(`------------Task2--------------`);
// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0
const powerCub = (a, b, c) => {
    let sum = 0;
    if (a) {
        sum += Math.pow(a, 3);
    } if (b) {
        sum += Math.pow(b, 3);
    } if (c) {
        sum += Math.pow(c, 3);
    } return sum;
}
//     if (a && b && c) {
//         return (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
//     } else if (a && b) {
//         return (Math.pow(a, 3) + Math.pow(b, 3));
//     } else if (a) { return Math.pow(a, 3); }
//     else { return 0; }
// }
console.log(powerCub(1, 5, 9));
console.log(powerCub(2));
console.log(powerCub());
console.log('\n');
console.log(`------------Task3--------------`);

const dictionary = (string1, string2) => {
    if (string2.startsWith(string1) === true) {
        return true;
    } else {
        return false;
    }

}
console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

console.log('\n');
console.log(`------------Task4--------------`);
const lessThanOrEqualToZero = (nummer) => {
    if (nummer <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));


console.log('\n');
console.log(`------------Task5--------------`);

function countOccurrences(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(countOccurrences("this is a string", "i"));
console.log('\n');
console.log(`------------Task6--------------`);
const calculateBaseToExponent = (base, exponent) => (Math.pow(base, exponent));
//    return Math.pow(base,exponent);
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));
console.log('\n');
console.log(`------------Task7--------------`);
const dogAge = (age) => (`Your doggo is ${age * 7} years old in dog years`)
console.log(dogAge(4));
console.log(dogAge(7));
console.log(dogAge(10));
console.log('\n');
console.log(`------------Task8--------------`);
let maxAge = 80;
const calcSupply = (age, daysAmount) => ((maxAge - age) * 365) * daysAmount;
// let maxAge = 80;
// let year = 365;
// return (daysAmount)*((maxAge-age)*year)
console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));
console.log('\n');
console.log(`------------Task9--------------`);
const isWaldoHere = (waldo) => waldo.toLowerCase().includes('waldo');
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("I found you Waldo!"));

console.log('\n');
console.log(`------------Task10--------------`);
const equalSlices = (slices, recipients, slicePP) => slices >= recipients * slicePP;
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

console.log('\n');
console.log(`------------Task11--------------`);
const XO = (string5) => {
    string5 = string5.toLowerCase();
    let arrayOfCharacters = string5.split("");

    let countX = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === "x");
    }, 0);
    let countO = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === "o");
    }, 0);

    return countX === countO;

}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("zpzpzpp"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
console.log('\n');
console.log(`------------explicatie--------------`);
let myTestedString = 'ana are naNa nu are Ana';
let checkForJ = myTestedString.match(/ana/gi);// looking for character in a string
let anotherString = /ana/gi;//
let result = anotherString.test(myTestedString); // this will test if exist or no - its only Boolean
// g - globaly // i - ignore case sensitive- with this we don't need to care about capitals letters 
let countForJ = checkForJ.length; // count how many "ana" we have !!! 
console.log(checkForJ);
console.log(result);
console.log(countForJ);

console.log('\n');
console.log(`------------Task12--------------`);

const isPrime = x => {

    for (let koko = 2; koko < x; koko++)
       { if (x % koko === 0) { return false; }}


    return x > 1;
}
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(22));
console.log(isPrime(1001));
console.log(isPrime(10001));
console.log('\n');
console.log(`------------Task13--------------`);
// Create a function that takes a string, checks if it's a valid
//  email address, and then accordingly returns either true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
const looksLikeMail = (mailtoCheck) => {
    let lastAtPos = mailtoCheck.lastIndexOf('@');
    let lastDotPos = mailtoCheck.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && mailtoCheck.indexOf('@@') === -1 && lastDotPos > 2 && (mailtoCheck.length - lastDotPos) > 2);
}

console.log(looksLikeMail('john.smith@email.com'));
console.log(looksLikeMail('john.smith@com'));
console.log(looksLikeMail('disposable.style.email.with+symbol@example.com'));
console.log(looksLikeMail('üñîçøðéüñîçøðé.com'));