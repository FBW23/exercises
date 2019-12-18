// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let a = 50;
let b = 99;
if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let c = 12;
let d = 45;
let e = 55;

function check_numbers(x, y) {
    if ((c >= 50 && c <= 99) || (d >= 50 && d <= 99) || (e >= 50 && e <= 99)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

// let f = 15;
// let i = 45;
// let h = 49;

// if (f > i && f > h) {
//     console.log(f);
// } else if (i > f && i > h) {
//     console.log(i);
// } else if (h > f && h > i) {
//     console.log(h);
// }

let f = 15;
let i = 50;
let h = 49;

if (f > i && f > h) {
    console.log(f);
} else if (i > f && i > h) {
    console.log(i);
} else if (h > f && h > i) {
    console.log(h);
}


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let name = "Python";

if (name === null || name === undefined || name.substring(0, 2) === 'Py') {
    console.log(name);
} else {
    console.log("Py" + name);
}
// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

let m = 50;
let t = 80;
const sumNumber = m + t;
if (sumNumber >= 50 && sumNumber <= 80) {
    console.log(65)
} else {
    console.log(80);
}



// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let x = 32;
let y = 24;

if ((x + y) == 8 || (x - y) == 8) {
    console.log(true);

}


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

let name2 = 7;
let name1 = 8;
if ((name2 + name1) == 15 || (name2 == 15) || (name1 == 15)) {
    console.log(true);
}
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let int, int2;

if (int % 7 || int2 % 7 || int % 11 || int2 % 11) {
    console.log(true);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
let sum = 2;
let sum1 = 2;

if (sum === sum1) {
    console.log((sum + sum1) * 3);
} else {
    console.log(sum + sum1);
}
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let number1 = 25;
let number2 = 19;
if (number1 > number2)
    console.log((number1 - number2) * 2);
// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

let firstName = 'Adam';
let age = 35;

if (age < 13) {
    // console.log(firstName + " is a child ");
    console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager ");
} else if (age === 20 && age < 30) {
    console.log(firstName + " is a young adult ");
} else {
    console.log(firstName + " is a adult");
}
// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
