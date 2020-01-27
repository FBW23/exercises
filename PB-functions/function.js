// 1. Add Up. Create a function that takes a number as an argument. 
//Add up all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300


let sum = 0;
const addUp = function (num) {
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const addUp2 = addUp(4);
console.log(addUp2);

//==================================================================================

// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0


let sum2 = 0;
const sumOfCubes = function (a, b, c) {
    if (a && b && c) {
        sum2 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
        return sum2;
    } else if (a) {
        sum2 = Math.pow(a, 3);
        return sum2;

    }

};

const cubes = sumOfCubes(1, 5, 9);
sumOfCubes(2);
sumOfCubes(0);

console.log(cubes);

//================================================================================

// 3. String Check. Create a function that takes a string and a word, 
//and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true
// dictionary("beau", "pastry") ➞ false


const wordFunction = function (c, d) {

    if (d.includes(c)) {
        return true;
    } else {
        return false;
    }
}

const wordFunction2 = wordFunction("ha", "richa"); //print false
console.log(wordFunction2);

//================================================================================

// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument 
//and returns true if it's less than or equal to zero, otherwise return false.
// Examples:
// lessThanOrEqualToZero(3) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-4) ➞ true
// lessThanOrEqualToZero(10) ➞ false

const equalZero = (n) => {
    if (n <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(equalZero(0));

//=================================================================================
// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. 
//The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences("this is a string", "i") ➞ 3

// const countOccurrences = (string, letter) => {
// letterCount = string.search(letter);
// console.log(letterCount); 
// }
// countOccurrences("tres tigres tristes", "t");

//==============================================================================================

// 6. X To The Power of X. 
//Create a function that takes a base number and an exponent number and returns the calculation. 
//NB: All test inputs will be positive integers.

// Examples:
// calculateBaseToExponent(5, 5) ➞ 3125
// calculateBaseToExponent(10, 10) ➞ 10000000000
// calculateBaseToExponent(3, 3) ➞ 27

const calculateBaseToExponent = (base, exp) => {
    return Math.pow(base, exp);
}

console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));

//===============================================================================================

// 7. Dog Years. Create a function which calculates how old a dog is in doggie years. 
//The function should accept one argument that is the puppy's age in human years. 
//Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

const dogAge = dog => {
    return dog * 7;
}

console.log("Your dog is " + (dogAge(5)) + " years old in human years");

//===============================================================================================
// 8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime 
//supply of your favorite snack. The function should accept two arguments: age and amount per day. 
//The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
//Bonus Accept floating point values for amount per day and round the result.

// i.e.
// calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."
// calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps (3 a day) to last you til the age of 80."

const maxAge = 29200;
const calcSupply = (age, amount) => {

    age1 = age * 365;
    return (maxAge - age1) * amount;
}

const calculo = calcSupply(25, 2);
console.log("You will need " + calculo + " bars of chocolate ( xxx a day) to last you until the age of 80");

//==============================================================================================

// 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true


const waldo = (x) => {

    if (x.includes("waldo")) {
        return true;
    } else {
        return false; 
    }

} 

const isWaldoThere = waldo("hello waldo");
console.log(isWaldoThere);
//==============================================================================================

// 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these 
//three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true

const pie = (slices, people, personSlices) => {
if (slices / people >= personSlices) {
    return true;
}else {
    return false;
}
}

console.log(pie(9, 3, 3))

//=========================================================================================================
// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns 
// either true or false.

// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true (case insensitive)
// XO("zpzpzpp") ➞ true (returns true if no x and o)
// XO("zzoo") ➞ false


//========================================================================================================

// 12. isPrime? Create a function that returns true if a number is prime and false if it's not. 
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: 
// itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

const isPrime = num2 => {
    if (num2 % num2 === 0 && num2 % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isPrime(7));

//============================================================================================================


// 13. Validate Email. Create a function that takes a string, checks if it's a valid email address, 
//and then accordingly returns either true or false.

const validEmail = email => {
if(email.includes(email.match([a - z+ "@")) && email.includes(".")) {
return true; 
} else {
    return false;
}
} 
console.log(validEmail("a@example.com"))

// The string must contain an "@" character.
// The string must contain a "." character.
// The "@" must have at least one character in front of it.
// e.g. "john@example.com" is valid while "@example.com" is invalid.
// The "." and the "@" must be in the appropriate places.
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.