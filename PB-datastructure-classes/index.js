class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name}, ${this.age} years old`
    }
}

const newGuy = new Person("al logie", 32);
console.log(newGuy.describe());

//////////////////////////////

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
        return `volume of the cylinder is ${this.calcVolume()}`;
    }
}

const myCylo = new Cylinder(4,5);
console.log(myCylo.describe());

//////////////////////////////

class Clock {
    constructor({ template }) {
        this.timer;
        this.template = template;
    };

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
    };

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };
}

let myClock = new Clock({template: 'h:m:s'});
myClock.start();
setTimeout(() => myClock.stop(), 10000);

//////////////////////////////

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    };

    increaseVol() {
        if (this.volume < 100) this.volume = this.volume + 1;
    };

    decreaseVol() {
        if (this.volume > 0) this.volume = this.volume - 1;
    };

    goRndChannel() {
        this.channel = Math.floor(Math.random() * 49) + 1;
    };

    resetTV() {
        this.volume = 50;
        this.channel = 1;
    };

    getInfo() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    };
}

let myTV = new TV('Syronix');
myTV.goRndChannel();
myTV.increaseVol();
console.log(myTV.getInfo());