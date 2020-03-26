// Create a function sum which accepts any amount of numbers and return the sum 
//of their addition

const sum = (...args) => {
    let sum1 = 0;
<<<<<<< HEAD
for (i = 0; i < args.length; i++){
    sum1 += args[i];
    
}
return sum1;
}
=======
    for (i=0; i<args.length; i++){
        sum1 += args[i];

    } return sum1;
     
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
>>>>>>> f205c8b4608b3ce1a67671eedeca0937cb0a91b2
console.log(sum(25, 25, 20)); // -> 70
