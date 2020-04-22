// 1. Add Up. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function number1(number)

{
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        // console.log(sum)

    }
    return sum;
}
console.log(number1(4));
console.log(number1(13));
console.log(number1(600));

// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0

// function freakingCubes(number)

// { let multiplier= 3;

// }
function freakingCubes(a, b, c) {
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
console.log(freakingCubes(2));
console.log(freakingCubes(0));
console.log(freakingCubes(1,5,9));



// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// lessThanOrEqualToZero(3) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-4) ➞ true
// lessThanOrEqualToZero(10) ➞ false

function lessThanOrEqualToZero(number) {



    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));

// 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true
// dictionary("beau", "pastry") ➞ false

function compare(wordOne, wordTwo) {
    if (wordOne.substring(0, 1, 2) === wordTwo.substring(0, 1, 2)) {
        return true;
    } else {
        return false;
    }
}
console.log('task3')
console.log(compare("bu", "button"));
console.log(compare("tri", "triplets"));
console.log(compare("beau", "pastry"));