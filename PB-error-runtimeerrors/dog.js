class Dog {
    constructor(name) {
        this.name = name;
    }

    bark () {
        console.log(`${this.name} says woof`);
    }
}

let fido = new Dog("fido");
fido.bark();

/* Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.

Example
getMonthName(15) -> Invalid Month Number!*/

function getMonthName(month) {
    try {
        if (1 > month || month > 12) {
            throw new Error('Invalid Month Number!');
        }
    } catch (error) {
        console.error(error);
    }
}

getMonthName(13);
getMonthName(0);

/**Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

Example
reverseString(2019) -> ERROR! This is not a string! */

function reverseString(string) {
    try {
        if (typeof (string) !== 'string') {
            throw new Error('ERROR! This is not a string!');
        }
    } catch (error) {
        console.error(error);
    }
}
reverseString(2019);

function compareArrays(arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return console.log(true);
    }
    return console.log(false);
}
compareArrays([1, 2], [1, 3]); // ➞ false
compareArrays([1, 2], [1, 2]); // ➞ true
compareArrays([4, 5, 6], [4, 5, 6]); // ➞ true
compareArrays([4, 7, 6], [4, 5, 6]); // ➞ false

function sum(array) {
    if (array.length > 0) {
        let result = array.pop() + sum(array);
        return result;
    }
    return 0;
}

console.log(sum([1, 2, 3]));