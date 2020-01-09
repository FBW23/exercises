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

// let bottles;
// for (beer = 0; beer >= 5; beer++) {
//     if (beer == 1) {
//         bottles = 'bottle';
//     } else {
//         bottles = 'bottles';
//     }
//     console.log(beer + " " + bottles + " of beer on the wall.");
//     if (beer < 5) {
//         console.log("");
//         console.log(beer + " " + bottles + " of beer on the wall.");
//     }
// }


// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (let x = 0; x <= 20; x++) {
//     if (x % 2 ====0) {
//         console.log(x + "is even");
//     } else {
//         console.log(x + "is odd");
//     }
// }

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).



// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".



// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.




// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >
// >1 2 4 8 16 32 64 128
// >
// >0 2 4 6 8 10
// >
// >3 6 9 12 15
// >
// >9 8 7 6 5 4 3 2 1 0
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat