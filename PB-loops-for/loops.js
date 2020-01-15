<<<<<<< HEAD
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
=======
// # Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

let i = 1;
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a
let sum = 0;

while (i < 21) {
    i++;
    sum += i;
    console.log(sum);
    console.log(i);
}

console.log(sum);

<<<<<<< HEAD
// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
=======
<<<<<<< HEAD


// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 


for (let bottlesOfbeer = 1; bottlesOfbeer < 6; bottlesOfbeer++) {
    if (bottlesOfbeer === 1) {
        console.log(`there is one bottle of beer on the wall`);
    } else {
        console.log(`there are ${bottlesOfbeer} bottle of beer on the wall`)
    }
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").



for (let n = 0; n <= 20; n++) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`)
    }

}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

let mult = 0;
for (let numberTwo = 0; numberTwo < 11; numberTwo++) {
    mult = numberTwo * 9;
    console.log(numberTwo + " * 9" + " = " + mult);

}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let thirdNumber = 1; thirdNumber <= 100; thirdNumber++) {
    if (thirdNumber % 3 === 0 && thirdNumber % 5 === 0) {
        console.log(thirdNumber);
        console.log("Fizz Buzz");

    } else if (thirdNumber % 3 === 0) {
        console.log(thirdNumber);
        console.log("Fizz");
    } else if (thirdNumber % 5 === 0) {
        console.log(thirdNumber);
        console.log("Buzz");
    } else {
        console.log(thirdNumber);
    }
}
// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.


let sumTwo = 0;
for (let fourthNumber = 0; fourthNumber <= 1000; fourthNumber++) {
    if (fourthNumber % 3 === 0 && fourthNumber % 5 === 0) {
        sumTwo += fourthNumber;
        console.log(sumTwo);
    }
}

// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >

let multTwo = 0;

for (let fifthNumber = 1; fifthNumber < 11; fifthNumber ++){
    mult = fifthNumber * 100;
    console.log (mult);
}
// >1 2 4 8 16 32 64 128
// >


for (let sixthNumber = 1; sixthNumber <= 128;){
    
    console.log(sixthNumber);
    sixthNumber = sixthNumber + sixthNumber;

}
// >0 2 4 6 8 10
// >

for (let g = 0; g < 11; g++){
    if(g % 2 === 0){
        console.log(g);
    }
}
// >3 6 9 12 15

for (let h = 1; h < 16; h++){
    if(h % 3 === 0){
        console.log(h);
    }
}
// >
// >9 8 7 6 5 4 3 2 1 0
// >
for (let j = 11; j > 0; j--){
    console.log(j);
}
// >1 1 1 2 2 2 3 3 3 4 4 4
// >

for (let k = 1; k < 4; k++){
    console.log(k);
    console.log(k);
    console.log(k);
  
}


// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// for (let l = 0; l < 5; l++){
//     console.log (l);
    
    
    
// }

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat


for (let p = 10; p < 0; p--){
    console.log(p);
}
=======
// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
>>>>>>> 72c5985a21f0ac1e4d579f817a1f4cd981016f91
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a
