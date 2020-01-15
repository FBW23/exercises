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

const cubes = sumOfCubes(1,5,9);
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

 
const wordFunction = function(c, d) {

    if (d.includes(c)) {
        return true
    } else {
        return false;
    }
}

const wordFunction2 = wordFunction("bi", "richa"); //print false
console.log(wordFunction2);

//================================================================================

// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument 
//and returns true if it's less than or equal to zero, otherwise return false.


// Examples:
// lessThanOrEqualToZero(3) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-4) ➞ true
// lessThanOrEqualToZero(10) ➞ false
