// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
console.log('1. Object Person');

const person = {
    name: 'Jesus ',
    lastName: 'Christ',
};

for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```
console.log('2. Get Values');


const getObjectValues = object => {
    let newArray = [];
    for (const value in object) {
        newArray.push(object[value]);
    }
    return newArray;
};

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));
// expected => ["tea", "coffee", "milk"] 


// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".
console.log('3. Add A Method');

const newPerson = {
    name: 'Michael',
    lastName: 'Smith',
    job: 'driver',
    age: 20,
    city: 'Paris',
    getToKnow() {
        return `${this.name} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
    }
};
console.log(newPerson.getToKnow());

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```
console.log('Convert keys and values into an array');

const objectToArray = object => {
    let myArray = [];
    for (key in object) {
        myArray.push(key + Object.keys(object));
    }
    return  myArray;
};
console.log(objectToArray({
      A: 1,
      B: 2,
      C: 3
    }));