// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) =>{
    let total=0;
for(let i = 0; i < args.length;i++) {
     total += args[i]; // just adding the total of arguments
     
}; 
return total // total of arguments divided  by the number of arguments
};


// total of arguments add  by the number of arguments

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
