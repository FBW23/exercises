let i = 1;
let sum = 0;

// while(i<=20){
//     sum=sum+i;
//     console.log(i);
//     console.log(sum)
//     i++;
// }
// console.log(sum);

for (let i = 1; i <= 5; i++) {
    console.log('There is/are ' + i + ' bottle(s) on the wall');
}



// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.




for (let f = 0; f <= 20; f++) {
    if (f % 2 === 0) {
        console.log(f + ' is even');
    } else {
        console.log(f + ' is Odd');
    }
}

// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// 

for (let g = 0; g <= 10; g++) {
    let m = 9;
    sum = g * m;
    console.log(g + '*' + m + '=' + sum)

}

// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(number);
    }
}

// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
let sum1 = 0;

for (let multiple = 0; multiple <= 1000; multiple++) {

    if (multiple % 15 === 0) {
        console.log(sum1 += multiple);
    }
}

// 7 Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
for (let x = 1; x <= 1000; x++) {
    if (x % 100 === 0) {
        console.log(x);
    }
}
// 1 2 4 8 16 32 64 128
let soma = 0;

for (plumber = 1; plumber <= 64;)

{plumber=plumber+plumber;
    console.log(plumber)
}
// 0 2 4 6 8 10
for (r = 0; r <= 10; r++) {
    if (r % 2 === 0) {
        console.log(r)
    }
}
// 3 6 9 12 15
for (s = 1; s <= 15; s++) {
    if (s % 3 === 0) {
        console.log(s);
    }
}
// 9 8 7 6 5 4 3 2 1 0
for (t = 9; t >= 0; t--) {
    console.log(t)
}
// 1 1 1 2 2 2 3 3 3 4 4 4
for(z=1;z<=4;z++){
    console.log(z )
    console.log(z )
    console.log(z )
}
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for (f = 0; f <= 4; f++) {

    console.log('0 1 2 3 4 ');
}

