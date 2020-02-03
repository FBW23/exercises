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

function missingNums(arr) {
    let n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (let i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(`:::::::::::::::::::::::::::Task 6:::::::::::::::::`)

console.log(`:::::::::::::::::::::::::::Task 7:::::::::::::::::`)

console.log(`:::::::::::::::::::::::::::Task 8:::::::::::::::::`)

console.log(`:::::::::::::::::::::::::::Task 9:::::::::::::::::`)