// 1. Object Person. Create an object named person. Loop through 
//the object and print both the property and value of the object.

console.log("------------------------------1. Object Person.-----------------------------------")

const person = {
  firstName: 'Plamen',
  lastName: 'Mitev',
  age: 30,
  married: true
};

for (keys in person) {
  console.log(`${keys}: ${person[keys]}`)
};

//2. Get Values. Create a function that returns an array of 
// all values of an object's properties.

console.log("------------------------------2. Get Values.-----------------------------------")

const getObjectValues = objects => {
  let newArr = [];
  for (keys in objects) {
    newArr.push(objects[keys]);
  }
  return newArr;
};

console.log(getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
}));

//3. Add A Method. Create an object and add a method to that object 
//which prints the values of the objects in a string.

console.log("------------------------------3. Add A Method.-----------------------------------")

let person2 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  printPerson: function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`
  }
};

console.log(person2.printPerson());


//Bonus Questions
//1.Convert keys and values into an array. 
//Create a function that converts an object into an array of keys and values.

console.log("------------------------------BONUS-----------------------------------")
console.log("------------------------------1.Convert keys and values into an array-----------------------------------")

const objectToArray = obj => {
  let newArr = [];
  for (keys in obj) {
    newArr.push(keys, obj[keys])
  }
  return newArr;
};

console.log(objectToArray({
  A: 1,
  B: 2,
  C: 3
}));
console.log(objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
}));

//2. List Properties.
// Create a function that returns an array of properties of a javascript object.
console.log("------------------------------BONUS-----------------------------------")
console.log("------------------------------2. List Properties. -----------------------------------")

let student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

const takeProperties = obj => {
  let newArr = [];
  for (keys in obj) {
    newArr.push(keys);
  }
  return newArr;
};

console.log(takeProperties(student));

//3. Merge. Create a function that takes two objects as its parameters
// and merges them together into a new object.
console.log("------------------------------BONUS-----------------------------------")
console.log("------------------------------ 3. Merge. -----------------------------------")

let first = {
  firstName: "John"
};
let last = {
  lastName: "Smith"
};

const merge = (firstObject, secondObject) => {
  let newObj = {
    ...firstObject,
    ...secondObject
  };
  return newObj;
};
console.log(merge(first, last));

// 4. Switch Keys and Values. Create a function to get a copy of an object. 
//The copy must switch the keys and values

console.log("------------------------------BONUS-----------------------------------")
console.log("------------------------------ 4. Switch Keys and Values. -----------------------------------")

let teacher = {
  name: "John",
  job: "teacher"
};
const switchKeysValues = obj => {
  let arrKeys = [];
  let arrValues = [];
  let newObj = {};
  for (key in obj) {
    arrKeys.push(keys);
    arrValues.push(obj[key]);
  };
  let key1 = arrKeys[0].toString();
  let key2 = arrKeys[1].toString();
  let val1 = arrValues[0].toString();
  let val2 = arrValues[1].toString();
  // console.log(key1);
  // console.log(key2);
  // console.log(val1);
  // console.log(val2);
  newObj[val1] = key1;
  newObj[val2] = key2;

  return newObj;
};
console.log(switchKeysValues(teacher));
// console.log(switchKeysValues(teacher));

// 5. Return Keys and Values. Write a program that takes an object and 
//returns an array which contains two arrays:
// one for the keys of the object and the other for the values of the object.
console.log("------------------------------BONUS-----------------------------------")
console.log("------------------------------  5. Return Keys and Values -----------------------------------")

const extract = obj => {
  let firstArr = [];
  let secondArr = [];
  let thirdArr = [];
  for (keys in obj) {
    firstArr.push(keys);
    secondArr.push(obj[keys]);
  };
  thirdArr.push(firstArr);
  thirdArr.push(secondArr);
  return thirdArr;
};

console.log(extract({
  a: 1,
  b: 2,
  c: 3
}));