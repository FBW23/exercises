/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name}, ${this.age} years old`
    }

}

const Aghy = new Person("allogie", 32);
console.log(Aghy.describe());

//////////////////////////////////////////////////////////

class Cylinder{
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calcVolume() {
        const vol = Math.PI * Math.pow(this.radius,2) * this.height;
        return vol.toFixed(4);
    }

    describe() {
        return `volume of the cylinder is ${this.calcVolume()}`
    }
}

const Cylo1 = new Cylinder(4,5);
console.log(Cylo1.describe());

//////////////////////////////////////////////////

class Clock {
    constructor(template) {
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

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);

    }

    stop() {
        clearInterval(timer);
    };

    start() {
        this.render();
        timer = setInterval(render, 1000);
    };
}

const template = {
    template: 'h:m:s'
}

const myClock = new Clock(template);
console.log(myClock.start());
*/

class TV {
    constructor(brand, channel=1, volume=50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    increaseVol() {
        if (this.volume >= 100) return;
        this.volume = this.volume + 5;
    }
    
    decreaseVol() {
        if (this.volume <= 0) return;
        this.volume = this.volume - 5;
    }

    goRndChannel() {
        this.channel = Math.random();
    }

    resetTV() {
        this.volume = 50;
        this.channel = 1;
    }

    getInfo() {
        return ``
    }

}