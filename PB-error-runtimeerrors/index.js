"use strict";

// Debugging Exercises
// 1. Fido says...
console.log("===== 1.Fido says.... =====");
// In the following code, we want fido to bark. Instead, we get an error. Why?
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.bark = function() {
//   console.log(`${this.name} says woof`);
// };

// let fido = new Dog("fido");
// fido.bark();

// The bark function is defined outside of the class Dog

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says woof`);
  }
}


let fido = new Dog("fido");
fido.bark();

// 2. Month Name
console.log("==== 2. Month Name ====");


const getMontName = number => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }
  const newErr = new Error("Invalid Month Number!");
  try {
    if (number > 12 || number <= 0) {
      throw `${newErr}`;
    } else {
      return months[number];
    }
  } catch (err) {
    return err;
  }

};
console.log(getMontName(12));
console.log(getMontName(14));
console.log(getMontName(0));

// 3. Reverse
console.log("==== 3. Reverse ====");

const reverseString = (str) => {
  const notStrErr = new Error('This is not a string!')
  try {
    if (typeof (str) != "string") {
      throw `${notStrErr}`
    } else {
      return str.split("").reverse().join("");
    }
  } catch (err) {
    return err;
  }
};

console.log(reverseString('hello'));
console.log(reverseString(2019));
console.log(reverseString(false));

//4. Comparing Arrays
console.log("==== 4. Comparing Arrays ====");
// Why doesn't the code work? 
// "===" Compare the two references arr1, arr2. They point to 
// different objects in different locations in memory, and
// this is considered not equal

function compareArrays(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(compareArrays([1, 2], [1, 3]));
console.log(compareArrays([1, 2], [1, 2]));
console.log(compareArrays([4, 5, 6], [4, 5, 6]));
console.log(compareArrays([4, 7, 6], [4, 5, 6]));

//5. Recursion
console.log("==== 5. Recursion ====");

function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let result = array.pop() + sum(array);
    return result;
  }

}

console.log(sum([1, 2, 3]));
console.log(sum([1, 1, 3]));