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
    constructor(radio, heigth) {
        this.radio = radio;
        this.heigth = heigth;
    }

    volume () {
        let calc = (Math.PI * Math.pow(this.radio, 2))*this.heigth;
        console.log(calc.toFixed(4));
    }
}

const volumeOfaCylinder = new Cylinder (2, 2);
volumeOfaCylinder.volume();

/*#### 4. TV Class
* Create a TV class with properties like brand, channel and volume.
* Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
* Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
* Add a method to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method to reset TV so it goes back to channel 1 and volume 50. 
* It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".*/

class Tv {
    constructor (brand, channel, volume){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    volMesure (){
        
    }
}