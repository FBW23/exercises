// **1. Add Up.**
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed 
// to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
console.log('1. Add Up');

let sum = 0;
const myFunction = (number) => {
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
};
const output = myFunction(13);
console.log(output);
//or
console.log(myFunction(600));


// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples: 
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0
console.log('2. Cubed');


const sumOfCubes = (numb1, numb2, numb3) => {
    if (numb1, numb2, numb3) {
        return Math.pow(numb1, 3) + Math.pow(numb2, 3) + Math.pow(numb3, 3);
    } else if (numb1, numb2) {
        return Math.pow(numb1, 3) + Math.pow(numb2, 3);
    } else if (numb1) {
        return Math.pow(numb1, 3);
    } else {
        return 0;
    }
};

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts 
// with the initial string.

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false
console.log('3. String Check');

const myString = (string, word) => {
    if (word.startsWith(string)) {
        return true;
    } else {
        return false;
    }
};

console.log(myString("bu", "button"));
console.log(myString("tri", "triplet"));
console.log(myString("beau", "pastry"));
console.log(myString("cho", "chateau"));

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
// otherwise return false.

// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false

console.log('4. Less Than or Equal to Zero?');

// longer way :
// const lessThanOrEqualToZero = (numb4) => {
//     if (numb4 <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

const lessThanOrEqualToZero = (numb4) => numb4 <= 0;

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(100));


// **5. Count Occurrences.** 
// Create a function that accepts two arguments: a string and a letter. The function should count the number 
// of occurrences of that letter in the string. 

// i.e. 
// countOccurrences("this is a string", "i") ➞ 3  

console.log('5. Count Occurrences.');

const countOccurrences = (string, letter) => {
    let regEx = new RegExp(letter, 'gi');
    let result = string.match(regEx).length;
    return result;
};

console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("Where is waldo", "w"));


// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. 
// **NB:** All test inputs will be positive integers.

// Examples:
// * calculateBaseToExponent(5, 5) ➞ 3125
// * calculateBaseToExponent(10, 10) ➞ 10000000000
// * calculateBaseToExponent(3, 3) ➞ 27

console.log('6. X To The Power of X.');

const calculateBaseToExponent = (num5) => Math.pow(num5, num5);

console.log(calculateBaseToExponent(5));
console.log(calculateBaseToExponent(10));
console.log(calculateBaseToExponent(3));


// **7. Dog Years.**
// Create a function which calculates how old a dog is in doggie years. 
// The function should accept one argument that is the puppy's age in human years. 
// Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years. 

// i.e. 
//  dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

console.log('7. Dog Years.');

const dogAge = (dog) => 'Your doggo is ' + dog * 7 + ' years old in human years!';


console.log(dogAge(4));
console.log(dogAge(10));
console.log(dogAge(2));

// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. 
// The function should accept two arguments: age and amount per day. 
// The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
// **Bonus** Accept floating point values for amount per day and round the result. 

// i.e. 

// calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."

// calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you til the age of 80."

console.log('8. A Lifetime Supply...');

const calcSupply = (age, amount) => {
    let sumAge = 80 - age;
    let sumAmount = (amount * 365) * sumAge;
    return 'You will need ' + sumAmount + ' bars of chocolate (' + amount + ' a day) to last you til the age of 80.'
}

console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));

// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

console.log('9. Where\'s Waldo?');

const isWaldoHere = (strng) => {
    let find = 'waldo';
    return strng.toLowerCase().includes(find);
};


console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));


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

console.log('10. Pie.');

const equalSlices = (slices, people, quantity) => people * quantity <= slices;


console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.



// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false
// test
console.log('11. XO.');

const XO = (myString) => {
    if (myString) {
        let matchXs = myString.match(/x/gi); //g is for global search, i is for ignore case sensitivity
        let matchOs = myString.match(/o/gi);
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
};
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. 
// **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: 
// itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false



console.log('12. isPrime?');

const isPrime = (number5) => {
    if (number5 <= 1) {
        return false;
    }
    for (let n = 2; n < number5; n++) {
        if (number5 % n === 0) {
            return false;
        }
    }return true;
};


console.log(isPrime(1));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(101));
console.log(isPrime(1001));
console.log(isPrime(10001));



// **13. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either 
// true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.