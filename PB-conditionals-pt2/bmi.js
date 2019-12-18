// Store Mark's and John's mass and height in variables.
let hmark = 90;
let hjohn = 75;
let heightm = 1.56;
let heightj = 2.00;
// Calculate both their BMIs and store their BMIs in variables.
let chubby = hmark / (heightm * heightm).toFixed(1);
console.log(chubby);

let slim = hjohn / (heightj * heightj);
console.log(slim);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.
if (chubby >= slim); {
    console.log("Mark");
} if(slim >= chubby) {
    console.log("John");
};
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log("Is Mark's BMI higher than John's? Why yes, it's" +' '+(chubby)+ ",it is");
// Create an if statement which prints the name and BMI of the person with the highest BMI.

if (chubby>slim )
{console.log("Mark");}
if(slim>chubby)
{console.log("john");}

if (chubby>slim )
{console.log( 'Mark'+" "+chubby);}
if(slim>chubby)
{console.log(slim+" "+"john");}


