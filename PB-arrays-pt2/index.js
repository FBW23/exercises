//1. The Greater Numbers. 
//Create a function which accepts two arguments: 
//the first argument being an array of numbers, 
//and the second argument being a number. The 
//function should return the elements of the 
//array which are greater than the second argument
console.log("1. The Greater Numbers._________________________________________________________")

const findGreatest = (arrOfNum, num) => {
  if (arrOfNum[0] > num) {
    return arrOfNum[0];
  } else if (arrOfNum[1] > num) {
    return arrOfNum[1];
  } else if (arrOfNum[2] > num) {
    return arrOfNum[2];
  }
};

console.log(findGreatest([3, 4, 5], 4));

console.log(findGreatest([10, 20, 30], 12));

console.log(findGreatest([0, 10, 3], 4));

//2. For the longest word. Create a function to 
//find the longest word in a given string.
console.log("2. For the longest word._________________________________________________________")

const longestWord = (str) => {
  let strArr = str.split(" "); // turn the string into an array
  let chars = strArr[0]; // add the first element of the array for comparison
  for (let i = 0; i < strArr.length; i++) { // create a loop to go trough the elements in the array
    //console.log(strArr[i]); // 
    if (strArr[i].length > chars.length) { // compare every elements length to the length of the first element
      chars = strArr[i]; // saves the longest string in the array
    }
  }
  return `The  longest word is: ${chars}`; // prints it to the screen
};

console.log(longestWord("this is a web development course"));
console.log(longestWord("123 1234 12345 123456"));
console.log(longestWord("1234567 123 1234 12345 123456"));

//3. Reverse. Create a function to reverse a number.
console.log("3. Reverse._________________________________________________________")

const reverse = (num) => {
  return parseInt(num.toString().split('').reverse().join(''));
};

console.log(reverse(34532));
console.log(reverse(111222));

// 4. AEIOU: Vowels. Create a function that takes a 
//string in its parameters and counts the number of 
//vowels (i.e. in English, "a, e, i, o, u") in the string.

// const findVowels = (str) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let arrStr = str.split(' ').join('').split('');
//   for(let i = 0; i < arrStr.length; i ++) {
//     console.log( arrStr[i]);
//   }


// };

// findVowels("this is a string");
console.log("4. AEIOU: Vowels._________________________________________________________")

// DA PREGLEDAM 
const findVowels = str => {
  let sum = 0;
  let strSpl = str.split("");
  // console.log(strSpl);
  for (let i = 0; i < strSpl.length; i++) {
    if (strSpl[i] === "a" || strSpl[i] === "e" || strSpl[i] === "o" || strSpl[i] === "i" || strSpl[i] === "u") {
      //console.log("sum ¬>", sum);
      sum += 1;
    }
  }
  return sum;
}

console.log(findVowels("this is a string"));

const findVowels2 = str => {
  let sum = 0;
  let strVowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (strVowels.indexOf(str[i]) !== -1) {
      sum++;
    }
  }
  return sum;
}
console.log(findVowels2("this is a string"));

//5. Missing Number. Create a function that takes an 
//array of all integers between 1 and 10 (excluding one) 
//and returns the missing integer.
console.log("5. Missing Number_________________________________________________________")

const missingNums = (arr) => {
  let missing;
  for (var i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;
};

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6. Cubed. Create a function that takes in an 
// array of numbers and returns the sum of its cubes.
console.log("6. Cubed._________________________________________________________")

const sumOfCubes = (arr) => {
  let sum = [];
  let finalSum = [];
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {

    sum.push(arr[i] ** 3);
  }
  finalSum = sum;
  for (let i = 0; i < finalSum.length; i++) {
    newSum += finalSum[i];
  }
  return newSum;
};

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([0]));

// BETTER WAY ¬>
const sumOfCubes2 = (myArray) => {
  let cube = 0;
  for (let i = 0; i < myArray.length; i++) {
    cube += Math.pow(myArray[i], 3)
  }
  return cube;
};

console.log(sumOfCubes2([1, 5, 9]));
console.log(sumOfCubes2([2]));
console.log(sumOfCubes2([0]));

//7. Dictionary. Create a function that takes an 
//initial string and an array of words, and returns a 
//filtered array of the words that start with the same letters 
//as the initial string.
console.log("7. Dictionary._________________________________________________________")
const dictionary = (str, arr) => {
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newStr = arr[i];
    if (newStr.startsWith(str)) {
      // console.log(newStr);
      emptyArr.push(newStr);
    }
  }
  return emptyArr;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

//8. Even Number Generator. Create a 
//function that finds all even numbers from 1 to the given number.
console.log("8. Even Number Generator._________________________________________________________")

const evenNums = num => {
  let newArr = [];
  for (; 0 < num; num--) {
    if (num % 2 === 0) {
      // newArr.push(num);
      newArr.unshift(num);
    }
  }
  return newArr;
};

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));
console.log(evenNums());


// Bonus: Alphabetical Order. Create a function to 
//sort a string into alphabetical order. NB: assume 
//numbers, symbols and punctuation are not included 
//in the string.
console.log(". BONUS ._________________________________________________________")

const alphaOrder = str => {

  let newArr = str.split('').sort().join('');
  return newArr;
}

console.log(alphaOrder("webdev"));