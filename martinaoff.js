// 1.First Exercise for today, if you have finished with fibonacci and his horny rabbits: You remember when we did the greatest common divisor with a loop? Now please do the same, but with a recursive function. Here is also a good article with some pseudocode. Please make a function, which calls itself as given in this pseudocode. https://www.dyclassroom.com/recursion-algorithm/greatest-common-divisor-gcd. When you are ready, you can send me your code to review via Slack. 


const gcd = (num1, num2) => {

    if (num2 === 0) {
        return num1;
    } else {
        return gcd(num2, num1 % num2);
    }
}
console.log(gcd(20, 8));





// 2. Second Exercise: Write a function, that makes a little countdown. So it should be possible, to pass a number like 10 to this function, which then writes this number to the console.log, and afterwards calling itself with a smaller number until 0. So for this example it should write 10 9 8 7 6 5 4 3 2 1 0 in each line. BTW: There is no need for arrays to solve this. function countdown(number) { // your code here! } countdown(10); If you experience problems, please watch this video: https://www.youtube.com/watch?v=lMBVwYrmFZQ You should be able to write that after watching it! (edited) 

const countback = (num) => {

    if (num === 0) {
        return `${num}`;
    } else {
        return `${num} ${countback(num-1)}`;
    }
}
console.log(countback(10));





// 3.3. Third Exercise: We have defined a function named rangeOfNumbers with two parameters. The function should return a console.log which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
// Examples: rangeOfNumbers(1, 5) should return 1, 2, 3, 4, 5 on the console.
// rangeOfNumbers(6, 9) should return 6, 7, 8, 9 on the console.
// rangeOfNumbers(4, 4) should return a 4 on the console (edited) 

const rangeOfNumbers = (startNum, endNum) => {

    if (startNum === endNum) {
        return `${startNum} `;
    } else {
        // console.log(startNum);
        // console.log(endNum);
        return `${startNum} ${rangeOfNumbers(startNum+1,endNum)}`;
    }

}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));




// 5. You remember when we did the check for Palindromes? Given a string, write a recursive function that check if the given string is palindrome, else not palindrome.
// https://edabit.com/challenge/K595YtSroZHAAzvhW
// Examples :
// Input : malayalam
// Output : true
// Reverse of malayalam is also
// malayalam.
// Input : max
// Output : false
// Reverse of max is not max.
// Some Hints:
// 1) If there is only one character in string
//    return true.
// 2) Else compare first and last characters
//    and recur for remaining substring.

const isPalindrome = str => {
    let low = str.toLowerCase();

    if (low.length < 2) {
        return true;
    } else if (low.charAt(0) === low.charAt(low.length - 1)) {

        return `Reverse of ${low} is also ${str} : ${isPalindrome(low.slice(1, low.length - 1))}`;
        //return isPalindrome(low.slice(1, low.length - 1));


    } else {
        return `Reverse of ${low} is not ${str} : ${false}`;
    }
}

console.log(isPalindrome('malayalam'));


// 6. This is a bigger thing, so please do it together with a least one spare partner. Pair Program: Definition of Tower of Hanoi Problem:
// Tower of Hanoi is a mathematical puzzle which consists of three towers or rods and also consists of n disks. The main aim of this puzzle is to move all the disks from one tower to another tower. In order to move the disks, some rules need to be followed. The rules are:-
// Only one disk can be moved at a time.
// The only small disk should have stayed at the top. That means no disk should be placed on top of a disk.
// A disk can be moved from one tower to another tower only if there is no disk on the top of the disk to be moved.
// Tower of Hanoi algorithm can be solved in (2 pow n) – 1 steps. For example, if there are 3 disks, then the time to complete this algorithm takes (2 pow 3) -1 = 8 – 1 = 7 steps.
// See this animation below to understand more clearly:

// hanoi = (n) => {
//     let source =n;
//     let middle = n+1;
//    let destination = n+(middle) - (n - 1);
//    console.log(source)
//    console.log(middle)
//    console.log(destination)

//    if(destination<source){
//        return 

// }
// console.log(hanoi(3))



// BONUS just in case you have solved everything else!
// 7. 
// Sailors, coconuts and a monkey problem
// Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.
// That night the first sailor wakes up and decides to take his first share early so tries to divide the pile of coconuts equally into five piles but finds that there is one coconut left over, so he tosses it to a monkey and then hides “his” one of the five equally sized piles of coconuts and pushes the other four piles together to form a single visible pile of coconuts again and goes to bed.
// To cut a long story short, each of the sailors in turn gets up once during the night and performs the same actions of dividing the coconut pile into five, finding that one coconut is left over and giving that single remainder coconut to the monkey.
// In the morning (after the surreptitious and separate action of each of the five sailors during the night), the remaining coconuts are divided into five equal piles for each of the sailors, whereupon it is found that the pile of coconuts divides equally amongst the sailors with no remainder. (Nothing for the monkey in the morning.)
// The task
// Calculate the minimum possible size of the initial pile of coconuts collected during the first day.
// Use a method that assumes an answer is possible, and then applies the constraints of the tale to see if it is correct. (I.e. no applying some formula that generates the correct answer without integer divisions and remainders and tests on remainders; but constraint solvers are allowed.)
// Calculate the size of the initial pile of coconuts if six sailors were marooned and went through a similar process (but split into six piles instead of five of course).
// Show your answers here.




// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Examples
// howManyTimes(5) ➞ "Edaaaaabit"

// howManyTimes(0) ➞ "Edbit"

// howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"


 numberTimesLetter = (n) => {
    let letter = 'a';

  if (letter.length <= n) {
         console.log(n)
       

  return `{numberTimesLetter(n-1)}`;
 
     }

 return letter

 }
 console.log(numberTimesLetter(4))


 // Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Examples
// howManyTimes(5) ➞ "Edaaaaabit"

// howManyTimes(0) ➞ "Edbit"

// howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"


numberTimesLetter = (n) => {
    //    let letter = 'a';
    //    let middle=''


    //     if (letter.length <= n) {
    //          console.log(n)
    //     //    letter += letter;

    //      middle= `${letter+ numberTimesLetter(n-1)}`;
    //     }
    //     string=`Ed${middle}bit`;

    // return string
    return "Ed" + "a".repeat(n) + "bit";
}
console.log(numberTimesLetter(6))

// Not a function yet
let repeatLetter='a';
let myNumber=0;
console.log(`Ed${repeatLetter.repeat(myNumber)}bit`);



//Not recursive
const howManyTimes=(n)=>{

    return(`Ed${repeatLetter.repeat(n)}bit`);
}
console.log(howManyTimes(5));
console.log(howManyTimes(0));
console.log(howManyTimes(10));


//recursive











// Write a function that finds the sum of the first n natural numbers. Make your function recursive.

// Examples
// sum(5) ➞ 15
// // 1 + 2 + 3 + 4 + 5 = 15

// sum(1) ➞ 1

// sum(12) ➞ 78

naturalNumber = (n) => {
    let sum = 0;
    if (n > 0) {
        sum += n + naturalNumber(n - 1)
    } else {
        return n;
    }

    return sum
}
console.log(naturalNumber(6));




// Write a function that recursively returns the number of vowels in a string.

// const vowels = (str) => {
//         let n = 0;
//         let vowelCount = 0;
//         vowels(n++);
//         if(str.length>n){      
//              if ((str.charAt(n) === 'a') || (str.charAt(n) === 'e') || (str.charAt(n) === 'i' )|| (str.charAt(n) === 'o' )|| (str.charAt(n) === 'u')) {
//                             vowelCount ++
//                         }}
//                         return vowelCount;

//                     }
//                     console.log(vowels('apple'));





// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Examples
// howManyTimes(5) ➞ "Edaaaaabit"

// howManyTimes(0) ➞ "Edbit"

// howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"


numberTimesLetter = (n) => {
    //    let letter = 'a';
    //    let middle=''


    //     if (letter.length <= n) {
    //          console.log(n)
    //     //    letter += letter;

    //      middle= `${letter+ numberTimesLetter(n-1)}`;
    //     }
    //     string=`Ed${middle}bit`;

    // return string
    return "Ed" + "a".repeat(n) + "bit";
}
console.log(numberTimesLetter(6))

// Not a function yet
let repeatLetter='a';
let myNumber=0;
console.log(`Ed${repeatLetter.repeat(myNumber)}bit`);



//Not recursive
const howManyTimes=(n)=>{

    return(`Ed${repeatLetter.repeat(n)}bit`);
}
console.log(howManyTimes(5));
console.log(howManyTimes(0));
console.log(howManyTimes(10));










// Write a function that finds the sum of the first n natural numbers. Make your function recursive.

// Examples
// sum(5) ➞ 15
// // 1 + 2 + 3 + 4 + 5 = 15

// sum(1) ➞ 1

// sum(12) ➞ 78

naturalNumber = (n) => {
    let sum = 0;
    if (n > 0) {
        sum += n + naturalNumber(n - 1)
    } else {
        return n;
    }

    return sum
}
console.log(naturalNumber(6));




// Write a function that recursively returns the number of vowels in a string.

// const vowels = (str) => {
//         let n = 0;
//         let vowelCount = 0;
//         vowels(n++);
//         if(str.length>n){      
//              if ((str.charAt(n) === 'a') || (str.charAt(n) === 'e') || (str.charAt(n) === 'i' )|| (str.charAt(n) === 'o' )|| (str.charAt(n) === 'u')) {
//                             vowelCount ++
//                         }}
//                         return vowelCount;

//                     }
//                     console.log(vowels('apple'));