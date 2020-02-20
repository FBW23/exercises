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

const reverseString = (string) => {
    const notValidString = "This is not a string!";
    try {
        if (typeof(string) === "String") {

            console.log(string.split("").reverse().join(""));
        } else {
            throw `${notValidString}`;
        }
    } catch(e) {
        console.log(e);
    }

};

reverseString("julia");

//4

function compareArrays(arr1, arr2) {
        if (arr1.sort().toString() === arr2.sort().toString()) {
            return true
        } else {
            return false
        }
    };

  console.log(compareArrays([1], [2]));

  // 5

