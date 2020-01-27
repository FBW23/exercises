<<<<<<< HEAD
function add (a) {
    return function(b) {
        return a + b;
=======
// Default regular function
function add(a) {
    return function(b) {
        return a+b;
>>>>>>> a2b661b7b4ded5fce0a81d9bea9a3f30160626cf
    };
}
console.log(add(3)(4));
console.log(add(5)(10));

<<<<<<< HEAD
//=======================================

function multiply(c) {
    return function(d) {
        return c * d;
    };
}
console.log(multiply(5)(7));


// #### 3. Calculate Money Saved till Pension Day!

// Write a function that accepts several parameters and calculates the number of 
//money that will have been saved as pension until a person retires. 
//The function should be self invoked and should have the following parameters:

// - The current age of the person // e.g. 40
// - The retirement age of the person // e.g. 60
// - The monthly wage the person earns // e.g. 1000
// - The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message 'You're already retired!' should be printed.
// If not, then the program should calculate how many years remain until the person retires, 
//the monthly income and take a specific percent of this income every month as saved money.

// - Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she 
//saves the 5% of it. How much money will she have saved until she retires?
// - Output: $30000


(function (age, retirementAge, monthlyWage, percentage) {
if (age >= retirementAge){
    console.log("You are already retired");
} else {
    let yearsLeft = retirementAge - age;
    return console.log(yearsLeft * 12 * percentage * monthlyWage);

}
}(40, 65, 2000, 0.05));
=======
// break 1245 

// Anonymous function
const multiplier = function (c) {
    return function (d) {
        return c * d;
    }; // closing the return from line 14 
}; // closing the const statement
console.log(multiplier(3)(4));



>>>>>>> a2b661b7b4ded5fce0a81d9bea9a3f30160626cf
