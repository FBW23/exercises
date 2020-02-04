// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

<<<<<<< HEAD
const howManyArgs = (...args) => args.length;
=======
const howManyArgs = (...args) => {
    return args.length;
};
>>>>>>> 3a989455f12040c8fec9eb6930ecec99ddac31c2

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1
