// Person Class
// Create a class called Person which accepts the name of a person as a string, 
// and his/her age as a number. The Person class should have a method called describe 
// which returns a string with the following syntax: "name, age years old". So, for example,
//  if John is 19 years old, 
// then the function describe of his object will return "John, 19 years old".

class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    //getter
    get describe (){
        return this.personInfo();
    }
    //Method
    personInfo (){
        return `${this.name}, ${this.age} years old`
    }
};
const superHero = new Person ('John', 19);
console.log(superHero.describe);

console.log("...........................................");

// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.


class Cylinder {
    constructor(diameter,height) {
        this.diameter=diameter;
        this.height=height;
    }
   volume (){
      return (Math.PI**this.diameter*this.height).toFixed(4);
  }
}
const cylinderVolume= new Cylinder (2,4);
console.log(cylinderVolume.volume());

console.log(".................................................");

// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

  class Clock {
       template }  {
  
    let timer;
  
     render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();