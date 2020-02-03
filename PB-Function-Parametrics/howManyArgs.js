// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

const howManyArgs = (...args) => {
<<<<<<< HEAD
             
         return args.length
    }; 
    
    
    

=======
    return args.length;
};
>>>>>>> f205c8b4608b3ce1a67671eedeca0937cb0a91b2

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1
