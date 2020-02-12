const findGreatest = (maArray, myNumber) => {
    if (maArray[0] > myNumber) {
        console.log(maArray[0]);
    } if (maArray[1] > myNumber) {
        console.log(maArray[1]);
    } if (maArray[2] > myNumber) {
        console.log(maArray[2]);
    }
};

findGreatest([3, 4, 5], 4)

// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

const longestWord = (string) => {
    let myArray = string.split(' ');
    console.log(myArray);
    let myArrayLength = myArray.length;
    console.log(myArrayLength);
    let longestWord = myArray[0];
    console.log(myArray);
    for (let i = 0; i < myArrayLength; i++) {
        if (myArray[i].length <= longestWord.length) {
        } else {
            longestWord = myArray[i];
        }
    }
    return longestWord;
};

console.log(longestWord('this is a web development course'));

// i.e. longestWord("this is a web development course") ➞  "development"

// **3. Reverse.**
// Create a function to reverse a number. 
const reverseNumber = (myArray2) => {
    let myString = myArray2.toString();
    let myArray3 = myString.split('');
    let myReverse = myArray3.reverse();
    console.log(myReverse);
    let myString2 = myReverse.join('');
    console.log(myString2);

};
reverseNumber(34532);

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 
const findVowels = (str) => {
    let vowelsCount = 0;
    let myArrayTostring = str.toString();
    console.log(myArrayTostring);
    for (let i = 0; i <= myArrayTostring.length - 1; i++) {
        if (myArrayTostring[i] === "a" || myArrayTostring[i] === "e" || myArrayTostring[i] === "i" || myArrayTostring[i] === "o" || myArrayTostring[i] === "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;

};



console.log(findVowels(["this is a string"]));

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

const missingNums = (array) => {
    let missingNum = 0;
    for (let i = 1; i <= array.length - 1; i++) {
        if (array.indexOf(i) === -1) {
            missingNum = i;
            return missingNum;
        }
    }
};


// Examples: 
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 
const sumOfCubes = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 3);

    } return sum;

};

console.log(sumOfCubes([1, 5, 9]));

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

console.log('==============task 7===========');

const dictionary = (str, array) => {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(str)) {
            empty.push(array[i]);
        }
    } return empty;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:

// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

const evenNums = (array) => {
    let empty = [];
    // empty.push(even);
    for (let i = 1; i <= array; i++) {
        if (i % 2 === 0) {
            empty.push(i);
        }
    }
    return empty;
}

console.log('task 8==============')
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));


console.log(evenNums([8]));

console.log('bonus==============');
// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

const alphaOrder = (str) => {
    let split = str.split('');
    let sort = split.sort();
    let join = sort.join('');

    return join;
};

console.log(alphaOrder("webdev")); 
