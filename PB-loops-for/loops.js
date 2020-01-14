// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

let sum;
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." 
//"There are two bottles of beer on the wall" up until there are five bottles. 




for (let j = 1; j <= 5; j++) {
    if (j >= 1) {
        console.log("There is " + j.toString() + " bottle of beer on the wall");
    };
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. 
// For each iteration, it will check if the current number is even or odd, 
// and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let k = 0; k < 10; k++) {
    for (let m = 0; m <= 10; m++) {
        console.log((k.toString()) + " * " + (m.toString()) + " = " + k * m)
    }
}


// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}


// 6. ** Sum of Multiples **
//     Write a program to add the multiples of 3 and 5 under 1000.

let sum1 = 0;
for (let p = 0; p <= 1000; p++) {
    if (p % 3 === 0 && p % 5 === 0) {
        sum1 += p;

    }
}
console.log(sum1);

// 7. Write programs that produce the following outputs: 


for (let a = 1; a <= 10; a++){
    console.log(a * 100);
}
//

let b = []


// >100 200 300 400 500 600 700 800 900 1000
// >1 2 4 8 16 32 64 128
// >0 2 4 6 8 10
// >3 6 9 12 15
// >9 8 7 6 5 4 3 2 1 0
// >1 1 1 2 2 2 3 3 3 4 4 4
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

