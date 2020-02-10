// 1. Check if a number is within a given range. 
//Write a program that checks if a number is within 
//the range of an object's min and 
//max properties. Assume min <= max is always true.

console.log("--------------------------1. Check if a number is within a given range.-------------------------------")


const withinAnGivenRange = (number, objectMinMax) => {
  // let isWithin = false;// boolean
  //  if(number >= objectMinMax.min && number <= objectMinMax.max) {
  //   isWithin = true;
  //  }
  // return isWithin;
  return (number >= objectMinMax.min && number <= objectMinMax.max); // shorter
};

const shortest = (number, objectMinMax) => (number >= objectMinMax.min && number <= objectMinMax.max);

console.log(withinAnGivenRange(4, {
  min: 0,
  max: 5
}));
console.log(withinAnGivenRange(4, {
  min: 4,
  max: 5
}));
console.log(withinAnGivenRange(4, {
  min: 6,
  max: 10
}));
console.log(withinAnGivenRange(5, {
  min: 5,
  max: 5
}));


console.log(shortest(4, {
  min: 0,
  max: 5
}));
console.log(shortest(4, {
  min: 4,
  max: 5
}));
console.log(shortest(4, {
  min: 6,
  max: 10
}));
console.log(shortest(5, {
  min: 5,
  max: 5
}));


// 2.Scrabble. Write a program that, given an array of scrabble tiles, 
//counts the maximum score that a player can earn from the tiles in their 
//hand.

console.log("-------------------------- 2.Scrabble.-------------------------------")

const scrabble = arr => {
  let result = [];
  for (element in arr) {
    let elements = arr[element];
    result.push(elements.score);
  }
  // console.log(result);
  return (result.reduce((a, b) => a + b))
};


// const maximumScore = array => {
//   let sum = 0;
//   for (let object in array) {
//     sum += array[object.score];
//   }
//   return sum;
// }


console.log(scrabble([{
  tile: "N",
  score: 1
}, {
  tile: "K",
  score: 5
}, {
  tile: "Z",
  score: 10
}, {
  tile: "X",
  score: 8
}, {
  tile: "D",
  score: 2
}, {
  tile: "A",
  score: 1
}, {
  tile: "E",
  score: 1
}]));

//3. Is it an empty object? Write a program 
//that returns true if an object is empty, and 
//false if otherwise.

console.log("-------------------------- 3. Is it an empty object?.-------------------------------")

const isObjectEmpty = obj => {
  if (Object.entries(obj).length > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isObjectEmpty({}));
console.log(isObjectEmpty({
  a: 1
}));

// const isEmpty = (object) => {
//   for (const key in object) {
//     return false;
//   }
//   return true;
// }

// const isEmpty = object => Object.keys(object).length === 0;
const isEmpty = object => !(Object.keys(object).length);

console.log(isEmpty({}));
console.log(isEmpty({
  a: 1
}));


//4. Counting Letters. Create a function that counts the number of 
//occurrences of each letter in a string. Return an object with key pair 
//values of letters and the number of occurrences for each letter.
console.log("-------------------------- 4. Counting Letters.-------------------------------")


// const countLetters = str => {
//   let newArr = [];
//   let count = 0;
//   newArr = str.split('');
//   console.log(newArr);
//   for (i in newArr) {
//     console.log(newArr[i]);
//     result = newArr.indexOf(newArr[i])
//     // console.log(result);
//   }
// };

// countLetters("tree");
// console.log(' ☝ Not working !');
// To look later !!!!!!!!!!!!!!!!!!!!!!!!!!
const countLetters = (string) => {
  let object = {};
  let myString = string.toLowerCase();
  for (let index in string) {
    if (object[string[index]]) { // check if key/value is present
      object[string[index]]++; // add only if already present
    } else {
      object[string[index]] = 1; // push only if not present
    }
  }
  return object;
}
console.log(countLetters("tree"));

//5. Free Shipping. Create a function that 
//determines whether an online order should get 
//free shipping. An order gets free shipping if the total 
//cost of items exceeds €50.

console.log("-------------------------- 5. Free Shipping.-------------------------------")

const freeShipping = obj => {
  let priceArr = [];
  let total;
  for (key in obj) {
    priceArr.push(obj[key]);
  }
  // console.log(priceArr);
  total = priceArr.reduce((a, b) => a + b);
  // console.log(total);
  if (total > 50) {
    return true;
  } else {
    return false;
  }

};

console.log(freeShipping({
  "Sponge": 3.50,
  "Soap": 5.99
}));

console.log(freeShipping({
  "Surround Sound Equipment": 499.99
}));

console.log(freeShipping({
  "Wool": 13.99,
  "Knitting Needles": 15.50,
  "Bag": 13.99
}));

//6. Programming Object.
// Write the command to add the language "Go" to the end of the languages array.
console.log("-------------------------- 6. Programming Object.-------------------------------")

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
  addLanguage: function (string) {
    this.languages.push(string);
  },
  printLanguages: function () {
    return this.isChallenging && this.isRewarding ? `Learning the programming languages ${this.languages} is rewarding and challenging.` : false;

  }
};
// Add Go to the end of languages array
console.log("----1.Add go to the end of the lang arr--------");
programming.addLanguage('Go');
// console.log(programming);

// Changing the difficulty level to 7
console.log("-----2.Change the difficulty level level to 7");
programming.difficulty = 7;
// console.log(programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.
console.log("-----3.Delete the jokes key:value-------");
delete programming.jokes;
// console.log(programming);

//Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
// console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

const loopTroughLanguages = obj => {
  langArr = obj.languages;
  for (index in langArr) {
    console.log(langArr[index]);
  }
};

loopTroughLanguages(programming);

// Using a loop, console.log all of the keys in the programming object.
console.log('----------------------KEYS ---------------')
const printKeys = obj => {
  for (key in obj) {
    console.log(key);
  }
};

printKeys(programming);

//Using a loop, console.log all of the values in the programming object
console.log('-------------------------VALUES-----------------------')

const printValues = obj => {
  for (key in obj) {
    console.log(obj[key])
  }
};

printValues(programming);

//Create an object method where if the keys "isChallenging" and 
//"isRewarding" have values of "true", then return "Learning the 
//programming languages: "JavaScript, Python, Ruby, Go" is rewarding
// and challenging. 
console.log("-------------Create an object method where-------------------")
console.log(programming.printLanguages());

Object.freeze(programming); // makes the object IMMUTABLE
programming.isChallenging = false;
programming.difficulty = 2;
delete programming.difficulty;
console.log(programming);
console.log(programming.languages.push('hello'));

// programming.languages = undefined; // delete the values but keep the key!
// delete programing.languages // delete the key and value

// programming[add] ='hello' // [add] -> think of it as a variable
// console.log(programming);
// programming.add = 'hello world';
// console.log(programming)
// update
// programming.difficulty = 10; // update with dot notation
// programing['difficulty'] = 12; // update with bracket notation

// add method
// programming.myMethod = function() {
//   console.log("Hello World!");
// }
// programming.myMethod();

// update method
// programming.myMethod = function(name = '') {
//   console.log(`Hello World ${name}`)
// };
//programming.myMethod('');
// programming.myMethod("Plamen");

// delete method

// delete programming.myMethod;
// console.log(programming);
// programming.myMethod('Plamen'); not possible