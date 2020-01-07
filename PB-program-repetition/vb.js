// # Repeat

// ## 1. Run Along
// Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

// ## 2. Add it up 
// Create a function that adds numbers from 1-20 together using a `while` loop. 

// ## 3. Do this while i...
// Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 

console.log(`## 1. Run Along. Create a while loop that runs as long as the variable i is less than 15. Print i.`);

let i=0;

while (i<15){
i++;
console.log(i);}



console.log(``);
console.log(``);
console.log(``);
console.log(`=======================`);

console.log(`## 2. Add it up 
Create a function that adds numbers from 1-20 together using a while loop. `);


let baseNumber=1;
let nextNumber=baseNumber+1;

console.log(`number at the beginning:`);
console.log(baseNumber);
console.log(`next number:`);
console.log(nextNumber);

while(baseNumber<20){
   baseNumber= baseNumber+nextNumber;
    console.log(`baseNumber + nextNumber; : `);
    console.log(`${baseNumber}+${nextNumber}`);
}
console.log(`end result :`) ;
console.log(baseNumber);




console.log(``);
console.log(``);
console.log(``);
console.log(`=======================`);



console.log(`## 3. Do this while i...
Use a do, while loop to print The number is [x] while x is less than 20.`);

let x=0;
console.log(`number at the beginning:`);
console.log(x);

do{
   x++ ;
   console.log(`The current value of x :`);
    console.log(x);
}

while(x<20){
   

}

console.log(`end result :`) ;
console.log(x);
console.log(``);
console.log(``);
console.log(``);
console.log(`=======================`);