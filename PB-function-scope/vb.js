// Function Scope
// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

myFunction = (x, y) => {
    let typeX = (typeof x);

    let typeY = (typeof y);


    if (("number" === typeX) && ("number" === typeY)) {

        for (y = 1; y <= 5; y++) {

            let output = Math.pow(x, y);
            console.log(output);
        }
    }

}
myFunction(3, 5);





myFunction2 = (x, y) => {
    let typeX = (typeof x);

    let typeY = (typeof y);


    if (("number" === typeX) && ("number" === typeY)) {

        for (y = 1; y <= 8; y++) {

            let output = Math.pow(x, y)
            console.log(output);
        }
    }

}
myFunction2(2, 8);





// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".


const myFunction3 = () => {
    myVariable='ananas';
    console.log(`My favourite fruis is: ${myVariable}`);
    
}
let myVariable = `banana`;
console.log(myVariable);
myFunction3();




// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

const exponent = (par1,par2) => {
let result=Math.pow(par1,par2);
console.log(result);
}

exponent(3,5);

//console.log(result); //Can not be accessed outside of the function, as it had not been declaired before the function.

