// Create a function sum which accepts any amount of numbers and return the sum of their addition
const sum = (...args) => {
    let sum = 0;
    for (i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70