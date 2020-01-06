// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let a = 50;
let b = 49;
if (((a <= 50) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let c = 50;
let d = 60;
let e = 99;

if (((50 <= c) && (c <= 99)) || ((50 <= d) && (d <= 99)) || ((50 <= e)) && ((e <= 99))){
        console.log(true)
} else{
    console.log(false);
}


// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

let g = 10;
let h = 15;
let k = 20;

if ((g > h) && (g > k)) {
    console.log(g);
} else if ((h > g) && (h > k)) {
    console.log(h);
    
} else if ((k > h) && (k > g)){
    console.log(k);
} 



// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let py ='Pypoca';
let string = 'Py'

if (py.includes(string)){
    console.log(py);

}else{
    console.log(string);
}
// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let one = 87;
let two = 10;


if ((one + two >= 50 ) || (one + two <= 80)){
    console.log(65);
} else{
    console.log(80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let six = 3;
let sixOne = 5;
let sum = six + sixOne;
let dif = six - sixOne;

if ((sum === 8) || (dif === 8)){
    console.log(true);
} else{
    console.log(false);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

let w = 15;
let u = 4;

if ((w===15) || (u === 15) || (w + u === 15)){
    console.log(true);
} else{
    console.log(false);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let mult = 9
let nMult = 30;


if ((mult % 7 === 0) || (mult % 11 === 0) ||(nMult % 7 === 0) || (nMult % 11 === 0)) {
    console.log(true);
} else{
    console.log(false);
}



    




// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
let sumTwo = w + u ;

if (w === u){
    console.log(sumTwo*3); 
}


// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let spec = 60;
let difTwo = spec - 19;

if (difTwo > 19){
    console.log(difTwo*2);
}

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

let ju = 'Julia';
let age = 32;

if (age < 13){
    console.log(`${ju} is a child`);
} else if (age >= 13 && age < 20){
    console.log(`${ju} is a teenager`);
} else if (age === 20 && age < 30){
    console.log(`${ju} is a young adult`);
} else{
    console.log(`${ju} is a adult`);
}


// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
