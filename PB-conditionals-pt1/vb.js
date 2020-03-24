// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

console.log(`============================`);
console.log('1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.');
var a = 50;
var b = 99;

if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}



console.log(`============================`);
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
console.log(`============================`);
console.log('2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.');
var a = 30;
var b = 107;
var c = 100;


if (((a < 50) || (a > 99)) || ((b < 50) || (b > 99)) || ((c < 50) || (c > 99))) {
    console.log(false);
} else {
    console.log(true);
}




console.log(`============================`);
// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
console.log(`============================`);
console.log('3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. ');

var a = 102;
var b = 101;
var c = 100;
let highest = a > b ? a : b
highest = highest > c ? highest : c


console.log(highest);






if ((a > b) && (a > c)) {
    console.log('a is the highest amount');
}

if ((a < b) && (c < b)) {
    console.log('b is the highest amount');
}

if ((c > b) && (c > a)) {
    console.log('c is the highest amount');
}







console.log(`============================`);
// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
console.log(`============================`);
console.log('4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.');


let gugu = 'Python';

if ((gugu.charAt(0) === ('P')) && (gugu.charAt(0) === ('y'))) {
    console.log(gugu);
}


console.log(`============================`);
// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
console.log(`============================`);
console.log('5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. ');
let d = 35;
let f = 20;
let sum = d + f;
console.log(`d+f=${sum}`);



if ((sum >= 50) && (sum <= 80)) {
    console.log(65);
} else {
    console.log(80);
}


console.log(`============================`);
// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
console.log(`============================`);
console.log('6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.');

let e = 15;
let g = 7;

if ((e - g) === 8 || (e + g) === 8) {
    console.log(true);
}


console.log(`============================`);
// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
console.log(`============================`);
console.log('7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. ');

if (e === 15 || e + g === 15) {
    console.log(true);
}

console.log(`============================`);
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
console.log(`============================`);
console.log('8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.');

let h = 7;
let j = 11;

if (((h % 7 === 0) || (h % 11 === 0)) || ((j % 7 === 0) || (j % 11 === 0))) {
    console.log(true);
}




console.log(`============================`);
// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
console.log(`============================`);
console.log('9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. ');


let k = 24;
let m = 25;
let sum2 = k + m;
console.log('k+m= ' + sum2);

if (k === m) {
    console.log(sum2 * 3);


}

console.log(`============================`);
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
console.log(`============================`);
console.log('10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.');

let n = 20;
let o = 19;

let difference = n - 19;

if (n > o) {
    console.log(difference * 2);
}


console.log(`============================`);
// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 
console.log(`============================`);
console.log(`11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". `);

let firstName = 'Don Corleone';
let age = 30;

if (age < 13) {
    console.log(`${firstName} is a child`);
}
if ((age >= 13) && (age < 20)) {
    console.log(`${firstName} is a teenager`);
}

if ((age === 20) && (age < 30)) {
    console.log(`${firstName} is a young adult`);

}
if (age >= 30) {
    console.log(`${firstName} is an adult`);
}



console.log(`============================`);
// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
console.log(`============================`);
console.log('12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. ');




console.log(`============================`);