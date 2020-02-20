console.log('#### 1. Fido says...');
// * In the following code, we want fido to bark. Instead, we get an error. Why?

// ``` javascript 
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} says woof.`);
    }
}

debugger;

let fido = new Dog("fido");
fido.bark();
// ```
// * Edit the code to make fido bark. 

console.log('#### 2. Month Name');
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument. 
// * Example 

let getMonthName = (monthNumber) => {
    switch (monthNumber) {
        case 1:
            return 'january';
            break;
        case 2:
            return 'february';
            break;
        case 3:
            return 'march';
            break;
        case 4:
            return 'april';
        case 5:
            return 'may';
        case 6:
            return 'june';
        case 7:
            return 'july';
        case 8:
            return 'august';
        case 9:
            return 'september';
        case 10:
            return 'october';
        case 11:
            return 'november';
        case 12:
            return 'december';
        default:
            return 'ERROR: this is no valid input.';
    }
}

console.log(getMonthName(15));
// -> `Invalid Month Number!`

console.log('#### 3. Reverse');
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. 

// * Example 

const reverseString = string => {
    if (typeof string !== 'string') {
        return `ERROR: This is not a string!`;
    }
    return `${string} -> it is a string`;
};

// const reverseString = string => {
//     if (typeof string !== 'string') {
//         return `ERROR! This is not a string!`;
//     }
//     return `${string} -> it is a string`;
// };


console.log(reverseString(2019));
// -> `ERROR! This is not a string!`