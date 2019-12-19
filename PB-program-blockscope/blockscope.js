// 1. Updater
// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".
let determiner = -10;

if (determiner < 0) {
    let x = "Less than 0";
    console.log(x);
} else {
    let x = "Greater or equal to 0"; 
    console.log(x);
}

// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

let updater = "blablabla"

if (determiner >= 0) {
    let updater = "Greater or equal to 0";
    var message = "Positive integer";
    
} else {
    let updater = "Less than 0";
    console.log(updater); 
}
console.log(message); // it works because it's a global variable


// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.
// Ternaries are used to simple cases of true or false. if statement are used to solve a block of conditions.