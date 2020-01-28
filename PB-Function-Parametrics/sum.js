// Create a function sum which accepts any amount of numbers and return the sum 
//of their addition

const sum = (...args) => {
    let sum1 = 0;
for (i = 0; i < args.length; i++){
    sum1 += args[i];
    
}
return sum1;
}
console.log(sum(25, 25, 20)); // -> 70
