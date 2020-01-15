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

let word = 'cheese';
let str = 'bft';
let result = compare(word, str);
console.log(result);