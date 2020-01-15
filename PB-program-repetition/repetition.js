<<<<<<< HEAD
let i = 0;

while (i < 15) {
    console.log('loop start ->', i);
    i++;
    console.log('loop end ->', i);
    console.log();
}

let sum = 0;
i = 0;

while (i < 20) {
    i++;
    sum += i;
    console.log();
}
console.log('final sum ->', sum);
console.log();
console.log();

do {
    i = i + 1;
    console.log('the number is->', i);
} while (i < 20);
=======
// # Repeat

// ## 1. Run Along
// Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

let i = 0;

while (i < 15) {
    console.log('loop starts' + i);
    i++;
    console.log('loop ends' + i);
}

console.log(i);

// ## 2. Add it up 
// Create a function that adds numbers from 1-20 together using a `while` loop.

let n = 0;
let sum = 0;

while (sum < 20) {
    console.log('loop starts' + sum);
    n ++;
    sum += n;
    console.log('loop ends' + sum);
}

console.log(sum);

// ## 3. Do this while i...
// Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 


do {
    i++;
    console.log(i);
} while (i < 20);

console.log('The number is' + i);

let isAlliteration = false;
const input= 'Peter Picker picked Pickles';
const myString = input.toLocaleLowerCase();
const firstChar = myString.charAt(0); //p
let nextSpace = myString.indexOf(' ');

for (let i = 0; nextSpace !== -1; i++){
    console.log(nextSpace);
    nextSpace = myString.indexOf('', nextSpace + 1);
    if(firstChar === myString.charAt( nextSpace + 1)){
        console.log('it could be!');
        isAlliteration = true;
    } else{
        console.log('not an alliteration');
    }
    nextSpace = myString.indexOf(' ', nextSpace + 1);
    isAlliteration = false;
}

console.log("the given example" + input + "is an alliteration: " + isAlliteration);
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a
