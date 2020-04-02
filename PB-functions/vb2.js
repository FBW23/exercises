
console.log(`// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples: 
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0`);

const exercise2 = (num1, num2, num3) => {
    return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
}
const sumOfCubes = exercise2(1, 5, 9);
console.log(sumOfCubes);
const sumOfCubes2 = exercise2(2, 0, 0);
console.log(sumOfCubes2);
const sumOfCubes3 = exercise2(0, 0, 0);
console.log(sumOfCubes3);





