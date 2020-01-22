// Functions Exercises

// Print your answers to the console.

// **1. Add Up.**
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
const myFunction = (number1) => {
    let myFinal = 0;
    for (let myResult = 1; myResult <= number1; myResult++) {
        myFinal += myResult;

    }
    return myFinal;
}
console.log(myFunction(4));
console.log(myFunction(13));
console.log(myFunction(600));

console.log(".....................1..............");
// const myResult = myfunction(13);
//     console.log(myResult);



// Examples:
// * addUp(4) ➞ 10
// * addUp(13) ➞ 91
// * addUp(600) ➞ 180300

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

const myValue = (a, b, c) => {
    if (a && b && c) {
        return Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    } else if (a && b) {
        return Math.pow(a, 3) + Math.pow(b, 3);
    } else if (a) {
        return Math.pow(a, 3);
    } else {
        return 0;
    }

}


const myCube = myValue(1, 5, 9);
console.log(myCube);
console.log(myValue(2));
console.log(myValue());

console.log("..............2.................");

const powerCub = (a, b, c) => {
    let sum = 0;
    if (a) {
        sum += Math.pow(a, 3);
    }
    if (b) {
        sum += Math.pow(b, 3);
    }
    if (c) {
        sum += Math.pow(c, 3);
    }
    return sum;
}
console.log(powerCub(1, 5, 9));
console.log(powerCub(4));
console.log(powerCub());

console.log("......................2....................");

// Examples: 
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// let bu = 'button';
//  if (bu === 'button') {
//      console.log(true);
//  } else if (tri === 'triplet') {
//      console.log(true);
//  } else if (beau === 'pastry') {
//      console.log(false);
//  }


// startsWith = method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
const dictionary = (string1, string2) => {
    if (string2.startsWith(string1) === true) {
        return true

    } else {
        return false
    }
}
console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

console.log("...........3a.............");

const cubed3 = (y, z) => y.startsWith(z) ? true : false;
console.log(cubed3("ij", "ijojijo"));


console.log("..................3......................");
// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const lessThanOrEqualToZero = (number) => {
    if (number <= 0) {
        return true

    } else {
        return false
    }
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));

console.log(".........................Shorter way 4.....................");

const lessThan = (f) => f <= 0;
console.log('jgklfjlk')
console.log(3 <= 0);
let result4 = lessThan(3);
console.log(result4);

console.log(".........................4.....................");


// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false

// **5. Count Occurrences.** 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

// i.e. 
// countOccurrences("this is a string", "i") ➞ 3 

const countOccurrences = (string, letter) => {
    let sum5 = 0;
    for (let count = 0; count < string.length; count++) {
        if (string.charAt(count) === letter) {
            sum5 += 1;
        }
    }
    return sum5
}
console.log(countOccurrences("this is a string", "i"));

console.log("........................5......................");

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calculateBaseToExponent(5, 5) ➞ 3125
// * calculateBaseToExponent(10, 10) ➞ 10000000000
// * calculateBaseToExponent(3, 3) ➞ 27

const calculateBase = (base, exponent) => {
    return Math.pow(base, exponent);
}

console.log(calculateBase(5, 5));
console.log(calculateBase(10, 10));
console.log(calculateBase(3, 3));


console.log("...........................6..........................")
// **7. Dog Years.**
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years. 

// i.e. 
//  dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

const doggie = (years) => {
    return (years * 7)
}
console.log(doggie(4));

console.log("...........................7..........................");

// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result. 

// i.e. 

// calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."

// calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you til the age of 80."

let maxAge = 80;
const calcSupply = (age, amount) => (80 - age) * 365 * (amount);
console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));


console.log("......................8............................");
// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

const Waldo = (o) => o.toLowerCase().includes("waldo");


console.log(Waldo("is there wal here ?"));
console.log(Waldo("I found you Waldo!"));


console.log("......................9..............................");

// **10. Pie.** 
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices 

// * equalSlices(8, 3, 2) ➞ true
// * equalSlices(8, 3, 3) ➞ false
// * equalSlices(24, 12, 2) ➞ true

const equalSlices = (g, h, j) => g >= h * j;

console.log(equalSlices(8, 3, 2));

console.log("............10......................");
// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// const XO = (string) => string.toLowerCase().includes('ooxx')? true : false;


//G IS FOR THE SEARCH GLOBAL
//i is for ignore case sensitivity
function XO(myString) {
    if (myString) {
        let matchXs = myString.match(/x/gi); // gi searching for the x
        let matchOs = myString.match(/o/gi); // searching for the o
        let allXs = 0;
        let allOs = 0;
        if (matchXs) {
            allXs = matchXs.length;
        }
        if (matchOs) {
            allOs = matchOs.length;
        }
        if (allXs === allOs) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}


// const XO = (o,x) => o.substring(x)? true : false;
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false

console.log("........................11.............................");

// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
const isPrime = prime => {
    for (let nex = 2; nex < prime; nex++)
        if (prime % nex === 0) return false;
    return prime > 1;
}
// nex is = 2 but smaller then prime with the increament ++
// prime devide by nex will be 0

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

console.log("........................12..................");

// **13. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

// **Good Luck & Enjoy :)**