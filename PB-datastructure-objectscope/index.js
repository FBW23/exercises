// 1. Create the following object: 

const student = { 
  firstName: "John", 
  lastName: "Smith", 
  class: 12,
  printsStudent: function() {
    return `${this.firstName} ${this.lastName} is a student in class ${this.class}`
  }
};

console.log(student.printsStudent());

// 2. Create a person object.

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 41,
  job: 'engineer',
  city: 'France',
  printPerson: 
   function(){  return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`},
  getLength: function(){
    return `The length of the object is ${Object.keys(this).length}`;
  }

}

console.log(person.printPerson());
// Bonus
console.log(person.getLength());