// # Programming Basics: Conditionals Part 2

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// 1. Store Mark's and John's mass and height in variables.
let markMass = 70 ;
let marHeight = 1.70;
let bImMa = markMass/(marHeight*marHeight);

let johMass = 80 ;
let johHeight = 1.60;
let bImJo = johHeight/(johHeight*johHeight);

// 2. Calculate both their BMIs and store their BMIs in variables. 
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let bigger = bImMa > bImJo;

console.log(bigger) ? true : false;



// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log(bigger) ? true : false;
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${bigger}, it is`) 

// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 
if (bImJo > bImMa){
    console.log(`Mark ${bImMa}`);
} else{
   
        console.log(`John ${bImJo}`);  
    }
