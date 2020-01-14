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
for (f = 0; f <=4; f++) {
for ( result2 = 0; result2 <=4; result2++) {
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
    for (let no = 0; no !== bigWord.length - (no+1); no++) {
        
    if (bigWord.charAt(no) !== bigWord.charAt(bigWord.length - (no+1))) {
        console.log('It might be a palindrome');
        isPalindrome = false;
     

    } else {
        
        console.log('it is not a palindrome');
        isPalindrome = true;
        break;
        
    }}

// let reverse = bigWord.reverse

    console.log(checkWord + ' is a Palindrome? Answer is ' + isPalindrome);

    console.log("....................................");

    let nex = "";
for (con = 9; con >= 0; con -=2) {

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
for(let nextSpace = myString.indexOf(' '); nextSpace > -1; nextSpace = myString.indexOf(' ', nextSpace+1)) {

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


