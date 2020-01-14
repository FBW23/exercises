console.log();
console.log('Write a program to add up the numbers 1 to 20.');
console.log();

let i = 1;
let sum = 0;

while (i <= 20) {
    sum = sum + i;
    console.log('i ->', i);
    console.log('sum ->', sum);
    i++;
}

for (let i = 1; i < 20; i++) {
    sum += i;
}

console.log('output ->', sum);

console.log();
console.log('Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.');
console.log();

let wall = 'bottles on the wall.'

for (let bottle = 1; bottle <= 5; bottle++) {
    if (bottle === 1) {
        console.log('There is one bottle on the wall');
    } else if (bottle === 2) {
        console.log('There are two', wall);
    } else if (bottle === 3) {
        console.log('There are three', wall);
    } else if (bottle === 4) {
        console.log('There are four', wall);
    } else if (bottle === 5) {
        console.log('There are five', wall);
    } else {
        console.log('Invalid values.');
    }
}

// // BALAZS SOLUTION

// for (let i = 1; i < 5; i++) {
//     let text = `There is ${i} bottle of beer on the wall`;
//     if (i > 1) {
//         text = `There are ${i} bottles of beer on the wall`;
//     }
//     console.log(text);
// }

// for (let i = 1; i <= 5; i++) {
//     let text = `There is one bottle of beer on the wall`;
//     if (i === 2) {
//         text = `There are two bottles of beer on the wall`;
//     } else if (i === 3) {
//         text = `There are three bottles of beer on the wall`;
//     } else if (i === 4) {
//         text = `There are four bottles of beer on the wall`;
//     } else {
//         text = `There are five bottles of beer on the wall`;
//     }
//     console.log(text);
// }

console.log();
console.log('Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").');
console.log();

for (let number = 0; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// for (let number = 0; number <= 20; number++) {
//     if (number % 2) {
//         console.log(`${number} is odd.`);
//     } else {
//         console.log(`${number} is even.`);
//     }
// }

console.log();
console.log('Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").');
console.log();

for (let number = 0; number <= 10; number++) {
    let result = number * 9;
    console.log(`${number} * 9 is ${result}.`);
}

console.log();
console.log(`Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".`);
console.log();

for (let number = 1; number <= 100; number++) {
    let because = 'because the number is';
    if (number % 15 === 0) {
        console.log('FizzBuzz', because, number + '.');
    } else if (number % 3 === 0) {
        console.log('Fizz', because, number + '.');
    } else if (number % 5 === 0) {
        console.log('Buzz', because, number + '.');
    } else {
        console.log(number);
    }
}

console.log();
console.log('Write a program to add the multiples of 3 and 5 under 1000.');
console.log();

let sum1 = 0;

for (let myNumber = 0; myNumber < 1000; myNumber++) {
    if (!(myNumber % 15)) {
        sum1 += myNumber;
    }
}
console.log(sum1);

// Conditions turned around

let sum2 = 0;

for (let myNumber = 0; myNumber < 1000; myNumber++) {
    if (myNumber % 15 === 0) {
        sum2 += myNumber;
    }
}
console.log(sum1);

console.log('Program One');
for (let number = 0; number <= 1000; number++) {
    if (number % 100 === 0) {
        console.log(number);
    }
}

console.log('Program Two');
for (let n1 = 1; n1 <= 128;) {
    console.log(n1);
    n1 = n1 + n1;
}

console.log('Program Three');
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('Program Four');
for (let number = 1; number <= 15; number++) {
    if (number % 3 === 0) {
        console.log(number);
    }
}

console.log('Program Five');
for (let number = 9; number >= 0; number--) {
    console.log(number);
}

console.log('Program Six');
for (let number = 1; number <= 4; number++) {
    if (number === 1, 2, 3, 4) {
        console.log(number, number, number);
    }
}

console.log('Program Seven');
for (let number = 0; number >= 4; number++) {
    console.log(number);
    console.log(number);
    console.log(number);
}