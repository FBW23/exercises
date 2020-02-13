// #### 1. Get total orders
// * Return the total amount of orders. 
console.log('------------------------------1. Get total orders');

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

const total = orders.reduce(function(a, b) {
    return a + b.amount;
}, 0);

console.log(total);

// #### 2. Increment by 1
// ```javascript 
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// ``` 
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.
console.log('------------------------------2. Increment by 1');

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const increment = arrayOfNumbers.map(num => num + 1);

console.log(increment);

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. 
// The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```
console.log('------------------------------3. Filter Evens');

const filterEvens = array => array.filter(item => item % 2 === 0);

console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
console.log(filterEvens([22,2,31,110,6,13])); //returns [22,2,110,6]



// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```
console.log('------------------------------4. Filter Friends');

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, string) => {
    let selection = array.filter(name => name.includes(string));
    return selection;
};

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```
console.log('------------------------------5. Sum Up');

const sum = array => array.reduce((a,b) => a+b);

console.log(sum([1,2,3,4,5])); //returns 15
console.log(sum([6,7,7])); //returns 20


// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.
console.log('------------------------------6. Square Root');

const squareRoot = array => array.map(num => Math.sqrt(num));

console.log(squareRoot([4,9, 16])); // => 2, 3, 4
