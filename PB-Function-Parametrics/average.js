// Bonus: Create a function average which accepts any amount of numbers and 
//returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing 
//the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (...args) => {
<<<<<<< HEAD
    let total = 0;
    for (let i = 0; i <args.length; i++) {
        total += args[i];
    }
    return total /args.length;
};
=======
        let sum1 = 0;
        for (i=0; i<args.length; i++){
            sum1 += args[i];
    
        } return sum1/args.length;
         
    };

>>>>>>> f205c8b4608b3ce1a67671eedeca0937cb0a91b2

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14
