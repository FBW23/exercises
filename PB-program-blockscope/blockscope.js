// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".


let determiner = 10;

if (determiner < 0) {
    let x = 'Less than 0';
} else (determiner >= 0)
{
    let x = 'Greater or equal to 0';

}



// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

let updater = -4;
if (determiner >= 0) {
    updater = 'Greater or equal to 0';
    let message = 'Positive Integer';
    console.log(message);
}

else {

    updater = 'Less than 0';
}
//console.log(message); is not defined - outside of block 

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

// function mediumUserCost(isMember) {
//     return (isMember ? '$5.00 / Month' : 'Free');
//   }

//   console.log(mediumUserCost(true));

let partyToday = 'forFree' ? '10Euro for Party' : 'its Free';
console.log(partyToday);
let mustang = 300000 ? 'cheaper' : 'expensive'
console.log(mustang);