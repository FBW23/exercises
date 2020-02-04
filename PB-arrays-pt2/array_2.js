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

const missingNums =(nummer)=> {
let missingU = -1;
for(let i =0;i<=nummer.length;i++){
    if (nummer.indexOf(i) === -1) {
        missingU = i;
    }
}return missingU;
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
