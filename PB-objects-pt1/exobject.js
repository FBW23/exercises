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

console.log("................................"),


const oldObject = {

    winter: 'cold',
    spring: 'sexy',
    summer: 'hot',
    autumn: 'orange'

};

Object.seal(oldObject);
Object
const newObject = oldObject;
console.log(newObject);
newObject.spring = 'bunny';
console.log(newObject);
console.log(oldObject);

const thirdObject = newObject;
thirdObject.autumn = 'fall';
console.log(thirdObject);
console.log(newObject);
console.log(oldObject);

//.......... The Spread Operator

const numbers = [1, 2, 3];
console.log(...numbers); // array becomes numbers

const objClone = { ...oldObject }; // makes a real clone of the object
console.log(objClone);
objClone.summer = 'i have been under the shower'; // this change is only on the new object
console.log(objClone);
console.log(oldObject);

const arrayClone = [...numbers]; // makes a real clone of the array
arrayClone[0] = 5; // this change is only on the new array
console.log(arrayClone);
console.log(numbers);

// Deep cloning objects and array : recursive function
// will go as deepcd ..
