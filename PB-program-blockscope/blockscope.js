// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".
let determiner = 33;

if (determiner >= 0) {
    x = `Greater or equal to 0`
} else {
    x = `Less than 0`;
}

// New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

let updaters = `Greater of equal to 0`;
let message = "Positive Integer";
if (determiner >= 0) {
   
    console.log(updaters)
    console.log(message);
} else {
    updaters = `Less than 0`;
    console.log(updaters);
}
console.log(message);
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// it prints  the same way