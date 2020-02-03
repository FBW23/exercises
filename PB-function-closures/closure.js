<<<<<<< HEAD
function add(a) {
    return function(b) {
        return a+b;
    };
}
console.log(add(3)(4));
console.log(add(10)(5));

console.log("...............Exercise...................");

const multiplier = function (c) {
    return function (d) {
        return c * d;
    }; // closing the return from line 14
}; // closing the const statement
console.log(multiplier(3)(4));

console.log("..................Exercise 2................");

let person = 40;
let age = 60;
let wage = (1000 * 0.1);

(output = function (person, age, wage) {
 return console.log('output = '+`${(age - person) * 12 * wage}`)

})(person,age,wage)

console.log(".........................");

let person1 = 40;
let age1 = 65;
let wage1 = (2000 * 0.05);

(output = function (person1, age1, wage1) {
 return console.log('output = '+`${(age1 - person1) * 12 * wage1}`)

})(person1,age1,wage1)
=======
console.log(0);

console.log('ju');


// function calculation (numberOne, numberTwo, operator){
//     let one = numberOne;
//     let two = numberTwo;
//     let op = operator;

//     function makeAnOperation(){
//         return function(){
//             return function(){
//                 console.log(numberOne + operator + numberTwo)
//             }
//         }
//     }
//     let myNewFunction = makeAnOperation();
//     myNewFunction();
// }
// calculation(1, 2, '+');


function add (number){
    let sum = 0;
    return function(number2){
        
        return number+number2;
    }

}

console.log(add (3)(4));

// Closures
// 1. Addition
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
// add(3)(4);
// // returns 7
// 2. Multiply
// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
    const multiplication = function (number){
    return function(number2){
        
        return number*number2;
    };//closing the return from line 43

} ;// closing the const statement


console.log(multiplication (3)(4));


// 3. Calculate Money Saved till Pension Day!
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
!function (current, retirement, monthly, percentageSaved){
    if (current >= retirement){
        console.log('You\'re already retired');
    } else{
        let yearsLeft = retirement - current;
       
        console.log(yearsLeft*12*percentageSaved*monthly)
        
    };
}(40, 65, 2000, 0.05);




// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000
>>>>>>> 2f3975d0cdae0feedbdc55bc4cd02a5b41c80663
