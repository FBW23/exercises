console.log(`:::::::::::::::::::::::::::Task 1:::::::::::::::::`)
const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log((myArray[1]));
    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);
    }
};
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);
console.log(`:::::::::::::::::::::::::::Task 2:::::::::::::::::`)

function longestWord(text) {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }

    return result;
}
console.log(longestWord("this is a web development course"));
console.log(`:::::::::::::::::::::::::::Task 3:::::::::::::::::`)

function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse(34532));

console.log(`:::::::::::::::::::::::::::Task 4:::::::::::::::::`)
//Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
const vowelCount = s => s.replace(/[^aeiou]/gi, '').length;
console.log(vowelCount("this is a string"));
console.log(`:::::::::::::::::::::::::::Task 5:::::::::::::::::`)

function missingNums(x) {
    let n = x.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (let i = 0, len = x.length; i < len; i++) {
        sum += x[i];
    }

    return expectedSum - sum;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(`:::::::::::::::::::::::::::Task 6:::::::::::::::::`)

function sumOfCubes(ofCube) {
    let sum = 0;
    let i = ofCube.length; {
        while (i--)
            sum += ofCube[i] ** 3;
        return sum;
    }
}
console.log(sumOfCubes([1, 5, 9])); //855
console.log(sumOfCubes([2])); //8
console.log(sumOfCubes([])); //0

console.log(`:::::::::::::::::::::::::::Task 7:::::::::::::::::`)
const dictionary = (a, b) => {
    let c = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i].startsWith(a)) {
            c.push(b[i]);
        }
    }
    return c;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));
console.log(`:::::::::::::::::::::::::::Task 8:::::::::::::::::`)
const evenNums = (m) => {
    let q = [];
    for (let i = 1; i <= m; i++) {
        if (i % 2 === 0) {
            q.push(i);
        }
    }
    return q;
};
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));


console.log(`:::::::::::::::::::::::::::Bonus:::::::::::::::::`)
const alphaOrder = function (text) {
    return text.split('').sort().join('');
};
console.log(alphaOrder("webdev"));
console.log(alphaOrder("WebdeV"));