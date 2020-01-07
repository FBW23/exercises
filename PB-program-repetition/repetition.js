// # Repeat

// ## 1. Run Along
// Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

let i = 0;

while (i < 15){
    i++;
}

console.log(i);

// ## 2. Add it up 
// Create a function that adds numbers from 1-20 together using a `while` loop.

let n = 1
let sum = 0;

while (sum < 20){
    console.log('loop starts' + sum);
    sum = sum + n;
    console.log('loop ends' + sum);
}

console.log(sum);

// ## 3. Do this while i...
// Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 


do {
    i++;
    console.log(i);
} while (i < 20);

console.log('The number is' + i);