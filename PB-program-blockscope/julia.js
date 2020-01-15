// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
    let determiner = 50;
    let x = (determiner < 0) ? 'Less than zero' : 'Greater or equal to zero';
    let updater = 69;

    if (determiner<0){
        console.log('Less than zero');

    }else {
        console.log('Greater or equal to zero');

    }

// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater or equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".
if (determiner>=0){
    updater = 'Gr8r or equal to zero';
    let message = 'Positive Integer';
    console.log(message);

}else {
    console.log('Less than zero');

}

console.log(message); // displayable outside of block only through "var"

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

// A ternary is used when we create a variable, and this var depends on a condition.