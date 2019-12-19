// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let a = 50;
let b = 49;

// Easier solution
if ((50 <= a) && (a <= 99)) {
    console.log(true);
}
if ((50 <= b) && (b <= 99)) {
    console.log(true);
}
console.log(false);


// Harder solution 
if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let firstName = 'Martina';
let age = 35;
let outputString = `${firstName} is a `;
if (age < 13) {
    // console.log(firstName + ' is a child');
    outputString += 'child';
} else {
    if (age >= 13 && age < 20) {
        outputString += 'teenager';
    } else {
        if (age >= 20 && age < 30) {
            outputString += 'young adult';
        } else {
            outputString += 'adult';
        }
    }
}
console.log(outputString);