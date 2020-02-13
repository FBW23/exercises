console.log('=====Task 1====')
// 1. Get total orders
// Return the total amount of orders.
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
const sum = orders.reduce((a, b) => {

    return a + b.amount;

}, 0);
console.log(sum);


// 2. Increment by 1
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
console.log('====== Number 2 =======')
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const pindureta = arrayOfNumbers.map(nino => nino + 1);
console.log(pindureta);

console.log('=====Task 3 =====')
// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
// Examples:
const filterEvens = (array) => {
    return array.filter(filterEvens => filterEvens % 2 === 0)
};

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

// Examples
const filterItems = (items, word) => {
    return items.filter(filterItems => filterItems.includes(word))
}
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

console.log('====== Task 5 =====')

// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:
const summ = (array) => {
    return array.reduce((a, b) => a + b);
};


console.log(summ([1, 2, 3, 4, 5])); //returns 15
console.log(summ([6, 7, 7])); //returns 20
// 6. Square Root
// Given an array of numbers, find the square root of each element in the array.
console.log('====== Task 6 ======')
let numbers = [144, 49, 25];
let shorter = numbers.map(num => Math.sqrt(num));
console.log(shorter);