// # Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.
// let i=1;
let sum = 0;
// while(i<=20){
//     sum = sum + i;
//     console.log(i);
//     console.log(sum);
//     i++;
// }



for (let i = 0; i < 20; i++) {
    sum += i;
}

console.log(sum);

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 
let beer = "bottle of the wall";
let sum1 = 0;
while (beer < 5) {
    sum1 = sum1 + 1;
    console.log(beer);
    i++;
}
for (beer = 1; beer <= 5; beer++) {
    if (beer === 1) {
        console.log("There is One Bottle of Beer on the Wall");
    } else if (beer === 2) {
        console.log("There are Two Bottle of Beer on the Wall");
    } else if (beer === 3) {
        console.log("There are Three Bottle of Beer on the Wall");
    } else if (beer === 4) {
        console.log("There are Four Bottle of Beer on the Wall");
    } else if (beer === 5) {
        console.log("There are Five Bottle of Beer on the Wall");
    }
    // console.log("There is " + i + " Bottle of Beer on the Wall");
}



// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let x = 0; x <= 20; x++) {
    if (x % 2 === 0) {
        console.log(x + " is even ");
    } else {
        console.log(x + " is odd ");
    }
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// Multiplication tables

let multiply = 9;
for (let y = 0; y <= 10; y++) {
    let result = y * multiply;
    console.log(y + ' * ' + multiply + ' = ' + result);
}

// for (let multiply = 0; multiply <= 10; multiply++) {
//  for (let y = 1; y <= 10; y++) {
//    let result = multiply * y;
//    console.log(multiply + ' * ' + y + ' = ' + result);
//  }
// }



// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log(a + " FizzBuzz");
    } else if (a % 3 === 0) {
        console.log(a + " Fizz");
    } else if (a % 5 === 0) {
        console.log(a + " Buzz");
    } else {
        console.log(a);
    }
}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
// let sum2 = 0;
// for (let b = 0; b < 1000; b++) {
//     if (b % 3 === 0 || b % 5 === 0);
//     sum2 += b;
//     console.log(sum2)
// }

let sum2 = 0;
for (let x = 0; x < 1000; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        sum2 += x;
    }
}
console.log(sum2);


// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >
for (let k = 0; k <= 10; k++) {
    console.log(k * 100)
}


// >1 2 4 8 16 32 64 128
let i;
for (i = 1; i <= 128; i *= 2) {
    console.log(i);
}
// >
// >0 2 4 6 8 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i + " ");
}

// >3 6 9 12 15
for (let i = 3; i <= 15; i += 3) {
    console.log(i + " ");
}
// >9 8 7 6 5 4 3 2 1 0
for (let x = 9; x >= 0; x--) {
    console.log(x);
}
// >1 1 1 2 2 2 3 3 3 4 4 4

let ab = " ";
for (ba = 1; ba <= 4; ba++) {
    ab = ab + ba + ba + ba;
}
console.log(ab);

// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

let xy = " ";
for (yx = 0; yx <= 4; yx++) {
    xy = xy + yx;
}
console.log(xy + xy + xy);
// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat