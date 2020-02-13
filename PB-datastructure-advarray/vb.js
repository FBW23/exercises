// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders. 

// ```javascript
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// ```

console.log(``);
console.log(`====================== 1 ======================`);
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
const total = orders.reduce(function (a, b) {
    return {
        amount: a.amount + b.amount
    }
});

console.log(total.amount);


console.log(`===============================================`);
console.log(``);
// #### 2. Increment by 1
// ```javascript 
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// ``` 
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.
console.log(``);
console.log(`====================== 2 ======================`);
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

console.log(arrayOfNumbers);
const plusOne = arrayOfNumbers.map(x => x + 1);

console.log(plusOne);

console.log(`===============================================`);
console.log(``);
// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```
console.log(``);
console.log(`====================== 3 ======================`);

const filterEvens = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

console.log(`===============================================`);
console.log(``);
// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```
console.log(``);
console.log(`====================== 4 ======================`);

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (friends, sstring) => {
    return friends.filter(name => name.includes(sstring))
};
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


console.log(`===============================================`);
console.log(``);
// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```
console.log(``);
console.log(`====================== 5 ======================`);

const sum = (array) => {
    return array.reduce((a, b) =>
        a + b, 0);

    //     console.log(a);
    //     console.log(b);   
    //     return a+b;
    //  } , 0)

};

console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20
console.log(`===============================================`);
console.log(``);
// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.console.log(``);
console.log(`====================== 6 ======================`);

const squares = [1, 4, 16, 25];

const normals = squares.map(x => Math.sqrt(x));

console.log(normals)

console.log(`===============================================`);
console.log(``);