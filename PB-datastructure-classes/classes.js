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
        return resultSecondStep.toFixed();
    }
}
// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

const cylinder = new Volume(8, 15);
console.log(cylinder.calculation());

console.log('#### 3. Tick Tock');
// Rewrite the following code to use the "class" syntax. 

class Clock {
    constructor({ template }) {
        this.timer;
        this.template = template;
    }
    render = function() {
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
    stop = function() {
        clearInterval(this.timer);
    };
    start = function() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };
}
let myC = new Clock({template: 'h:m:s'});
myC.start();
setTimeout(() => myC.stop(), 10000);

let clock = new Clock({
    template: 'h:m:s'
});
clock.start();

console.log('#### 4. TV Class');
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class Television {
    constructor() {
        this.brand = 'Brand Onwalsh 90210';
        this.channel = 1;
        this.volume = 50;
    }
    volumeSetPlus() {
        if (this.volume < 100) this.volume = this.volume + 1;
        return this.volume;
    }
    volumeSetMinus() {
        if (this.volume >= 0) this.volume = this.volume - 1;
        return this.volume;
    }
    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
    setChannel() {
        return this.channel = Math.floor((Math.random() * 50) + 1); // return a random number between 1 and 50
    }
    resetTV() {
        this.channel = 1;
        this.volume = 50;
        return `${this.brand} is back at channel ${this.channel}, and back at volume ${this.volume}`;
    }
}

const tvBrand = new Television();
console.log(tvBrand);
console.log('random channel ->', tvBrand.setChannel());
console.log('raise volume ->', tvBrand.volumeSetPlus());
console.log('lower volume ->', tvBrand.volumeSetMinus());
console.log('tv status ->', tvBrand.status());
console.log('tv reset ->', tvBrand.resetTV())