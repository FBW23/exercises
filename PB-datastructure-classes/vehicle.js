class Vehicle {
    constructor(brand, price, type) {
        this.brand = brand;
        this.price = price;
        this.type = type;
    }

    describe() {
        return `this ${this.brand} ${this.type} costs around ${this.price}`
    }
}

class Truck extends Vehicle {
    constructor(brand, price, type, weight) {
        super(...arguments);
        this.weight = weight;
    }
    
    load() {
        return `${this.brand} ${this.type} is currently loading!`;

    }
}

class Motorcycle extends Vehicle {
    constructor(brand, price, type, speedLimit) {
        super(...arguments);
        this.speedLimit = speedLimit;
    };

    accelerate() {
        return `${this.brand} ${this.type} can to up to ${this.speedLimit} kmh`;
    }
}

class Car extends Vehicle {
    constructor(brand, price, type, horsePower) {
        super(...arguments);
        this.horsePower = horsePower;
    }

    drive() {
        return `${this.brand} ${this.type} has around ${this.horsePower} PS`;
    }
}

const tobi = new Truck('Iveco', 10000, 'Massif', 7);
console.log(tobi.load());
