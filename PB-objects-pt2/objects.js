/**1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
Examples:
4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true*/

const withinAGivenRange = (number, objectMinMax) => {
    // let isWithin = false; // boolean 
    //     if (number >= objectMinMax.min && number <= objectMinMax.max) {
    //         isWithin = true;
    //     }
    // return isWithin;
    return (number >= objectMinMax.min && number <= objectMinMax.max);
};

const shortest = (number, objectMinMax) => (number >= objectMinMax.min && number <= objectMinMax.max);

console.log(shortest(4, {
    min: 0,
    max: 5
})); // true
console.log(shortest(4, {
    min: 4,
    max: 5
})); // true
console.log(shortest(4, {
    min: 6,
    max: 10
})); // false
console.log(shortest(5, {
    min: 5,
    max: 5
})); // edge case