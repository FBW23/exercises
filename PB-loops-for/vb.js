
console.log(` Write a program to add up the numbers 1 to 20.`);
console.log(``);
console.log(``);
console.log(`========================`);
console.log(``);
console.log(`========================`);




console.log(`2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. `);
console.log(`========================`);
console.log(``);
console.log(``);

// let i=1;
// let text=`There is ${i} bottle of beer on the wall`;
// console.log(text);

for (let i = 1; i <= 5; i++) {

    let text = `There is one bottle of beer on the wall`;

    if (i === 2) {
        text = `There are two bottles of beer on the wall`;
    } else if (i === 3) {
        text = `There are three bottles of beer on the wall`;
    } else if (i === 4) {
        text = `There are four bottles of beer on the wall`;
    } else {
        text = `There are five bottles of beer on the wall`;
    }
    console.log(text);
}


// while( i<5){
//     i++;
//     if(i>1){
//         text=`There are ${i} bottles of beer on the wall`;
//     }

//     console.log(text);
// }




console.log(``);
console.log(`========================`);





console.log(`3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").`);
console.log(`========================`);
console.log(``);
console.log(``);





for (let myNumber = 0; myNumber <= 20; myNumber++) {

    let odd = `${myNumber} is odd`;
    let even = `${myNumber} is even`;
    if (myNumber % 2) {
        console.log(odd);

    } else {
        console.log(even);
    }

}

console.log(``);
console.log(`========================`);






console.log(`4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
`);
console.log(`========================`);
console.log(``);
console.log(``);
for (let x = 1; x <= 10; x++) {

    //BONUS TASK
    console.log(`bonus task`);
    for (let w = 1; w <= 10; w++) {

        w2 = x * w;

        console.log(`   ${x} * ${w} = ${w2}`);


    }
    console.log(`bonus task`);
    //BONUS TASK


    let y = x * 9;
    console.log(`main task`);
    console.log(`${x} * 9 = ${y}`);
    console.log(`main task`);

}

console.log(``);
console.log(`========================`);







console.log(` 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".`);
console.log(`========================`);
console.log(``);
console.log(``);

for (let z = 1; z <= 100; z++) {

    if ((z % 3 === 0) && (z % 5 === 0)) {
        console.log(`FizzBuzz`);
    } else if (z % 3 === 0) {
        console.log(`Fizz`);
    } else if (z % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(z);
    }

}

console.log(``);
console.log(`========================`);






console.log(`6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.`);
console.log(`========================`);
console.log(``);
console.log(``);

let sum = 0;

for (let start = 1; start <= 1000; start++) {

    if (start % 15 === 0) {


        sum = start + sum;

    }

}
console.log(sum);






console.log(``);
console.log(`========================`);






console.log(`7. Write programs that produce the following outputs: 
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
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);
console.log(`========================`);
console.log(``);
console.log(``);

console.log(`>`);
for (let n1 = 0; n1 < 1000;) {
    n1 = n1 + 100

    console.log(n1);
}
console.log(`>`);
console.log(`>`);
for (let n1 = 1; n1 <= 128;) {
    console.log(n1);
    n1 = n1 + n1;


}


console.log(`>`);
console.log(`>`);
for (let n1 = 0; n1 <= 10;) {
    console.log(n1);
    n1 = n1 + 2;


}

console.log(`>`);
console.log(`>`);
for (let n1 = 3; n1 <= 15;) {
    console.log(n1);
    n1 = n1 + 3;


}

console.log(`>`);
console.log(`6`);
for (let n1 = 9; n1 >= 0;) {
    console.log(n1);
    n1 = n1 - 1;


}
//Create a for loop that prints the following:  >1 1 1 2 2 2 3 3 3 4 4 4;
console.log(`>`);
console.log(`>`);
// for (let n1 = 1; n1 < 5; n1++) {

//     console.log(n1);
//     console.log(n1);
//     console.log(n1);


// }


let count = 0;
for (let i = 1; i <= 4;) {

    if ((count !== 0) && (count % 3 === 0)) {
        i++;

    }
    console.log(i);
    count++;
}




console.log(`777777>`);
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);



for (let number = 0; number <= 4; number++) {
    if (count >= 0 && count <= 4) {
        console.log(number)

    }
    count++
}



console.log(`8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat`);
console.log(`========================`);
console.log(``);

console.log(``);


let name = "DCI";
console.log(name);



let l1 = name.substring(0, 1);
let l2 = name.substring(1, 2);
let l3 = name.substring(2, 3);
let l4 = name.substring(3, 4);
let l5 = name.substring(4, 5);
let l6 = name.substring(5, 6);
let l7 = name.substring(6, 7);
let l8 = name.substring(7, 8);
let l9 = name.substring(8, 9);
let l10 = name.substring(9, 10);
let l11 = name.substring(10, 11);
let l12 = name.substring(11, 12);
let l13 = name.substring(13, 14);
let l14 = name.substring(14, 15);
let l15 = name.substring(16, 17);
let l16 = name.substring(17, 18);

let reverse = l16 + l15 + l14 + l13 + l14 + l12 + l11 + l10 + l9 + l8 + l7 + l6 + l5 + l4 + l3 + l2 + l1;
console.log(reverse);
console.log(name === reverse ? 'they match' : 'they dont match');






console.log(`========================`);







let str = "angelika";

let reversed = str.toLowerCase().split("").reverse().join("");
console.log(reversed);
if (reversed === str) {
    console.log(`It is a palindrome`)
} else {
    console.log(`It is not a palindrome`)
}


console.log(`========================`);


// let firstCharacterCount = 0;
// for (let characterCount = str.length; characterCount >= 0; characterCount--) {

//     console.log(firstCharacterCount);
//     let first = str.charAt(firstCharacterCount);


//     let lastCharacter = str.charAt(characterCount);
//     console.log(`last : ${lastCharacter}`);

//     let remain = str.substring(str.length, 0);
//     console.log(remain);

//     let reversed = lastCharacter + remain;
//     console.log(reversed)
// }







let firstCharacterCount = 0;
for (let characterCount = str.length; characterCount >= firstCharacterCount; characterCount--) {
    str = str.toLowerCase();
    //  console.log(characterCount)

    //  console.log(firstCharacterCount)

    let firstCharacter = str.charAt(firstCharacterCount);
    firstCharacter = str.charAt(firstCharacterCount);

    let lastCharacter = str.charAt(characterCount - 1);
     console.log('last character: ' + lastCharacter);
     console.log('first character: ' + firstCharacter);
    firstCharacterCount++;
// console.log(firstCharacterCount)


    if ((firstCharacter !== lastCharacter) && (characterCount<=firstCharacterCount)){
        console.log(` not a palindrome`)
    } else if (characterCount<=firstCharacterCount){
       
        console.log(`it is a palindrome`)
    }
}

