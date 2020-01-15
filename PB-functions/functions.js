console.log();
console.log('**1. Add Up.**');
console.log();

let sum = 0;

function addUp(numOne) {
    for (let i = 1; i <= numOne; i++) {
        sum += i;
    }
    return sum;
}
let output = addUp(13);
console.log(output);

console.log();
console.log('**2. Cubed.**');
console.log();

// let cubed = (numOne, numTwo, numThree) => {
//     if (numOne, numTwo, numThree) {
//         console.log('here');
//         let cubeOne = Math.pow(numOne, 3);
//         let cubeTwo = Math.pow(numTwo, 3);
//         let cubeThree = Math.pow(numThree, 3);
//         return cubeOne + cubeTwo + cubeThree;
//     } else if (numOne) {
//         console.log('or here');
//         let cubeOne = Math.pow(numOne, 3);
//         return cubeOne;
//     } else {
//         console.log('or even here');
//         return 0;
//     }
// };

const cubed = (a, b, c) => {
    let sum = 0;
    if (a) {
        sum += Math.pow(a, 3);
    }
    if (b) {
        sum += Math.pow(b, 3);
    }
    if (c) {
        sum += Math.pow(c, 3);
    }
    return sum;
};

console.log(cubed(1, 5, 9));
console.log(cubed(2));
console.log(cubed());

// JAMILS LÖSUNG
// const cube2 = (...args) => args.length === 0 ? a = 0 : args.map(value => Math.pow(value, 3)).reduce((a, b) => a + b);
// console.log(cubed2(2, 2));

console.log();
console.log('**3. String Check.**');
console.log();

const compare = (word, str) => {
    if (word.substr(0, 3) === str) {
        return true;
    } else {
        return false;
    }
}

let word = 'motorhead';
let str = 'mot';
let result = compare(word, str);
console.log(result);

// // JAMILS LÖSUNG
// const cubed3 = (a, b) => b.slice(0, a.length) === a ? true : false;
// console.log(cubed3('c', 'cheese')); // expected result: true.

console.log();
console.log('**4. Less Than or Equal to Zero?**');
console.log();

const lessThanOrEqualToZero = (a) => a <= 0 ? true : false;

let result4 = lessThanOrEqualToZero(-3);
console.log(result4);

console.log();
console.log('**5. Count Occurrences.**');
console.log();

