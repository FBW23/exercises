// Instructions
// 1. Create the following object:
// Create a method that prints the following:

//"John smith is a student in class 12"


// const student = {
//     firstName: "John",
//     lastName: "Smith",
//     class: 12,
//     getInfo: function () {
//         console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class} `);
//     }
// };
// student.getInfo();2,
const person = {
    firstName: "Bianca",
    lastName: "Richa",
    age: 33,
    job: "student",
    city: "Rio",
    status: "colapsing",
    getCurrentStatus: function () {
        console.log(`${this.firstName} ${this.lastName}, ${this.age}, is a ${this.job} from ${this.city} and she is ${ this.status}.`);
    },
    getLength: function () {
        return Object.keys(this).length;
    }
};
person.getCurrentStatus();
console.log(person.getLength());

console.log(Object.keys(person).length);


// 2. Create a person object. Include the person's first and last name, age, job, city etc. 
// Create a method to print data from the object e.g. "John Smith is a 41 year old engineer 
//living in France".


// Bonus
// Write a method to get the length of the person object.

//

const object = {
    a: 1,
    b: 2,
    c: 3
};
 for(const property in object) {
     console.log(`${property}: ${object[property]}`)
 }

 let sum = 0;
 //for...in loop
 for(const key in object) {
     sum += object[key]; //sum up the values
 }
 console.log(sum);

 //how many keys?
 let count = 0;
 for(const something in object) {
     count++;
 }
 console.log(count);

 const array = Object.keys(object);
 console.log(array);

 let string = "";
 for(const index in array) { //always go over the full object /array from beginning to the end
string += array[index];
 }
 console.log(string); //expected output

 //also for strings
for(const i in string) {
    console.log('hello ' + string.charAt(i));
}