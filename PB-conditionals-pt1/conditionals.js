// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 
//(this includes both 50 and 99). Print true if either of them are in the range.

let x = 55;
let y = 250;


if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99)) {
    console.log(true);
}
else {
    console.log(false);
}






// 2. Check if three given integer values are in the range 50 to 99 
//(inclusive). Print true if one or more of them are in the range.

let z = 102;

if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99) || (z >= 50 && z <= 99)) {
    console.log(true);
}
else {
    console.log(false);
}


// 3. Declare the variables a, b and c, and give them number values. 
//Check which one out of the three variables has the largest value and print it to the console.
// Then change the values of the variables to see if your conditional still works. 
let first = 1,
    second = 2,
    third = 3;
if
    ((first > second) && (first > third)) {
    console.log(first);
} else if (second > first && second > third) {
    console.log(second);
} else (third > first && third < second)
{
    console.log(third);
}


// 4. Create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then print the original string.

let firstWord = 'grizman';
let secondWord = 'Py';
let combined = secondWord + firstWord
if (combined.includes(secondWord)) {
    console.log(firstWord);
}


// 5. Calculate the sum of the two integers. If the sum is
// in the range 50 to 80, print 65, otherwise print 80. 


// let xxx = 8;
// let yyy = 8;

// 6. Check whether the sum of two integers is 8, or whether their 
//difference is 8. If one of these is the case, print true.
let xxx, yyy;
if ((xxx + yyy) === 8 || ((xxx - yyy) === 8)) {
    console.log(true);
}


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
let unul = 7;
let doi = 8;

if (unul === 15 || doi === 15 || unul + doi === 15) {

    console.log(true);

}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if (x % 7 || x % 11 || y % 7 || y % 11) {
    console.log(true);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
unul = 8;
if (unul === doi) {
    console.log((unul + doi) * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let dci = 29;
let student = 19;
if (dci > student) {
    console.log((dci - student) * 2);

}

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person's age is less than 13. 
//If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, 
//print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". 
//If none of these conditions apply, print "firstName is a adult". 
let firstName = 'Dci',
    age = 22;
if (age < 13) {
    console.log(firstName + ' is a child');
}
else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
}
else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young adult');
} else {
    console.log(firstName + ' Is an a Adult');
}

// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
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
