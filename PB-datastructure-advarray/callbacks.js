// # Map, Filter, Reduce

console.log('#### 1. Get total orders * Return the total amount of orders.');

// KEINE AHNUNG 


// ```javascript
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];
// ```

const totalAmount = orders.reduce(function (a, b) {
    return a + b.amount;
}, 0); // WHAT IS THIS?!

console.log(totalAmount);

console.log('#### 2. Increment by 1');
// ```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ``` 
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const incrementedArrayOfNumber = [];

arrayOfNumbers.forEach(function (item) {
    incrementedArrayOfNumber.push(++item);
});

console.log(incrementedArrayOfNumber);

console.log('#### 3. Filter Evens');
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

function filterEvens (numbers) {
    return numbers.filter(item => item % 2 === 0);
}

// * Examples:
// ```javascript
console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]
// ```

console.log('#### 4. Filter Friends');
// * Given an array, create a function which filters array based on a search query.

function filterItems (names, search) {
    return names.filter(item => item.includes(search));
}

// * Examples

// ```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```

console.log('#### 5. Sum Up');
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

function sum (arr) {
   return arr.reduce((a, b) => a + b);
}

// * Examples:
// ```javascript
console.log(sum([1,2,3,4,5])); //returns 15
console.log(sum([6,7,7])); //returns 20
// ```

console.log('#### 6. Square Root');
// * Given an array of numbers, find the square root of each element in the array.

const squareArray = arr => arr.map(item => Math.sqrt(item));

console.log(squareArray([4, 9, 16]));