console.log(`// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result. 

// i.e. 

// calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."

// calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you til the age of 80."`);


const exercise8 = (currentAge, amountPerDay) =>{
    
    ( 80 - currentAge) * amountPerDay *365;
    return `You will need ${( 80 - currentAge) * amountPerDay *365} packets of crisps  (${amountPerDay} a day) to last you til the age of 80.`
}
const supply = exercise8(25, 10);
const supply2 = exercise8(40, 3);
console.log(supply);
console.log(supply2);


console.log(`===========================================================================`);