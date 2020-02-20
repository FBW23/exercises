// #### 1. Fido says...
// * In the following code, we want fido to bark. Instead, we get an error. Why?
// * Edit the code to make fido bark. 
console.log('----------------------1. Fido says...');

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
        console.log(`${this.name} says woof`);
    }
}

let fido = new Dog("fido");
fido.bark();

// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). 
// Throw an error if a user inputs an invalid number as an argument. 
// * Example 
// * getMonthName(15) -> `Invalid Month Number!`
console.log('----------------------2. Month Name');

const getMonthName = num => {
    try {
        switch (num) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                throw new Error();
        }
    } catch (e) {
        return 'Invalid Month Number!';
    }

};
console.log(getMonthName(15));