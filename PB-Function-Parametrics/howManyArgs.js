// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

<<<<<<< HEAD
const howManyArgs = (...args) => args.length;
=======
const howManyArgs = (...args) => {
    return args.length;
};
>>>>>>> 2f3975d0cdae0feedbdc55bc4cd02a5b41c80663

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1
