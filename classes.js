class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //Getter
    get area() {
        return this.calcArea();
    }

    //Methods
    calcArea() {
        return this.height * this.width;
    }
}

const myRect = new Rectangle(3,6);

console.log(myRect2.width);
 const myRect2 = new Rectangle(5,5)
