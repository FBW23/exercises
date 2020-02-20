class Animal {
    constructor(name, smell) {
        this.name = name;
        this.smell = smell;
    }

    speak() {
        return `${this.name} is trying to say something, and it smells so ${this.smell}`;
    }
}

class FavoriteAnimal extends Animal {
    constructor(name, smell) {
        super(name, smell);
    }

    look() {
        return `${this.name} looks very delicious!!`
    }
}

const KFC = new FavoriteAnimal('freid-chicken', 'heavenly');
console.log(KFC.speak());
console.log(KFC.look());

