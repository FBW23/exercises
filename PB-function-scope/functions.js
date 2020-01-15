// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 

function myFirst (number1, number2){
    console.log(typeof(number2));
    console.log(typeof(number1));

    for (let i= 1; i < number2; i++){
   console.log(Math.pow(number1, i))
       
    }

    for (let i= 1; i < number1; i++){
        
        console.log(Math.pow(number2, i))
         }
    
}



myFirst (9, 2);

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.



// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 

let myFavoriteFruit = 'papaya';

const myFavFruitFunc = function (string){
    myFavoriteFruit = 'jambo';
    console.log('My favorite fruit is ' + string);
}

myFavFruitFunc ('jambo');


// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

const exponent = function(x, y){
    let result = Math.pow(x, y);
    console.log(result);
}

exponent(4, 5);
console.log('It is not possible to access because it is a local scope');