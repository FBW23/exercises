console.log();
console.log('**1. Add Up.**');
console.log();

let sum = 0;

function addUp(numOne) {
    for (let i = 1; i <= numOne; i++) {
        sum += i;
    }
    return sum;
}
let output = addUp(13);
console.log(output);

console.log();
console.log('**2. Cubed.**');
console.log();

// let cubed = (numOne, numTwo, numThree) => {
//     if (numOne, numTwo, numThree) {
//         console.log('here');
//         let cubeOne = Math.pow(numOne, 3);
//         let cubeTwo = Math.pow(numTwo, 3);
//         let cubeThree = Math.pow(numThree, 3);
//         return cubeOne + cubeTwo + cubeThree;
//     } else if (numOne) {
//         console.log('or here');
//         let cubeOne = Math.pow(numOne, 3);
//         return cubeOne;
//     } else {
//         console.log('or even here');
//         return 0;
//     }
// };

const cubed = (a, b, c) => {
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
};

console.log(cubed(1, 5, 9));
console.log(cubed(2));
console.log(cubed());

// JAMILS LÖSUNG
// const cube2 = (...args) => args.length === 0 ? a = 0 : args.map(value => Math.pow(value, 3)).reduce((a, b) => a + b);
// console.log(cubed2(2, 2));

console.log();
console.log('**3. String Check.**');
console.log();

const compare = (word, str) => {
    if (word.substr(0, 3) === str) {
        return true;
    } else {
        return false;
    }
}

let word = 'motorhead';
let str = 'mot';
let result = compare(word, str);
console.log(result);

// // JAMILS LÖSUNG
// const cubed3 = (a, b) => b.slice(0, a.length) === a ? true : false;
// console.log(cubed3('c', 'cheese')); // expected result: true.

console.log();
console.log('**4. Less Than or Equal to Zero?**');
console.log();

const lessThanOrEqualToZero = (a) => a <= 0;

let result4 = lessThanOrEqualToZero(3);
console.log(result4); // expected true

console.log();
console.log('**5. Count Occurrences.**');
console.log();

const countOccurrences = (string, letter) => {
    let letterPosition = 0;
    let matchingSpot = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(letter, matchingSpot) > -1) {
            letterPosition++;
            matchingSpot = string.indexOf(letter, matchingSpot) + 1;
        }
    }
    return letterPosition;
}
let result5 = countOccurrences('precipitevolissimevolmente', 'e');
console.log(result5);

// JOAOS SOLUTION
// function countOccurrences(string, letter) {
//     let RegEx = new RegExp(letter, 'g');
//     console.log(RegEx);
//     let result = string.match(regEx).legth;
//     console.log('there are '+ result + ' ' + letter);
// }
// console.log('task5');
// console.log(countOccurrences('pupipupupupi', 'p'));

console.log();
console.log('**6. X To The Power of X.**');
console.log();

const calculateBaseToExponent = (a) => {
    return Math.pow(a, a);
};

console.log(calculateBaseToExponent(5));
console.log(calculateBaseToExponent(10));
console.log(calculateBaseToExponent(3));

console.log();
console.log('**7. Dog Years.**');
console.log();

const dogAge = (a) => {
    return a * 7;
}

//JULIENS LÖSUNG
// const dogAge = (age) => 'Your dog is ' + age * 7 + ' in dog years.';
// console.log(dogAge(4));

let finalAge = dogAge(5);
console.log(`Your dog is ${finalAge} years old in dog years!`);

console.log();
console.log('**8. A Lifetime Supply...**');
console.log();

// const calcSupply = (presentAge, numberOfSnacks) => {
//     let amountSoFar = presentAge * numberOfSnacks * 365;
//     let lifetimeAmount = 80 * 365 * numberOfSnacks;
//     return lifetimeAmount - amountSoFar;
// };

// const calcSupply2 = (presentAge, numberOfSnacks) => {
//     let leftoverYears = 80 - presentAge;
//     return leftoverYears * 365 * numberOfSnacks;
// };

// const calcSupply3 = (presentAge, numberOfSnacks) => (80 - presentAge) * 365 * numberOfSnacks;
// let varNumOfSnacks = 33;
// let result8 = calcSupply3(25, varNumOfSnacks);
// console.log('You will need ' + result8 + ' chocolate bars (' + varNumOfSnacks +  ' a day) to last you til the age of 80.'); 

const calcSupply4 = (presentAge, numberOfSnacks) => {
    return 'You will need ' + (80 - presentAge) * 365 * numberOfSnacks + ' chocolate bars (' + numberOfSnacks + ' a day) to last you til the age of 80.';
};

console.log(calcSupply4(25, 2));

console.log();
console.log('**9. Where\'s Waldo?**');
console.log();

const isWaldoHere = (str) => {
    let strLower = str.toLowerCase();
    if (strLower.includes('waldo')) {
        return true;
    } else {
        return false;
    }
};

isWaldoHere("is there wal here ?");
console.log('is there wal here? ->', isWaldoHere("is there wal here ?"));
console.log("I found you Waldo! ->", isWaldoHere("I found you Waldo!"));
console.log("is wally here? ->", isWaldoHere("is wally here?"));
console.log("waldo is here ->", isWaldoHere("waldo is here"));

console.log();
console.log('**10. Pie.**');
console.log();

const equalSlices = (numOfTotalSlices, numOfRecipients, numOfSlicesPerIndividual) => numOfTotalSlices >= numOfRecipients * numOfSlicesPerIndividual;
console.log(equalSlices(11, 5, 3));

console.log();
console.log('**11. XO**');
console.log();


// TEST-DRIVER DESIGN
function XO(myString) {
    // format string correctly
    // counting
    // comparing
    // decision: true or false?

    // Do something
    // Counting
    if (myString) {
        // Matching

        let matchXs = myString.match(/x/gi); // we need the "g" to check the whole thing and the "i" to ignore case sensitivity.
        let matchOs = myString.match(/o/gi);
        let allXs = 0;
        let allOs = 0;
        // Counting
        if (matchXs) {
            allXs = matchXs.length;
        }
        if (matchOs) {
            allOs = matchOs.length;
        }
        console.log(allXs);
        console.log(allOs);
        // Comparing
        if (allXs === allOs) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}
console.log(XO());
console.log(XO("xxoo"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

console.log();
console.log('**12. isPrime?**');
console.log();

const isPrime = (number) => {
    if (number === 0) {
        return false;
    }
    if (number === 1){
        return false;
    }
    for (let i = 2; i < number; i++) { // start from 2, stop at the number, increment
        if (number % i === 0) {
            return false;
        } 
    } return true;
}

console.log(isPrime(10));
console.log(isPrime(1001));
console.log(isPrime(10001));