// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
const person = {
    name: 'Julia',
    age: 32,
    hobbies: 'cooking'
}

for (const prop in person) {
    console.log(`${prop} ${person[prop]}`);
};


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
const obj = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};
const getObjectValues = (obj) => {
    let array = [];
    for (const value in obj) {

        array.push(obj[value]);

    } return array;
};

console.log(getObjectValues(obj));


// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
const person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris',
    prints: function () {

        for (const values in person2) {
            return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`

        }
    }
};


console.log(person2.prints());
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".

// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
const object= {
    A: 1,
    B: 2,
    C: 3
};
const objectToArray = (object) => {
    let newArray = [];
    for (const key in object){
        newArray.push([key.toString(), object[key]]);
        
    } return newArray;
};

console.log(objectToArray(object));
// ({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// ```
// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
const object2 ={
    name: "Mike", 
    class: "4A", 
    course: "English"
};
const arrayOfProp = (object2)=>{
    let newArray = [];
    for(const prop in object2){
        newArray.push(prop);
    }
    return newArray
}

console.log(arrayOfProp(object2));
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
let first = {firstName: "John"};
let last = {lastName: "Smith"};

const twoObjects = (first, last)=>{
    const returnMerge =Object.assign(first, last);
    return returnMerge;
}

console.log(twoObjects(first, last));

// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
console.log('If both objects have a property with the same name, then the second object property overwrites the first.');

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
const person4 ={
    name: "John", 
    job: "teacher"
};
const switchKeys = (person4)=>{
    let newOb = {};
    for(let key in person4){
      newOb[person4[key]] = key;
    }
    return newOb;
  };

  console.log(switchKeys(person4));
// * Example: 
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```
// * Expected Output: 
// ```javascript
// {"John": name, "teacher": job} 
// ```

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.


// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]