//1. The Greater Numbers. 
//Create a function which accepts two arguments: 
//the first argument being an array of numbers, 
//and the second argument being a number. The 
//function should return the elements of the 
//array which are greater than the second argument

const findGreatest = (arrOfNum, num) => {
  if(arrOfNum[0] > num) {
    return arrOfNum[0];
  } else if(arrOfNum[1] > num) {
    return arrOfNum[1];
  } else if(arrOfNum[2] > num) {
    return arrOfNum[2];
  }
};

console.log(findGreatest([3, 4, 5], 4));

console.log(findGreatest([10, 20, 30], 12));

console.log(findGreatest([0, 10, 3], 4));

//2. For the longest word. Create a function to 
//find the longest word in a given string.

const longestWord = (str) => {
  let strArr = str.split(" "); // turn the string into an array
  let chars = strArr[0]; // add the first element of the array for comparison
  for(let i = 0; i < strArr.length; i++) { // create a loop to go trough the elements in the array
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

const reverse = (num) => {
  return parseInt(num.toString().split('').reverse().join(''));
};

console.log(reverse(34532));
console.log(reverse(111222));

// 4. AEIOU: Vowels. Create a function that takes a 
//string in its parameters and counts the number of 
//vowels (i.e. in English, "a, e, i, o, u") in the string.

const findVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arrStr = str.split(' ').join('').split('');
  for(let i = 0; i < arrStr.length; i ++) {
    console.log( arrStr[i]);
  }


};

findVowels("this is a string");