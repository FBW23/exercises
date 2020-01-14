// Addition. Write a program to add up the numbers 1 to 20.
//let i = 1;
let sum = 0;

// while (i <= 20) { // i < 21
//     sum = sum + i;
//     console.log(i);
//     console.log(sum);
//     i++;
// }
// for(definition of iterator; condition; increment of iterator) {...}
for (let i = 1; i <= 20; i++) {
    sum += i; // adds i to the sum
}

console.log(sum);

// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.