// Classy
// 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
console.log('=========Task 1 ==========')
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // just as showcase 
    }
    speak() {
        console.log(`${this.name} , ${this.age} years old.`);
    }
}
const mussum = new Person('Mussum', 44)

mussum.speak()
console.log('=========Task 2 ==========')
// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
        this.volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);

    }
    volum() {
        console.log(`${this.volume} `);
    }
}
const totali = new Cylinder(3, 3);

totali.volum();
console.log('=========Task 3 ==========')
// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.

// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

class Clock {
  constructor ({ template }){
    this.template = template;
}
   render  () {
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
  stop () {
    clearInterval(this.timer);
  };
  start () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
const clock = new Clock({template: 'h:m:s'});
clock.start();
setTimeout (() => clock.stop(), 3000);

// 4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
console.log('=========Task 4 ==========')
class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;

    }
}
class Channel extends TV { // subclasses
    // define our class in details
    constructor(brand, channel, volume) {

        super(brand); // calling the parent constructor with this argument
        this.channel = channel;
        this.volume = volume;
    }

   randomly(){
    return this.channel=(Math.random()* 50).toFixed(0);
    }
   caralho(){
    return this.volume=(Math.random()* 100).toFixed(0);

   }
   chaneli() {
    console.log(this.brand +' at channel '+this.randomly()+', volume '+this.caralho());
}


volIncrease (){
    for(let i= 0; i <= 100; i++){
        if (this.volume <100) {
            ++ this.volume;
        } return this.volume;
    }
}
volDecrease (){
      if (this.volume >= 0){
            -- this.volume ;
        } return this.volume;
}

resetTv (){
    console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}.`);
}}


const kiko = new Channel('Telefunken');
const chaves = new Channel('Sony');
const florinda = new Channel('Tabajara');
kiko.chaneli();
florinda.chaneli();
chaves.chaneli();
console.log('==========bonus======');


class Animal {
    constructor(name) {
        this.name = name;
        this.age = 15; // standard age predefined
        this.legs = 2;
        this.country = 'Pangea'; // just as showcase 
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
        console.log('🦖 roaaaaarrrr!!!!!');
    }
    roams() { // overwrite super method
        console.log(` ${this.name}  will eat you! 🦖`);
    }
}

const  bubba= new Tyranossaurus('Roy', 65, 6000);


console.log(bubba);
bubba.eat();
bubba.hungry();
bubba.roams();
bubba.speak();