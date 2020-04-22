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
    return items.filter(filterItem => filterItem.includes(word));
};
const friends = ["Rika", "Jenna", "Bleda", "Oliver", "Itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

console.log('====== Task 5 =====')

// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:
const summ = (array) => array.reduce((a, b) => a + b);

console.log(summ([1, 2, 3, 4, 5])); //returns 15
console.log(summ([6, 7, 7])); //returns 20
// 6. Square Root
// Given an array of numbers, find the square root of each element in the array.
console.log('====== Task 6 ======')
let numbers = [144, 49, 25];
let shorter = numbers.map(num => Math.sqrt(num));
console.log(shorter);

const food = ['cow','potato','hen','corn'];
const cook=(foodItem)=>{
    switch(foodItem){
        case 'cow':
            return 'Hamburger';
            case 'potato':
        return 'French Fries';
        case 'hen':
            return 'chicken';
            case 'corn':
                return 'popcorn';
                default:
                    console.log('this is no valid input')
    }
};
const processedFood=food.map(foodItem=>cook(foodItem));
console.log(processedFood);

    
const transformers = [
    {
      name: 'Optimus Prime',
      form: 'Freightliner Truck',
      team: 'Autobot'
    },
    {
      name: 'Megatron',
      form: 'Gun',
      team: 'Decepticon'
    },
    {
      name: 'Bumblebee',
      form: 'VW Beetle',
      team: 'Autobot'
    },
    {
      name: 'Soundwave',
      form: 'Walkman',
      team: 'Decepticon'
    }
  ];

  const allTheForms=transformers.map(object=>object.form)
    
    console.log(allTheForms)


    //Filters
    //Array.prototype.filter(callback(item))
console.log('=======blah=======')
function isAutobot(transformer){
   return transformer.team==='Autobot';

}

    const autobots=transformers.filter(isAutobot)
console.log(autobots)

function countAutobot(previous,transformer){
    if( transformer.team==='Autobot'){
        return previous +1;
    } else {
        return previous;
    }
}
const countAutobots =transformers.reduce(countAutobot,0)
console.log(countAutobots);