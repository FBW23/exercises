class Animal {
    constructor(name) {
        this.name = name;
        this.age = 15; // standard age predefined
        this.legs = 4;
        this.country = 'Turkish'; // just as showcase 
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Tyranossaurus extends Animal { // subclasses
    // define our class in details
    constructor(name, age, weight) {
        //this.name = name;
        super(name); // calling the parent constructor with this argument
        this.age = age;
        this.weight = weight;
    }

    // Prototype Methods
    eat() {
        console.log('Roar!');
    }
    hungry() {
        console.log('More Roar!');
    }
    roams() { // overwrite super method
        console.log(`${this.name} will eat you!`);
    }
}

const  bubba= new Tyranossaurus('Roy', 65, 6000);


console.log(bubba);
console.log(typeof (Cat));

bubba.eat();
bubba.hungry();
bubba.roams();

// const tosun = new Cat('Tosun', 13, 6);
// console.log(tosun.name); // 6
// console.log(fatma.name); // 4

// console.log('Which cat weighs more? ');
// console.log(tosun.weight > fatma.weight ? 'Tosun younger but bigger': 'Fatma older and bigger');
