// 1. Check if a number is within a given range. Write a program that checks if 
//a number is within the range of an object's min and max properties. 
//Assume min <= max is always true.
//martina's solution
console.log("===task1===");
const withinAGivenRange = (number, objectMinMax) => {
    // let isWithin = false; // boolean 
    //     if (number >= objectMinMax.min && number <= objectMinMax.max) {
    //         isWithin = true;
    //     }
    // return isWithin;
    return (number >= objectMinMax.min && number <= objectMinMax.max);
};
const shortest = (number, objectMinMax) => (number >= objectMinMax.min && number <= objectMinMax.max);
console.log(shortest(4, {
    min: 0,
    max: 5
})); // true
console.log(shortest(4, {
    min: 4,
    max: 5
})); // true
console.log(shortest(4, {
    min: 6,
    max: 10
})); // false
console.log(shortest(5, {
    min: 5,
    max: 5
})); // edge case

///====================================================================

// 2. Scrabble.Write a program that, given an array of scrabble tiles,
// counts the maximum score that a player can earn from the tiles in their hand.
// const scrable = (array) => {
//      let sum = 0;
// for(let i = 0; i < (array.score).length; i+)


    Example: 
    [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}]

// The player 's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

//============================================================================

// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
console.log("===task3===");
const isEmpty = (object) => {
    
    if(Object.keys(object).length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty({}));




//4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. 
//Return an object with key pair values of letters and the number of occurrences for each letter.
console.log("===task4===");

const countLetters = (string) => {
    let objLetter = {};
    for(let i = 0; i < string.length; i++){
       let current = string[i]; 
     if(objLetter[current]) {
        objLetter[current] += 1; 
     } else {
        objLetter[current] = 1; 
     }
       console.log(objLetter);
    }
    return;
}



console.log(countLetters("tree"));

//countLetters("tree") ➞ {t: 1, r: 1, e: 2}
//==================================================================================

// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. 
// An order gets free shipping if the total cost of items exceeds €50.


// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false