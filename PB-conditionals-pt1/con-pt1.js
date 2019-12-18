console.log();
console.log("1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.");
console.log();
let a = 71;
let b = 39;
let c = 37;

if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}

console.log();
console.log("2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.");
console.log();
let esTwoValue = (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))); // TRUE
if (esTwoValue || ((50 <= c) && (c <= 99))) {
    console.log(true);
} else {
    console.log(false);
}

console.log();
console.log("3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.");
console.log();
// let a = 71;
// let b = 39;
// let c = 57;
if ((a > b) && (a > c)) {
    console.log(a);
}
if ((b > a) && (b > c)) {
    console.log(b);
}
if ((c > a) && (c > b)) {
    console.log(c);
}

console.log();
console.log("4. Create a new string adding \"Py\" in front of a given string. If the given string begins with \"Py\" then print the original string.");
console.log();
let givenString = 'thon';
let pyString = 'Py';
let newString = pyString + givenString;
if (givenString.includes('Py')) {
    console.log(givenString);
} else {
    console.log('this word does not contain \"Py\"');
}

console.log();
console.log("5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.");
console.log();
let es5Sum = a + b;
console.log("sum of a + b is:", es5Sum);
if ((50 <= es5Sum) && (es5Sum <= 80)) {
    console.log('65');
} else {
    console.log('80');
}

console.log();
console.log("6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.");
console.log();
let es6Sum = b + c;
let es6Sub = b - c;
console.log("the sum of b + c is:", es6Sum);
if ((es6Sum === 8) || (es6Sub === 8)) {
    console.log(true);
} else {
    console.log(false);
}

console.log();
console.log("7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.");
console.log();
let d = 15;
if (((a === 15) || (d === 15)) || (a + d === 15)) {
    console.log(true);
} else {
    console.log(false);
}

console.log();
console.log("8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.");
console.log();
let e = 14;
let h = 23;
if ((e % 7) === 0 || (e % 11) === 0 || (h % 7) === 0 || (h % 11) === 0) {
    console.log(true);
} else {
    console.log(false);
}


console.log();
console.log("9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.");
console.log();
let f = 15;
let g = 15;
let es9Sum = f + g;
if ((f === g)) {
    console.log(es9Sum * 3);
} else {
    console.log("NO");
}

console.log();
console.log("10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.");
console.log();
let es10Sum = a + 19;
if ((a + 19) > 19) {
    console.log(es10Sum * 2)
} else {
    console.log("NO");
}

console.log();
console.log("11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print \"firstName is a child\". If the age is equal to or more than 13 and less than 20, print \"firstName is a teenager\". If the person's age is equal to 20 and less than 30, then print \"firstName is a young adult\". If none of these conditions apply, print \"firstName is an adult\".");
console.log();
let firstName = 'Barbirbo';
let age = 20;
if (age < 13) {
    console.log(`${firstName} is a child.`);
} 
if ((13 <= age) && (age < 20)) {
    console.log(`${firstName} is a teenager.`);
} 
if ((age === 20) && (age < 30)) {
    console.log(`${firstName} is a young adult.`);
} 
if (age > 30) {
    console.log(`${firstName} is an adult.`)

}

console.log();
console.log("12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.");
console.log();