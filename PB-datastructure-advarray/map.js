//# Map, Filter, Reduce

//#### 1. Get total orders
//* Return the total amount of orders. 

const initialValue = 0;
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const sum = orders.reduce(function (total, currentValue) {
    return total + currentValue.amount;
},);

console.log(sum);

console.log("=================== 2 ======================");

//#### 2. Increment by 1
//```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
 
//* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const increment = arrayOfNumbers.map( item => item + 1 );
console.log(increment);
console.log("=================== 3 ======================");
//#### 3. Filter Evens
//* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
const filterEvens = (array) => {
    return array.filter(item => item % 2===0);
};

    
//* Examples:
//```javascript
console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
console.log("=================== 4 ======================");
//#### 4. Filter Friends
//* Given an array, create a function which filters array based on a search query.

//* Examples

//```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (array, string)=>{
    return array.filter(word => word.toLowerCase().includes(string));
};
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

console.log("=================== 5 ======================");

//#### 5. Sum Up
//* Write a function called sum that uses the reduce method to sum up an array of numbers. 
const sum3 = (array) =>{
    return array.reduce(((a, b )=> a + b ),0);
};

//* Examples:
//```javascript
console.log(sum3([1,2,3,4,5])); //returns 15
console.log(sum3([6,7,7])); //returns 20

console.log("=================== 6 ======================");
//#### 6. Square Root
//* Given an array of numbers, find the square root of each element in the array.
const aRei = [1,4,6,7,99];
const squareRoot = aRei.map(aRei => Math.sqrt(aRei));

console.log(squareRoot);

//# create map, filter, reduce functions from image
//Transform the examples on the picture in real code.
//![Image](./image.jpg)
//### Starting poing:
//```
const food = ['cow', 'potato', 'hen', 'corn']
var cook = (foodItem) => {
    
  switch (foodItem){
      case "cow":
            return "hamburguer";
      case "potato":
           return "fries";
      case "hen":
           return "chicken";
      case "corn":
           return "popcorn" ;
      default:
          console.log("notvalid");        
         
  }
};
const processedFood = food.map(foodItem => cook(foodItem));
console.log(processedFood);

let veggie = (veggieItem) => {
    switch(veggieItem){
        case "fries":
            return "fries";
        case "popcorn":
            return "popcorn";
        default :
             break;       
    };
};

const veggieFood = processedFood.filter( veggieItem => veggie(veggieItem));
console.log(veggieFood);

//japanese robots
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

  /*function countAutobots(transformer) {
      if (transformer.team === "Autobot"){
          return 1;
      } else{
          return 0;
      }
  };

  const countAutobots2 = transformers.reduce(countAutobot, 0);
  console.log(countAutobots2);*/

  const allTheForms = transformers.map(function(object) {
      //return object.form ; both way of accessing the objects are fine. 
      return object["form"];
  });

  console.log(allTheForms);

  const allTheForms2 = transformers.map(object => object.form);

console.log(allTheForms2);

  
//filter only for auto bots
//array.prototype.filter(callback(item))
function areYouAuto(transformer) {
    if ( transformer.team === "Autobot") {
        return transformer.team;
    };
}

const autobots = transformers.filter(areYouAuto);
console.log(autobots);

