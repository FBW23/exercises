console.log(`:::::::::::::::::::::::::::Task 1:::::::::::::::::::::::::::::`)
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  getId: function () {
    return (`${this.firstName} ${this.lastName} is a student in class 12`);
  }
};
console.log(student.getId());
console.log(`:::::::::::::::::::::::::::Task 2:::::::::::::::::::::::::::::`)
//Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const man = {
  firstName1: "John",
  secondName: "Smith",
  age: 41,
  job: 'engineer',
  country: 'France',
  getInfo: function () {
    return (`${this.firstName1} ${this.secondName} is a ${this.age} year old ${this.job} living in ${this.country}`);

  },
  getLength: function() {
    return Object.keys(this).length;
  }
}

console.log(man.getInfo());
console.log(man.getLength());


console.log(`:::::::::::::::::::::::::::Bonus:::::::::::::::::::::::::::::`)

//Write a method to get the length of the person object.


