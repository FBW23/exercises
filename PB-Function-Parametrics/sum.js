// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
<<<<<<< HEAD
    return (
        args.reduce(function(acc, val) { 
            return acc + val;
         }, 0)
      )
=======
    let sum1 = 0;
    for (i=0; i<args.length; i++){
        sum1 += args[i];

    } return sum1;
     
>>>>>>> f205c8b4608b3ce1a67671eedeca0937cb0a91b2
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
