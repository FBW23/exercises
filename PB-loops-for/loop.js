let i = "bottle of the wall";
let sum = 0;

while (i < 5) {
    sum = sum + 1;
    console.log(i);
    i++;

}
for (i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log("There is One Bottle of Beer on the Wall");

    } else if (i === 2) {
        console.log("There is Two Bottle of Beer on the Wall");
    } else if (i === 3) {
        console.log("There is Three Bottle of Beer on the Wall");
    } else if (i === 4) {
        console.log("There is Four Bottle of Beer on the Wall");
    } else if (i === 5) {
        console.log("There is Five Bottle of Beer on the Wall");
    }
    // console.log("There is " + i + " Bottle of Beer on the Wall");
}

console.log("...........................................");


for (let n = 1; n <= 20; n++) {
    //  if (n === 0) {
    //     console.log(n + " is even");
    // }

    if (n % 2) {
        console.log(n + " is odd");
    } else {
        console.log(n + " is even");
    }
}

console.log("........................................");

for (let m = 0; m <= 10; m++) {
    if (m * 9) {
        console.log(m * 9);
    }
}

console.log("......................................");

for (let z = 1; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log(z + " FizzBuzz");
    } else if (z % 3 === 0) {
        console.log(z + " Buzz");
    } else if (z % 5 === 0) {
        console.log(z + "  Fizz");
    } else {
        console.log(z);
    }
}

console.log(".......................................");


let que = 0;
for (let time = 0; time <= 1000; time++) {
    if (time % 3 === 0 && time % 5 === 0) {
        // console.log(time);
        que += time;
        console.log(que);
    }
}

console.log(".......................................");

let out = 0;
for (let put = 0; put <= 1000; put++) {
    if (put % 100 === 0) {
        console.log(put);
    }
}

console.log(".......................................");

let set = 0;
for (let double = 1; double <= 128;) {
    console.log(double);
    double += double;

}

console.log(".......................................");

let set1 = 0;
for (let double2 = 0; double2 <= 10; double2++) {
    if (double2 % 2 === 0) {
        console.log(double2);
    }
}

console.log(".......................................");

let set2 = 0;
for (let double3 = 1; double3 <= 15; double3++) {
    if (double3 % 3 === 0) {
        console.log(double3);
    }
}

console.log(".......................................");

let numb = 0;
for (number = 9; number >= 0; number--) {
    numb += number;
    console.log(number);
}

console.log(".......................................");

let numb1 = "";

for (number1 = 1; number1 <= 4; number1++) {
    numb1 = numb1 + number1 + number1 + number1;
}
console.log(numb1);

console.log(".......................................");

let numb2 = "";
for (number2 = 0; number2 <= 4; number2++) {
    numb2 = numb2 + number2;

}
console.log(numb2 + numb2 + numb2);

console.log("....................................");

let numb3 = "";
for (q = 1; q <= 4; q++) {
    for (result1 = 1; result1 <= 3; result1++) {

        console.log(q);
        numb3 += q;
    }
}

console.log(numb3);

console.log('............................');

let num4 = "";
for (f = 0; f <= 4; f++) {
    for (result2 = 0; result2 <= 4; result2++) {
        num4 += result2;

    }
}
console.log(num4);


console.log("....................8...............");

let checkWord = 'Mariam';
bigWord = checkWord.toUpperCase();
console.log(bigWord);

let isPalindrome = false;

// for (let no = 0; no < bigWord.length / 2; no++) {
for (let no = 0; no !== bigWord.length - (no + 1); no++) {

    if (bigWord.charAt(no) !== bigWord.charAt(bigWord.length - (no + 1))) {
        console.log('It might be a palindrome');
        isPalindrome = false;


    } else {

        console.log('it is not a palindrome');
        isPalindrome = true;
        break;

    }
}

// let reverse = bigWord.reverse

console.log(checkWord + ' is a Palindrome? Answer is ' + isPalindrome);

console.log("....................................");

let nex = "";
for (con = 9; con >= 0; con -= 2) {

    nex += con;
}
console.log(nex);

console.log("..................Allteration.........................");


// let bonus = 'Peter Picker picked pickle';
// big = bonus.toUpperCase();
// console.log(big);
// let isAlliteration = false;

//     for (let ni = 0; ni !== big.length - (ni+1); ni++) {

//     if (big.charAt(ni) !== big.charAt(big.length - (ni+1))) {

//         isAlliteration = false;

//     } else {
//              // console.log('it is not a Alliteration');
//         isAlliteration = true;
//         break;
//      }}
//     console.log(bonus + ' is a Alliteration? Answer is ' + isAlliteration);


console.log("..................................");

let varOne = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++)
        varOne++;
}
console.log(varOne);

console.log("..............Allteration...................");

let isAlliteration = false;
const input = 'Peter Picker picked Pickles';
const myString = input.toLowerCase().trim(); // formating into the correct string

const firstChar = myString.charAt(0); // this will make all small p from the input up
console.log(firstChar);
const nextSpace = myString.indexOf(' '); // indexOf is to search 
for (let nextSpace = myString.indexOf(' '); nextSpace > -1; nextSpace = myString.indexOf(' ', nextSpace + 1)) {

    console.log(myString.charAt(nextSpace + 1));
    if (nextSpace === myString.charAt(nextSpace + 1)) {
        console.log("It's a match, it could be an alliteration");
        isAlliteration = true;
    } else {
        console.log("Its an alliteration");
        isAlliteration = false;
        break;
    }
}
console.log('the given example "' + input + '" is an Alliteration: ' + isAlliteration);
console.log(".................................................");

// Example of LOOPS *****

let name = 'Julien';
//console.log('Bless you' + name );
name = 'Constantine';
//console.log('Bless you' + name);
// Thats not following which principle?
// DONT REPEAT YOURSELF.
let asLongAsSomebodySneezes = 0;
// while (condition) { // loop code }
// runs at least zero times!
while (asLongAsSomebodySneezes < 9) {
    console.log(asLongAsSomebodySneezes + '. WHILE: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
    asLongAsSomebodySneezes++;
}
asLongAsSomebodySneezes = 0; // reset
name = 'Constantine';
// do {} while (condition)
// runs at least once !
do {
    console.log(asLongAsSomebodySneezes + '. DO-WHILE: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
    asLongAsSomebodySneezes++;
} while (asLongAsSomebodySneezes < 9)
// reset what?
name = 'Constantine';
// for (condition) { // loop code }
let numberOfStudents = 9;
for (let i = 0; i < numberOfStudents; i++) {
    // loop content?
    console.log(i + '. FOR LOOP: Bless you ' + name);
    switch (name) {
        case 'Constantine':
            name = 'Bendis';
            break;
        case 'Bendis':
            name = 'Nagster';
            break;
        case 'Nagster':
            name = 'Balasz';
            break;
        case 'Balasz':
            name = 'Joao';
            break;
        case 'Joao':
            name = 'Julien';
            break;
        case 'Julien':
            name = 'Nicolo';
            break;
        case 'Nicolo':
            name = 'Bianca';
            break;
        default:
            name = 'Julia';
    }
}

// GENERAL RULE********
// LOOP HAS ALWAYS 4 THINGS

// 1) ITERATOR => OR ENDLESS!
// 2) CONDITION => OR ENDLESS!
// 3) INCREMENT => ENDLESS!
// 4) BLOCK OF CODE => OR MEANINGLESS!


// You can decide which one you like best!
// In most cases, all of those are applicable!
// Only be careful with Do-While, it will be executed at least once.
// / Make sure, that thats okay, too! Or use while/for if in doubt!


console.log(".................Exercise.....................");

// 1) Write a JavaScript program to sum the multiples of 3 and 5 under 1000

// for (let under = 3; under <= 1000; under += 3) {
//     console.log(under * 5);
// }

let result3 = 0;
for (let under = 0; under < 1000; under++) {
    if ((under % 3 === 0) || (under % 5 === 0)){
        result3 += under;
    }
   
}
console.log(result3);

console.log("....................2......................");
// 2) Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

let divisor1 = 12; //First number
let divisor2 = 24; //Second number 
let gcd = 1;
while (divisor1 != divisor2) {
    if (divisor1 > divisor2) {
        divisor1 -= divisor2;
    } else {
        divisor2 -= divisor1;
    }
}
gcd = divisor1;
console.log(gcd);

console.log("....................... 3....................");

// 3) Make a function that prints each digit of the given number in a separate line:
// Given 123456000 should print in single lines: 1 - 2 - 3 - 4 - 5- 6- 0 -0 -0
let num03 = '12345600';
for (num04 = 0; num04<num03.length; num04++) {
    console.log(num03.charAt(num04));
}

console.log("...............4......................");

// 4) According to Wikipedia a happy number is defined by the following process :
//"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
//Write a JavaScript program to find and print the first 5 happy numbers


console.log("....................5..................");
// 5) Write a JavaScript program to find the armstrong numbers of 3 digits. 
//Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its 
//digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371

function three_digits() {
    for (let i = 1; i < 10; ++i) {
        for (let j = 0; j < 10; ++j) {
            for (let k = 0; k < 10; ++k) {
                let pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                let plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
console.log(three_digits());

console.log("................5a......................");

for (let start = 100; start < 1000; start++) {
    let firstNumber = Math.floor(start / 100); // 1
    let secondNumber = Math.floor((start - firstNumber * 100) / 10); // 0
    let modulo = start % 10; // 0
    let calculation = Math.pow(firstNumber, 3) + Math.pow(secondNumber, 3) + Math.pow(modulo, 3);
    if (calculation === start) {
        console.log('We found an Armstrong Number ' + start);
    }
}

console.log("...............Exercise.'Days'+'Months'+'Year'..................");


// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
// if(dd<10) {
// dd='0'+dd
// }
// if(mm<10) {
// mm='0'+mm
// }
// today = yyyy+'/'+mm+'/'+dd;
// console.log(today);

let someDate = new Date('2017-05-26');
someDate.setDate(someDate.getDate() + 1000); //number  of days to add, e.x. 15 days
let dateFormated = someDate.toISOString().substr(0,10);
console.log(dateFormated);