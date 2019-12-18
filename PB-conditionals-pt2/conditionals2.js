// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using 
//the formula: BMI = mass / (height * height).(mass in kg, i.e.72.5, and height in metres, 
//i.e.1.65).

// Store Mark 's and John's
// mass and height in variables.

// Calculate both their BMIs and store their BMIs in variables.

let markMass = 68;
let markHeight = 1.72; 
let markBmi = markMass / markHeight * markHeight;

let johnMass = 67;
let johnHeigth = 1.94;
let johnBmi = johnMass / johnHeigth * johnHeigth;

let higherBmi = markBmi > johnBmi; //
console.log(higherBmi);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.

// Print a string to the console containing the variable from step 3 using string interpolation.(e.g.
//     "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(`Is Mark\`s BMI higher then John\`s? Actually, it\`s ${higherBmi}!`);

// Create an
// if statement which prints the name and BMI of the person with the highest BMI.
 
if (markBmi > johnBmi) {
    console.log(`Mark\`s BMI is ${markBmi}`);
} else if
    (johnBmi > markBmi) {
        console.log(`John\`s BMI is ${johnBmi}`);
    }

