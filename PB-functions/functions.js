
const myFunction = function (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
};

const myFunction2 = myFunction(4);
console.log(myFunction2);
//=======================================================
const cubed = function (number1, number2, number3) {

    if (number1 && number2 && number3) {
        return Math.pow(number1, 3) + Math.pow(number2, 3) + Math.pow(number3, 3);
    }
    else if (number1 && number2) {
        return Math.pow(number1, 3) + Math.pow(number2, 3);

    } else if (number1) {
        return Math.pow(number1, 3);

    }
    else {
        return 0;
    }
}

const myCube = cubed(7, 8, 9);
console.log(myCube);

//============================================
// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

const String1 = function (string, string2) {
    if (string.includes(string2) === string2.includes(String1)) {
        return true;
    } else {
        return false;
    }
};
const Mystring = String1("bu", "button");
console.log(Mystring);

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false


// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const equality = (a) => a <= 0;
//     if(a<=0){
//         return true;
//     }
//     else{
//         return false
//     }
// }

const myEquality = equality(0);
console.log(myEquality);

//===============================================================================

// **5. Count Occurrences.** 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 
// const countOccurrences = function(string2, letter){

//     return ;
// }
// i.e. 
// countOccurrences("this is a string", "i") ➞ 3 
//================================================================================

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calculateBaseToExponent(5, 5) ➞ 3125
// * calculateBaseToExponent(10, 10) ➞ 10000000000
// * calculateBaseToExponent(3, 3) ➞ 27

const myExpo = function (b) {
    if (b > 0) {
        return Math.pow(b, b);
    }
    else {
        return 'not possible';
    }
}

const myExpo2 = myExpo(5);
console.log(myExpo2);
//=============================================================


// **7. Dog Years.**
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years. 

const doggieYears = function (human) {
    return human * 7;
}
const myDogg = doggieYears(6);
console.log("Your doggo is " + myDogg + " years");

// i.e. 
//  dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

//====================================================================================

// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result. 

// const Supply = (age, amount) => return (29200 - age)*amount;

const supply = function (age, amount) {
    return (29200 - age * 365) * amount;
};

let varAmount = 2;

const mySupply = supply(40, varAmount);
console.log("You will need + " + mySupply + "bars of chocolate " + varAmount + "to last you til the age of 80");
// i.e. 

// calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."

// calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you til the age of 80."

// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

const Waldo = (n) => n.toLowerCase().includes("Waldo");
const myWaldo = Waldo("Waldo is here?");
console.log(myWaldo);
// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

// **10. Pie.** 
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

const pie = (total, recipients, sliperson) => (total >= recipients * sliperson);

const myPie = pie(100, 5, 3);
console.log(myPie);

// Examples:
// * equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices 

// * equalSlices(8, 3, 2) ➞ true
// * equalSlices(8, 3, 3) ➞ false
// * equalSlices(24, 12, 2) ➞ true

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.



// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

const xo = (o) => o.toLowerCase().includes("x" && "o") ? false : true;
const Myxo = xo("ox");
console.log("task 11");
console.log(Myxo);

// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false

// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

const isPrime = function(k) {

    for (let l = 2; l < k; l++) {
        if (k % l === 0) {
            return false;

        } else {
            continue;
        }
    } return true;
}


const myPrime = isPrime(5);
console.log(myPrime);





// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

// **13. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

const email = function (str) {
    if (str.indexOf("@") != -1) {
        if (str.indexOf(".") != -1) {

        }
    }
};


// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

