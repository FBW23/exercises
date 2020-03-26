// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

const expNum = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        for (let num2 = 1; num2 < 6; num2++) {
            console.log(Math.pow(num1, num2))
        }
        console.log("It's a number")
    } else {
        console.log("it's not a number")
    }
}

expNum(3, 5);


// . Fruits
// Create a function named printFavoriteFruit. 
// Declare a variable outside of the function and store your favorite fruit as a value. 
// Reassign the variable within the function and print "My favorite fruit is: x".

let fruit = "mango";

function printFavoriteFruit(x) {
    fruit = x;
    console.log("My favourite fruit is " + x)
}
printFavoriteFruit("apple");


// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. 
//The second parameter defines how many times the first number should be multiplied by itself. 
//Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. 
//Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(a,b) {
     result = Math.pow(a,b);
     console.log(result);
}
exponent(5,4); // it doesnt work because result is a local variable