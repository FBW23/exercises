// 1. Get total orders
// Return the total amount of orders.
console.log("========== 1. Get total orders ==========")
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

const totalAmountOfOrders = orders.reduce(function (acc, value) {
  return {
    amount: acc.amount + value.amount
  }
});

console.log(totalAmountOfOrders.amount);

//2. Increment by 1
console.log("========== 2. Increment by 1 ==========")
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
//Create a function that increments each element in the 
//arrayOfNumbers by 1. Return the a new array of modified elements.

const modifiedArray = arrayOfNumbers.map(value => value + 1);
console.log(modifiedArray);

//3. Filter Evens
console.log("========== 3. Filter Evens ==========")
//Create a function called filterEvens that 
//filters an array and only return even numbers. The function
// should take an array of 
//numbers as an argument, and should not use a loop

const filterEvens = arr => {
  return arr.filter(value => value % 2 === 0)
};

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

//4. Filter Friends
//Given an array, create a 
//function which filters array based on a search query.
console.log("========== 4. Filter Friends ==========")

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, word) => {
  return result = arr.filter(value => value.includes(word)).map(value => value.charAt(0).toUpperCase() + value.slice(1));
};


console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));


//5. Sum Up
//Write a function called sum that uses the 
//reduce method to sum up an array of numbers.
console.log("========== 5. Sum Up ==========")

const sum = arr => {
  return arr.reduce((acc, value) => {
    return acc + value;
  });
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));