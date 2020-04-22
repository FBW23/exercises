//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let a = 50;
let b = 99;
if ((50 <= a) && (a <= 99) || (50 <= b <= 99)) {
    (console.log(true))
} else {
    console.log(false);
}

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

if ((50 <= a) && (a <= 99) && (a <= 110) || (110 <= 50 <= b <= 99)) {
    (console.log(true))
} else {
    console.log(false);
}
// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let c = 100;
let d = 7;
let e = 9;

if ((c > d) && (c > e)) {
    console.log(c);
}
if ((c < d) && (e < c)) {

    console.log(false)
}

// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let z = "thon";
let x = "py" + z;
if (z = x) {
    (console.log(z));
}

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

y = (65 + 67);
console.log(y)
if ((y > 50) && (y < 80))

{
    (console.log(65));
} else {
    console.log(80);
}



// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

if (2 + 6 === 8) {
    (console.log(true));
}

if (2 - 6 === 8) {
    (console.log(true));
}

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let bleh = 15;
if ((bleh === 7) && (bleh === 8)) {
    console.log(true);
}
if (7 + 8 === bleh) {
    console.log(true);
}

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.



if (35 % 7 === 0 || 35 % 11 === 0 || 144 % 7 === 0 || 144 % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}



//   Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let i = 42;
let o = 24;

let p = i + o;

if (i === o) {
    console.log(p * 3);
} else {
    console.log(false)
};

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let n = 1029;
let s = n - 19;
if (s > 19) {
    console.log(s * 2);
}

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let firstName = "Mulambenta";
let age = 15;

if (age < 1(console.log(80)) 3) {
    console.log(firstName + "its a child");
} else if ((age >= 13) && (age < 20)) {
    console.log(firstName + " " + " is a teenager");
} else if ((age >= 20) && (age < 30)) {
    console.log(firstName + "is a young adult");
} else {
    console.log(firstName + "is an adult");
}

let a = -5;
if (a > 0) {console.log("positive");
}
else
{console.log("NOT positive");

}

// expected output: "NOT positive"

//block scope
let y=1;
var x=1;
if (true){var x=2;
let y=2;}

console.log(x);
//expected output:2

console.log(y);
//expected output 1