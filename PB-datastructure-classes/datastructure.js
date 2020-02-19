console.log(`:::::::::::::::::::::::: Task:1 :::::::::::::::::::::::::::::::`)
//Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".


//Rewrite the following code to use the "class" syntax. 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return this.getInfo();
    }
    // Method
    getInfo() {
        return `${this.name}, ${this.age} years old`;

    }
}

const amar = new Person("Amar", 5);
console.log(amar.describe());
console.log(`:::::::::::::::::::::::: Task:2 :::::::::::::::::::::::::::::::`)
//Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 
class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    getVolume() {
        return (Math.PI * this.radius * 2 * this.height).toFixed(4);
    }
}

const cylinder = new Cylinder(2, 8);
console.log(cylinder.getVolume());
console.log(`:::::::::::::::::::::::: Task:3 :::::::::::::::::::::::::::::::`)

class Clock {
    constructor({
        template
    }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({
    template: 'h:m:s'
});
clock.start();
setTimeout(() => clock.stop(), 10000);

console.log(`:::::::::::::::::::::::: Task:4 :::::::::::::::::::::::::::::::`)

class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    increaseVolume() {
        if (this.volume > 100);
        return (this.volume = this.volume + 1);
    }
    decreaseVolume() {
        if (this.volume <= 0);
        return (this.volume = this.volume - 1);
    }
    setChannel() {
        this.channel = Math.floor(Math.random() * 49) + 1;
    }
    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}
const myTv = new TV("Panasonic");
myTv.increaseVolume();
myTv.decreaseVolume();
myTv.setChannel();
console.log(myTv.status());