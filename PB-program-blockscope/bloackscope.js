// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 

let determiner = 5;


//     - If determiner is less than 0, `x`'s value should be "Less than 0"



if (determiner < 0) {
    var x = "Less than 0";
    console.log(x);
}
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
if (determiner >= 0) {
    var x = "Greater or equal to 0";
    console.log(x);
}
console.log(x);




// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.

//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 

if (determiner >= 0) {
    var message = "positive integer";
    var updater = "Greater or equal to 0";
    console.log(message);

} else {
    updater = "Less than 0";
}
console.log(updater);
console.log(message);

//     - If determiner is less than 0, `updater`'s value should be "Less than 0".



// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

console.log("when the determiner is positive, the message will have a value");


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

let car = 'renault' ? true : false;
console.log(car);