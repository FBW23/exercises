// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. 
// The `Person` class should have a method called describe which returns a string with 
// the following syntax: "name, age years old". So, for example, if John is 19 years old, 
// then the function describe of his object will return "John, 19 years old".
console.log('----------------------1. Person Class');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`${this.name}, ${this.age} years old.`);
  }
}
const otherPerson = new Person('Julien', 39);
otherPerson.describe();

// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.
console.log('----------------------2. Volume');
class Volume {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let calc = Math.PI * (Math.pow(this.radius, 2)) * this.height;
    return calc.toFixed(4);
  }
}
const newCylinder = new Volume(8, 15);
console.log(newCylinder.getVolume());

// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 
// ```javascript
console.log('----------------------3. Tick Tock');










// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
console.log('----------------------4. TV Class');

class TV {
  constructor(){
    this.brand = 'Kool Brand';
    this.channel = 1;
    this.volume = 50;
  }
  plusVolume() {
    if(this.volume < 100) {
      this.volume = this.volume+1;
      return this.volume;
    } 
  }
  minusVolume() {
    if(this.volume >= 0) {
      this.volume = this.volume-1;
      return this.volume;
    } 
  }
  getChannel() {
    return Math.floor(Math.random() * 49) +1;
  }
  reset() {
    this.channel = 1;
    this.volume = 50;
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
  }
}

let newChannel = new TV();
console.log('Channel: ' + newChannel.getChannel());
console.log('Volume: ' + newChannel.plusVolume());
console.log(newChannel.reset());



