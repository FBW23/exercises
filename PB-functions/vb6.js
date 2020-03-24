
console.log(`// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calculateBaseToExponent(5, 5) ➞ 3125
// * calculateBaseToExponent(10, 10) ➞ 10000000000
// * calculateBaseToExponent(3, 3) ➞ 27`);

const calculateBaseToExponent = (baseNumber, exponent) =>  Math.pow(baseNumber, exponent);

const result = calculateBaseToExponent(5, 2);
const result2 = calculateBaseToExponent(10, 2);
const result3 = calculateBaseToExponent(3, 2);
console.log(result);
console.log(result2);
console.log(result3);


