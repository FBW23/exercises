// 1. Object Person. Create an object named person. Loop through the object and print both 
//the property and value of the object.

console.log("TASK 1");
const person = {
    name: "bianca",
    age: "33",
    doing: "student"
};

for (const property in person) {
    console.log(`${property}: ${person[property]} `)
}


console.log("      ")
console.log("TASK 2")


// 2. Get Values. Create a function that returns an array of all values of an object's properties.


const getObjectValues = (object) => {
     return Object.values(object);

}


console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));


console.log("      ");
console.log("TASK 3");

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

const person2 = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  getfuncao: function() {
      return `${this.firstName} ${this.lastName} is ${this.age} old ${this.job} in ${this.city}.`
      
  }
};
console.log(person2.getfuncao());

// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
