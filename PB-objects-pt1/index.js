// 1. Object Person. Create an object named person. Loop through 
//the object and print both the property and value of the object.

console.log("------------------------------1. Object Person.-----------------------------------")

const person = {
  firstName: 'Plamen',
  lastName: 'Mitev',
  age: 30,
  married: true
}

for (keys in person) {
  console.log(`${keys}: ${person[keys]}`)
}

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
}))

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