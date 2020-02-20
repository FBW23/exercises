<<<<<<< HEAD
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; // standard age predefined
        
    }

    describe () {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

const john = new Person ("John", 19);
john.describe();

class Cylinder {
    constructor(r, h) {
        this.r = r;
        this.h = h;
    }

    volume () {
        let calc = (3.14 * Math.pow(this.r, 2))*this.h;
        console.log(calc.toFixed(4));
    }
}

const volumeOfaCylinder = new Cylinder (2, 2);
volumeOfaCylinder.volume();


//3

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
  setTimeout (() => clock.stop(), 5000);
  

/*#### 4. TV Class
* Create a TV class with properties like brand, channel and volume.
* Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
* Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
* Add a method to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method to reset TV so it goes back to channel 1 and volume 50. 
* It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".*/

class Tv {
    constructor (brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        
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
    
    setChannel (){
        return Math.florr(Math.random () *49) + 1;
       
    }
    resetTv (){
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}.`);
    }
}


const myTv = new Tv ("Sony");
myTv.resetTv();
myTv.setChannel();
console.log(myTv.volIncrease());
console.log(myTv.volDecrease());
console.log(myTv.volIncrease());
console.log(myTv.volIncrease());
console.log(myTv.volIncrease());
console.log(myTv.volIncrease());
console.log(myTv.volDecrease());
console.log(myTv.volDecrease());
console.log(myTv.volDecrease());
console.log(myTv.volDecrease());
console.log(myTv.volDecrease());

=======
let number = 0;

while (number !== 50) {
    number = Math.floor(Math.random() * 49) + 1;
    console.log(number);
}
console.log(50);
>>>>>>> 482ed7ccc5d50440df01f0ac4483b0cdcdf24e55
