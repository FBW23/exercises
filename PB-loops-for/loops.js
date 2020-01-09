// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);


// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 


for (let b = 1; b <= 5; b++) {
    if (b === 1) {
        console.log('There\'s one bottle of beer on the wall.');
    } else if (b === 2) {
        console.log('There are two bottles of beers on the wall.');
    } else if (b === 3) {
        console.log('There are three bottles of beers on the wall.');
    } else if (b === 4) {
        console.log('There are four bottles of beers on the wall.');
    } else {
        console.log('There are five bottles of beers on the wall.');
    }
}


// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let n = 0; n <= 20; n++) {
    if (n % 2 === 0) {
        console.log(n + ' is even')
    } else {
        console.log(n + ' is odd')
    }
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9
//  and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

let myResult = '';

for (m = 0; m <=10; m++) {
    myResult = m*9;
    console.log(myResult);
}


// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
