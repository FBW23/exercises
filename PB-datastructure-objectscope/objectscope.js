// # Scope

// **Instructions**
// 1. Create the following object: 
// ```javascript
// const student = { 
// firstName: "John", 
// lastName: "Smith", 
// class: 12 };
// ```

// * Create a method that prints the following: 
// ```javascript
// "John smith is a student in class 12"
// ```
const student = {
    firstName: "John ", 
    lastName: "Smith ", 
    class: 12,
    getInformation: function() {
        return this.firstName + this.lastName + 'is a student in class ' + this.class;
    }
};


console.log(student.getInformation());

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print 
// data from the object e.g. "John Smith is a 41 year old engineer living in France".

const personObject = {
    nameFirst: "Edgar ",
    nameLast: "DelEst",
    agePerson: 42,
    job: "train driver",
    city: "Paris",
    getToKnow: function() {
        return this.nameFirst + this.nameLast + ' is a ' + this.agePerson + ' year old ' + this.job + ' living in ' + this.city;
    }
};
console.log(personObject.getToKnow());


// ## Bonus

// 3. Write a method to get the length of the person object.
