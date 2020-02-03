// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// i.e.

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1])
        if (myArray[2] > myNumber);
    }
    console.log(myArray[2]);
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// 2. For the longest word. Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞ "development"
console.log('====task2===');

function findLongestWord(str) {
    let array = str.split(" ");
    let maxLength = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength.length) {
            maxLength = array[i];

        };



    }
    console.log(maxLength)
};

findLongestWord("this is a web development course");

//     3. Reverse. Create a function to reverse a number.

// i.e. reverse(34532) ➞ 23543

console.log('====Task 3 ===');
function reverse(number) {

    let numero = number.toString().split('').reverse('').join('');
    console.log(numero);
};
reverse(34532);

// 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

// i.e. findVowels("this is a string") ➞ 4
console.log('====Task 4===');
function vowelCount(str1){
    let vowelList='aeiouAEIOU';
    let vCount=0;
    for(let x=0;x<str1.length;x++){
        if(vowelList.indexOf(str1[x])!== -1)
        { vCount +=1;

        }
      
    }return vCount;

}
console.log(vowelCount('sevandija'));
console.log(vowelCount('paparico'));
console.log(vowelCount('PROXENETA'));
console.log(vowelCount("this is a string"));



console.log( '===== task  5 ====')
// 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNums(arr) {
    let n = arr.length;
    let total = ((n + 2) * (n + 1)) / 2;
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
    };
    console.log(total);
}


missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ;
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ;
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ;


console.log('=======Task 6 =====')

// 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(array)
 {
        let sum = 0, 
            i = array.length;
        while (i--) 
         sum += Math.pow(array[i], 3);
        console.log (sum);
      }

Examples:

sumOfCubes([1, 5, 9]); // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]);
sumOfCubes([]);