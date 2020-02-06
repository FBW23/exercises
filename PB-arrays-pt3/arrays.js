// One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

//Examples:

function unique(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray.indexOf(myArray[i]) === myArray.lastIndexOf(myArray[i])) {
            return myArray[i];
        }
    }
}


console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));