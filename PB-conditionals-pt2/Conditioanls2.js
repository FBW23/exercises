// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.
let name = "Mark";
let weight = 73;
let height = 180;
const finalBmi = weight/(height/100*height/100);


let name1= "John";
let weight1 = 80;
let height1 = 190;
const final1Bmi = weight1/(height1/100*height1/100);

console.log(finalBmi, final1Bmi);

const markHigherBMI = finalBmi > final1Bmi;{}

console.log(`${markHigherBMI} Is Mark's BMI higher than John's?`);
// 2. Calculate both their BMIs and store their BMIs in variables. 

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
