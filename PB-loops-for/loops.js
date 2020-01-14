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
    console.log(m + ' times 9 = ' + myResult);
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" 
// instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

for (let fizz = 1; fizz <= 100; fizz++) {
    if (fizz % 15 === 0) {
        console.log('FizzBuzz');
    } else if (fizz % 5 === 0) {
        console.log('Buzz');
    } else if (fizz % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(fizz);
    }
}


// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.

let sum1 = 0;

for (let myNumber = 0; myNumber < 1000; myNumber++) {
    if (!(myNumber % 15)) {
        sum1 += myNumber;
    }
}
console.log(sum1);

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >

for (let firstRow = 1; firstRow <= 1000; firstRow++) {
    if (firstRow % 100 === 0){
        console.log(firstRow);
    }
}
console.log();

// >1 2 4 8 16 32 64 128

for (let secondRow = 1; secondRow <= 128;) {
    console.log(secondRow);
    secondRow = secondRow + secondRow;
    }

console.log();

// >0 2 4 6 8 10

for (let thirdRow = 0; thirdRow <=10; thirdRow++){
    if (thirdRow % 2 ===0) {
        console.log(thirdRow);
    }
}
console.log();

// >3 6 9 12 15

for (let fourthRow = 1; fourthRow <=15; fourthRow++) {
    if (fourthRow % 3 === 0) {
        console.log(fourthRow);
    }
}
console.log();


// >9 8 7 6 5 4 3 2 1 0

for (let fifthRow = 9; fifthRow >=0; fifthRow--) {
    console.log(fifthRow);
}

console.log();

// >1 1 1 2 2 2 3 3 3 4 4 4

for (let sixthRow = 1; sixthRow <=4; sixthRow++) {
        console.log(sixthRow, sixthRow, sixthRow);

}
console.log();


// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for (let seventhRow = 0; seventhRow <=4; seventhRow++) {
    console.log(seventhRow, seventhRow, seventhRow, seventhRow);
}
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
