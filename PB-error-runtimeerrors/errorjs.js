// 1

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} says woof`);
    }
}

//Dog.bark = function() {
//console.log(`${this.name} says woof`);
//};

let fido = new Dog("fido");
fido.bark();

//2
getMonthName = (number) => {
        switch (number) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("April");
                break;
            case 4:
                console.log("May");
                break;
            case 5:
                console.log("June");
                break;
            case 6:
                console.log("July");
                break;
            case 7:
                console.log("August");
                break;
            case 8:
                console.log("September");
                break;
            case 10:
                console.log("October");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
            default:
                const notAvalidMonth = new Error("This month does not exist");
                try {
                    if (number > 0 && number < 13) {
                        console.log(getMonthName(number));
                    } else {
                        throw `${notAvalidMonth}`;
                    }
                } catch (e) {
                    console.log(e)
                }
        }
    };

    getMonthName(109);

    //3

const reverseString = (s)