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