console.log();
console.log(`1. Store Mark's and John's mass and height in variables and calculate both their BMIs and store their BMIs in variables.`);
// MARK
let name1 = 'Mark';
let markMass = 78;
let markHeight = 1.82;
// JOHN
let name2 = 'John';
let johnMass = 90;
let johnHeight = 1.90;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log('Mark\'s BMI equals to', markBMI.toFixed(1), 'while John\'s BMI equals to', johnBMI.toFixed(1));
console.log();
console.log(`3. Create a boolean variable containing information about whether Mark has a higher BMI than John.`);
console.log();
if (markBMI.toFixed(1) > johnBMI.toFixed(1)) {
    console.log("Is Mark's BMI higher than John's? Why yes, it's", true, "it is.");
} else {
    console.log("Is Mark's BMI higher than John's? Why no, it's", false + ", it is not.");
}

console.log();
console.log("5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.");
console.log();
if (markBMI.toFixed(1) > johnBMI.toFixed(1)) {
    console.log(`The person with the highest BMI is ${name1}, with the BMI of: ${markBMI.toFixed(1)}`);
} else {
    console.log(`The person with the highest BMI is ${name2}, with the BMI of: ${johnBMI.toFixed(1)}`);
}
console.log();