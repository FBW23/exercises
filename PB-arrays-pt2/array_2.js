console.log(`_______________________Number1____________________`);
const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1]);
    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);
    }
}

findGreatest([3, 4, 5], 4);
findGreatest([0, 10, 3], 4);
findGreatest([10, 20, 30], 12);



console.log(`_______________________Number2____________________`);
const longestWord = (newWord) => {
    let exeArray = newWord.split(" ");
    console.log(exeArray);
    let longest;
    if (exeArray[0].length > exeArray[1].length) {
        longest = exeArray[0];
        console.log(longest);
    }
    if (exeArray[1].length > exeArray[2].length) {
        longest = exeArray[1];
        console.log(longest);
    }
    if (exeArray[2].length > exeArray[3].length) {
        longest = exeArray[0];
        console.log(longest);
    }
    if (exeArray[3].length > exeArray[4].length) {
        longest = exeArray[3];
        console.log(longest);
    }
    if (exeArray[4].length > exeArray[5].length) {
        longest = exeArray[4];
        console.log(longest);
    }
    console.log(exeArray[5]);

}
console.log(longestWord('this is a web development course'));

console.log(`_______________________Number3____________________`);








const reversedNum = num => num.toString().split('').reverse().join('');



console.log(reversedNum(34532));





console.log(`_______________________Number4____________________`);




const myVowels = mV => mV.replace(/[^aeuio]/gi, '').length;



console.log(myVowels('aeiou'));
console.log(myVowels('this is a string'));




// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 
console.log(`_______________________Number5____________________`);

const missingNums = (nummer) => {
    let missingU = 0;
    for (let i = 1; i <= nummer.length + 1; i++) {
        if (nummer.indexOf(i) === -1) {
            missingU = i;
        }
    }
    return missingU;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

console.log(`_______________________Number6____________________`);


const sumOfCubes = (cub) => {
    let numCube = 0;
    for (let z = 0; z < cub.length; z++) {
        numCube += Math.pow(cub[z], 3); // cub[z] ** 3;
    }
    return numCube;
    //Math.pow(cub[0],3)+Math.pow(cub[1],3)+Math.pow(cub[2],3);
};
console.log(sumOfCubes([1, 5, 9]));

console.log(`_______________________Number7____________________`);

const dictionary = (startWord, wholeWord) => {
    let newDictionary = [];
    for (let w = 0; w < wholeWord.length; w++) {
        if (wholeWord[w].startsWith(startWord)) {
            newDictionary.push(wholeWord[w]);
        }
    }
    return "We have '" + newDictionary.length + "' match word '" + newDictionary + "'";
    // console.log(newDictionary); 
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

console.log(`_______________________Number7____________________`);
const evenNums = (shuoldEven) => {
    let newNumber = [];
    for (let k = 1; k <= shuoldEven; k++) {
        if (k % 2 === 0) {
            newNumber.push(k)
        }
    }
    return newNumber;

};

console.log(evenNums(8));
console.log(evenNums(7));
console.log(evenNums(2));