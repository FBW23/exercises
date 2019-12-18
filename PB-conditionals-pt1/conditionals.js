<<<<<<< HEAD
// 1 Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). 
//Print true if either of them are in the rang

let a = 60;
let b = 100;

if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99)) {
    console.log(true);
} else {
    console.log(false);
}


// 2 Check if three given integer values are in the range 50 to 99 (inclusive). 
//Print true if one or more of them are in the range.

let c = 60;
let d = 98;
let e = 23

if ((c >= 50 && c <= 99) || (d >= 50 && d <= 99) || (e >= 50 && e <= 99)) {
    console.log(true);
} else {
    console.log(false);
}


// 3 Declare the variables a, b and c, and give them number values. 
//Check which one out of the three variables has the largest value and print it to the console. 
//Then change the values of the variables to see if your conditional still works.
let one = 10;
let two = -18;
let three = 43;

if (one > two && one > three) {
    console.log(one);
} else if (two > one && two > three) {
    console.log(two);
} else if (three > one && three > two) {
    console.log(three);
}



// 4 Create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then print the original string.

let word = "thon";

if (word.includes("Py")) {
    console.log(word);
} else {
    console.log("No py")
}


// 5 Calculate the sum of the two integers. 
//If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum = 28;
let sum1 = 41;

if ((sum + sum1 >= 50) && (sum + sum1 <= 80)) {
    console.log(65);
} else {
    console.log(80);
}



//6 Check whether the sum of two integers is 8, or whether their difference is 8. 
//If one of these is the case, print true.

let intSum = 12;
let intSum1 = 2;

if ((intSum + intSum1 == 8) || (intSum - intSum1 == 8)) {
    console.log(true);
} else {
    console.log(false)
}


//7 Check whether either one of two integers is 15, or if their sum is 15. 
//If one of these is the case, print true.
let int = 12;
let int1 = 3;


if ((int === 15) || (int1 === 15) || (int + int1 === 15)) {
    console.log(true);
} else {
    console.log(false)
}


//8 Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let mult = 77;
let mult1 = 88;

if ((mult % 7 === 0) || (mult1 % 11 === 0)) {
    console.log(true);
} else {
    console.log(false);
}


// 9 Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let inta = 10;
let intb = 10;

let intc = inta + intb; //15

if (inta === intb) {
    console.log(3 * intc);
} else {
    console.log("not the same")
}


// 10 Calculate the difference between a specified number and 19. 
//Print double the difference if the specified number is greater than 19.

let num = 40;
let spec = 19
let specNum = num - spec;

if (num > 19) {
    console.log(2 * specNum);
} else {
    console.log(false)
}

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. 
//Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". 
//If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". 
//If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". 
//If none of these conditions apply, print "firstName is a adult".

let firstName = "Bianca";
let age = 33;

if (age < 13) {
    console.log(firstName + " is a child.");
} else if
    (age >= 13 && age < 20) {
        console.log(firstName + " is a teenager");
    } else if
        (age = 20 && age < 30) {
            console.log(firstName + " is an young adult");
        } else {
            console.log(firstName + " is an adult")
        }


// BONUS CHALLENGE: Play around with each of your results, 
//i.e., make sure they are dynamic to different inputs; 
//is there a more efficient way of writing your code?; etc.
=======
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
>>>>>>> 5a386d15b2d91ed68c8c93a3cc6ffe5b5df2d0fa
