// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.

console.log(`=======================`);
console.log(`1. Store Mark's and John's mass and height in variables.`);



let JohnHeight=1.75;
let JohnWeight=75;

let MarkHeight=1.69;
let MarkWeight=90;




console.log(`=======================`);

// 2. Calculate both their BMIs and store their BMIs in variables. 
console.log(`=======================`);

console.log(`2. Calculate both their BMIs and store their BMIs in variables. `);


let MBMI=MarkWeight/(MarkHeight*MarkHeight);
console.log('Mark BMI: ' + MBMI);
let JBMI=JohnWeight/(JohnHeight*JohnHeight);
console.log('John BMI: ' + JBMI);




console.log(`=======================`);
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
console.log(`=======================`);


console.log(` 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.`);




let comparison=JBMI>MBMI;
if (comparison===true){
    comparison=JBMI;
    console.log("John's BMI is higher");
}else{
    comparison=MBMI;
    console.log("Mark's BMI is higher");
}

console.log(`=======================`);
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log(`=======================`);
console.log(`4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). `);

console.log(`Is Mark's BMI higher then John's? Why yes, it's ${comparison}, it is`);






console.log(`=======================`);


// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
console.log(`=======================`);
console.log(`5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. `);

if (MBMI>JBMI) {
    console.log("Mark's BMI is : " + MBMI);
}else {
    console.log("John's BMI is : " + JBMI);
}


console.log(`=======================`);