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
        if (string.indexOf(letter, firstMatch) > -1) {
            letterPosition++;
            matchingSpot = string.indexOf(letter, matchingSpot) + 1;
        }
    } return letterPosition;
}
let result5 = countOccurrences('precipitelissimevolmente', 'e');
console.log(countOccurrences);


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

let finalAge = dogAge(5);
console.log(`Your dog is ${finalAge} years old in dog years!`);

console.log();
console.log('**8. A Lifetime Supply...**');
console.log();

const calcSupply = (presentAge, numberOfSnacks) => {
    let amountSoFar = presentAge * numberOfSnacks * 365;
    let lifetimeAmount = 80 * 365 * numberOfSnacks;
    return lifetimeAmount - amountSoFar;
}

let result8 = calcSupply(37, 2);
console.log('You will need ' + result8 + ' chocolate bars (3 a day) to last you til the age of 80.');

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