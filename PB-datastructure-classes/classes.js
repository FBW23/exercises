console.log('#### 1. Person Class');
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(this.name + ',', this.age, 'years old.');
    }
}

const john = new Person('John', 19);
john.describe();

console.log('#### 2. Volume');
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

class Volume {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    calculation() {
        let resultFirstStep = Math.pow(this.radius, 2) * this.height;
        let resultSecondStep = Math.PI * resultFirstStep;
        return resultSecondStep.toFixed(4);
    }
}
// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

const cylinder = new Volume(8, 15);
console.log(cylinder.calculation());