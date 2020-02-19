// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
console.log(`================================1================================`);
console.log(``);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name},${this.age} years old.`;
    }
}

const john = new Person("John", 19);


console.log(john.describe());


console.log(``);
console.log(`=================================================================`);
// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class. 

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.
console.log(`================================2================================`);
console.log(``);
class cylinder {
    constructor(r, h) {
        this.r = r;
        this.h = h;


    }
    volume() {
        return (Math.PI * Math.pow(this.r, 2) * this.h).toFixed(4);
    }
}

const henger = new cylinder(5, 25);

console.log(henger);

console.log(`The volume of henger is ${Math.PI.toFixed(2)}*${henger.r}*${henger.r}*${henger.h} = ${henger.volume()}`)
console.log(``);
console.log(`=================================================================`);
// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 

//   function Clock({ template }) {

//     let timer;

//     function render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }

//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();

console.log(`================================3================================`);
console.log(``);
/* class tikTok {
    constructor(date, hours, mins, secs) {
        this.date = date;
        this.hours = hours;
        this.mins = mins;
        this.secs = secs;
    }
    render() {
        if (this.hours < 10) this.hours = '0' + this.hours;

        if (this.mins < 10) this.mins = '0' + this.mins;


        if (this.secs < 10) this.secs = '0' + this.secs;

        let output = timer
            .replace('h', this.hours)
            .replace('m', this.mins)
            .replace('s', this.secs);

        console.log(output);
    } */

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }

//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();
// }

// }


/* const timer = new tikTok(new Date(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

console.log(timer.render())

console.log(timer)  */
console.log(``);
console.log(`=================================================================`);
// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. 
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
console.log(`================================4================================`);
console.log(``);
class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
}

console.log(``);
console.log(`=================================================================`);