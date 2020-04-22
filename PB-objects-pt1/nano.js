// Please print each of your answers to the console.

// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const Person = {
    pepeka: 12,
    bilau: 23,
    cacete: 3
};
//Para prop (propriedade) in obj (objeto) faça
for (const prop in Person) {
    // ctrl+shift+k (para abrir o console no mozilla firefox)
    console.log(prop + " = " + Person[prop]);
}
console.log('========= TASK " ========')
// 2. Get Values. Create a function that returns an array of all values of an object's properties.


// Examples:
let mamilo = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};
const getObjectValues = () => {
    return Object.values(mamilo);
};
console.log(getObjectValues(mamilo));
// Expected output:
// ["tea", "coffee", "milk"] 

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// Example
console.log('======= Task 3 =======')
let nerson = {
    firstName1: 'Michael',
    lastName2: 'Smith',
    job: 'driver',
    age: 20,
    city: 'Paris',
    getInfo: function (){
        {
           console.log(this.firstName1 ,this.lastName2 + " is a "+ this.age,this.job +" in " + this.city+".")
        }
    }
};
const lelek = () => {
    return  Object.values(nerson);
    
};
nerson.getInfo();


// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
// Bonus Questions
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// Expected output:getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// });{
// return Object.values (getObjectValues);
// }
// const  person= getObjectValues
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]
// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job} 
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// // {key: true} ➞ [["key"], [true]]