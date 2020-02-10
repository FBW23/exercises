// 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true
console.log('======Task 1 ======');
const shortest=(number,objectMinMax)=>(number>=objectMinMax.min && number <= objectMinMax.max);


console.log(shortest(4,{min:0,max:5}));
console.log(shortest(4, { min: 4, max: 5 }));
console.log(shortest(4, { min: 6, max: 10 }));
console.log(shortest(5, { min: 5, max: 5 }));


// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log("======= Task 2=======")
const maximumScore = array => {
    let sum = 0;
    for (let object in array) {
        sum += array[object].score;
    }
    return sum;
};

console.log(maximumScore({ tile: "D", score: 2 }));


// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:
console.log("======== Task 3 =======")
const isEmpty=obj=> 
 Object.keys(obj).length === 0;

console.log(isEmpty({}))
console.log(isEmpty(['banana']));
console.log(isEmpty([1,2,3,'and',4]));
console.log(isEmpty({}));

// {} ➞ true
// {a: 1} ➞ false

// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
console.log("======== Task 4 =====")

function count(string) {
    return string.split("").reduce((a, letter) => {
      a[letter] = (a[letter] || 0) + 1;
      return a;
    }, {});
  }
  console.log(count("tree"));
  console.log(count("Banana"));
  console.log(count("Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft"))

// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
console.log("======== Task 5 ======")
// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
const freeShipping=price=>Object.values(price) >=50;


  console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
  console.log(freeShipping( {"Sponge": 3.50, "Soap": 5.99 }));
  console.log(freeShipping({"Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));



console.log("======= TASK 6 ======")

  // 6. Programming Object.
// Write the command to add the language "Go" to the end of the languages array.

// Change the difficulty to the value of 7.

// Using the delete keyword, write the command to remove the jokes key from the programming object.

// Write a command to add a new key called isFun and a value of true to the programming object.

// Using a loop, iterate through the languages array and console.log all of the languages.

// Using a loop, console.log all of the keys in the programming object.

// Using a loop, console.log all of the values in the programming object.

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
//  console.log(programming.values())

// Bonus:

// // Make sure that any other code cannot delete or change properties of the object.