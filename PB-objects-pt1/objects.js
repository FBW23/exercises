console.log('Objects: Part 1');

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

const person = {
    name: 'Johnny',
    lastName: 'Hallyday'
};

for (const property in person) {
    // console.log(key + ':', person[key]);
    console.log(`${property}: ${person[property]}`);
}

console.log(`**2. Get Values.**`);
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript

function getObjectValues(objectItem) {
    let arrayOfValues = [];
    for (const key in objectItem) {
        arrayOfValues.push(objectItem[key]);
    }
    return arrayOfValues;
}

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));

// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```

console.log(`**3. Add A Method.**`);
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
const pepson = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris',
    getToKnow: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year-old ${this.job} in ${this.city}.`;
    }
};

console.log(pepson.getToKnow());

// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".

console.log(`**1. Convert keys and values into an array.**`);
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray1({
//     A: 1,
//     B: 2,
//     C: 3,
// objectToArray: function (arr) {
//     let myArray = [];
//     for (const key in arr) {
//         myArray.push(arr[key]);
//     }
//     return myArray;
// }
// })

// function objectToArray(objectItem) {
//     let myArray = [];
//     for (const key in objectItem) {
//         myArray.push(key, objectItem[key]);
//     }
//     return myArray;
// }

const objectToArray = object => {
    for (key in object) {
        return Object.entries(object);
    }
};

console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
}));

// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```

// function objectToArray2(objectItem) {
//     let myArray = [];
//     for (const key in objectItem) {
//         myArray.push(key, objectItem[key]);
//     }
//     return myArray;
// }

const objectToArray2 = object => {
    for (key in object) {
        return Object.entries(object);
    }
};

console.log(objectToArray2({
    cats: 1,
    dogs: 2,
    turtles: 4
}));
// ```
// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```

console.log(`**2. List Properties.**`);
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
let student = {
    name: "Mike",
    class: "4A",
    course: "English",
};

function arrayOfProperties() {
    return Object.keys(student);
    // KEINE AHNUNG!!!
}
console.log(arrayOfProperties(student));

// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```