// Create a function sum which accepts any amount of numbers and return the sum of their addition

<<<<<<< HEAD


const sum = (...args) => {
    let sum1 = 0;
    for (let i = 0; i < args.length; i++) {
        sum1 += args[i];
    }
    return sum1
=======
const sum = (...args) => {
    let sum1 = 0;
    for (i=0; i<args.length; i++){
        sum1 += args[i];

    } return sum1;
     
>>>>>>> 2f3975d0cdae0feedbdc55bc4cd02a5b41c80663
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
