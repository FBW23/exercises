// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
let user = {
    name: "John",
};
for (let property in user) {
    console.log(`${property} ${user[property]}`);
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

// const object1 = {
//     choice1: "tea",
//     choice2: "coffee",
//     choice3: "milk"
//   };

//   console.log(Object.value(object1));

const beg = (object) => {
    let sum = [];
    for (const key in object) {
        sum.push(object[key]);
        console.log(key);
    }
    return sum;
}

console.log(beg({ choice1: "tea", choice2: "coffee", choice3: "milk" }));


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

let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",

    getInfo: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;

    }
};
console.log(person.getInfo());