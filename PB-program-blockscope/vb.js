// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".
console.log(`===========================`);






let determiner= -5;



if (determiner>=0){
    let x='More than 0';
    // console.log(x);
}else{
    let x='Less than 0';
    // console.log(x);
}







console.log(`===========================`);
// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
console.log(`===========================`);




if (determiner>=0){
    let updater='Greater or equal to 0';
    let message='Positive Integer';
    console.log(message);
}else{
    let updater='Less than 0';

}





console.log(`===========================`);

// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.
console.log(`===========================`);

//We use ternary when the outcome is a boolean( yes/no;true/false).
//example:  let age=5;
//age > 5 ? true:false;


//We use IF when we can have more than 2 outcomes, or we need the program to execute more than 2 lines of command depending on the result.
//Eg.  age = 5;

//if ( age <1 && age >0){
   // let person='smallchild';  //command1
   // console.log(person); //command2
//} else {
   // let person='notbaby'; //command1
  //  console.log(person); //command2
//}


console.log(`===========================`);