<<<<<<< HEAD
// 1. Person Class
console.log("==== 1.Person Class ====");
// Create a class called Person which accepts the name of a 
//person as a string, and his/her age as a number. 
//The Person class should have a method called describe which 
//returns a string with the following syntax: "name, age years 
//old". So, for example, if John is 19 years old, then the
// function describe of his object will return "John, 19 years old"

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name}, ${this.age} years old.`
  }
}

const plamen = new Person("Plamen", 30);
console.log(plamen);

console.log(plamen.describe());

// 2. Volume
console.log("==== 2.Volume ====");
// Write a JavaScript program to get the volume of a
// cylinder with four decimal places using a class.

class Cylinder {

  constructor(r, h) {
    this.r = r;
    this.h = h;
  }

  volume() {
    let v;
    let pi = Math.PI;

    v = pi * (Math.pow(this.r, 2) * this.h);
    return v.toFixed(4);
  }
}

const cylinder1 = new Cylinder(2, 2);

console.log(cylinder1);
console.log(cylinder1.volume())

// 3. Tick Tock
console.log("==== 3. Tick Tock ====");

class Clock {
  constructor({
    template,
    timer
  }) {
    this.timer = timer;
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
    this.template = clearInterval(this.timer)
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({
  template: 'h:m:s'
});
clock.stop();

//4. TV Class
console.log("==== 4. TV Class ====");



class TV {

  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }

  increase() {
      return `Volume: ${this.volume = 100}%`
 }

  decrease() {
    return `Volume: ${this.volume = 0}%`

  }
}


let newTv = new TV("LG");
console.log(newTv);
console.log(newTv.increase());
console.log(newTv.decrease());
=======
let number = 0;

while (number !== 50) {
    number = Math.floor(Math.random() * 49) + 1;
    console.log(number);
}
console.log(50);
>>>>>>> 482ed7ccc5d50440df01f0ac4483b0cdcdf24e55
