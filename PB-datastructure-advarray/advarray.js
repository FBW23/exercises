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

const totalAmount = orders.reduce(function (a, b) {
    console.log(a);
    console.log(b);
    return a + b.amount;
}, 0);
console.log(totalAmount);
//=================================

// 2. Increment by 1
// Create a function that increments each element in the arrayOfNumbers by 1. 
//Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const incrementedArray = (arrayOfNumbers) => {
    //const map1 = arrayMap.map(bianca  => bianca * 3);
    return arrayOfNumbers.map(item => item + 1);

};
console.log(incrementedArray(arrayOfNumbers));

// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. 
// The function should take an array of numbers as an argument, and should not use a loop.

const filterEvens = array => {
    const even = array.filter(item => item % 2 === 0);
    return even;

};

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]


// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, word) => {
    const filteredfriend = array.filter(friend => friend.includes(word));
    return filteredfriend;
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.


sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20