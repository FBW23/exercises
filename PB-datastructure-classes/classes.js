class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //getter
    get describe() {
        return this.personInfo();
    }
    //Method 
    personInfo() {
        return `${this.name}, ${this.age} years old`
    }

}
const superHero = new Person('John', 19);
console.log(superHero.describe);
console.log(superHero.personInfo());
console.log(`---------------------ex2--------------------`);
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    //
    volume() {
        return (Math.PI ** this.radius * this.height).toFixed(4);
    }
}
const cylinderVolume = new Cylinder(1, 3);
console.log(cylinderVolume.volume());
console.log(`-----------------------ex3---------------------------------`);


class Clock {
    constructor({ rolex }) {
      this.rolex = rolex;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.rolex
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(),1000);
    }
  }
  
  
  let clock = new Clock({rolex: 'h:m:s'});
  clock.start();