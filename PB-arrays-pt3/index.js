//1. Where Have My Four Letter Words Gone? 
//Create a function that takes an array of strings.
//Return all words in the array that are exactly four 
//letters.

console.log("------------------ 1. Where Have My Four Letter Words Gone? ------------------");

const isFourLetters = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));

//2. Months. Create a function that takes a number (from 1 to 12) 
//and return its corresponding month name as a string.

console.log("------------------ 2. Months? ------------------");

const monthName = number => {
  let months = ["0", "January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October",
    "November", "December"
  ];

  return months[number];
};

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

//3. Amplify the Multiples of 4. Create a function that takes an integer 
//and returns an array of integers ascending from 1 to the given number,
// where:
//For each number in the array that can be evenly divided by 4, 
//that number is amplified by 10 (i.e. return 10 times the number).
//If the number cannot be divided evenly by 4, simply return the number.
//The given integer will always be equal to or greater than 1.
//Include the given number (the number in the parameters).

console.log("------------------ 3. Amplify the Multiples of 4. ------------------");

const amplify = num => {
  let basis = 1;
  let amplifyArr = [];
  for (basis; basis <= num; basis++) {
    if (basis % 4 === 0) {
      amplifyArr.push(basis * 10);
    } else {
      amplifyArr.push(basis);
    }
    // console.log(basis);
  }
  return amplifyArr;
};

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));

//4. One is not like the others... 
//Create a function that takes an array of numbers and return the 
//number that's unique.

console.log("------------------ 4.One is not like the others... ------------------");
// CHECK LATER !!!!!! <---------------------!!!!!!!!!!-----------------------
// const unique = arr => {
//   let odd;
//   for (let i = 0; i < arr.length; i++) {
//     //  console.log(arr[i]);
//     if (arr.indexOf(arr[i], i + 1) === -1) {
//       return odd = arr[i];
//     }
//   }
// };

// console.log(unique([3, 3, 3, 7, 3, 3]));
// console.log(unique([0, 0, 0.77, 0, 0]));
// console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

const unique2 = myArray => {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray.indexOf(myArray[i]) === myArray.lastIndexOf(myArray[i])) {
      return myArray[i];
    }
  }
};

console.log(unique2([3, 3, 3, 7, 3, 3]));
console.log(unique2([0, 0, 0.77, 0, 0]));
console.log(unique2([0, 1, 1, 1, 1, 1, 1, 1]));


//5. Word Ranking. Create a function that takes a string of words and 
//returns the highest scoring word. Each letter of a word scores points 
//according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
//The returned string should only contain alphabetic characters (a-z).
//Preserve case in the returned string (see 4th example above).

console.log("------------------ 5. Word Ranking. ------------------");


// 6. c4n y0u r34d th15? Create a function that takes a string as an 
//argument and returns a coded (h4ck3r 5p34k) version of the string. 
//NB: for your program to work properly, the function should replace 
//all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

console.log("------------------ 6. c4n y0u r34d th15? ------------------");

// const hackerSpeak = str => {
//   let newArr = str.split(' ');
//   let hackArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     hackArr.push(newArr[i].replace('a', '4').replace('e', '3').replace('i', '1').replace('o', '0').replace('o', '0').replace('s', '5').replace('e', '3'));
//     //  console.log(hackArr);
//   }
//   return hackArr.join(' ').toString();
// };
// console.log("------------------ 6. c4n y0u r34d th15? ------------------");

const hackerSpeak = str => {
  let newArr = str.split(' ');
  let hackArr = [];
  for (let i = 0; i < newArr.length; i++) {
  
    hackArr.push(newArr[i].replace(/a/g,"4").replace(/o/g,"0").replace(/e/g, "3").replace(/i/g, "1").replace(/s/g, "5"));
    //  console.log(hackArr);
  }
  return hackArr.join(' ').toString();
};

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));


//Bonus Questions

//1. Is it Symmetrical? Create a function that takes a number as an 
//argument and returns true or false depending on whether the number 
//is symmetrical or not. NB: A number is symmetrical when it is the same as 
//its reverse.
console.log("------------------ *BONUS* ------------------");
console.log("------------------ Is it Symmetrical? ------------------");
