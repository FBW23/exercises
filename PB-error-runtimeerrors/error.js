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
                throw new Error('Invalid Month Number!');
        };
    } catch (e) {
        return console.error(e);
    }
};
console.log(getMonthName(15));

// #### 3. Reverse 
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. 

// * Example 
// * reverseString(2019) -> `ERROR! This is not a string!`
console.log('----------------------3. Reverse');

const reverseString = string => {
    try {
        if (string === '') {
            return string.reverse();
        } else {
            return new Error('ERROR! This is not a string!');
        }
    } catch (e){
        return console.error(e);
    }
};
console.log(reverseString(2019));


// #### 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Someone wrote the following code: 
// * Why doesn't the code work? 
// * Fix the code (or restart) to solve the problem.
console.log('----------------------4. Comparing Arrays');

function compareArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}



console.log(compareArrays([1, 2], [1, 3])); // ➞ false
console.log(compareArrays([1, 2], [1, 2])); // ➞ true
console.log(compareArrays([4, 5, 6], [4, 5, 6])); // ➞ true
console.log(compareArrays([4, 7, 6], [4, 5, 6])); // ➞ false
