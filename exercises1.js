// First Exercise for today, if you have finished with fibonacci and his horny rabbits: You remember when we did the greatest common divisor with a loop? Now please do the same, but with a recursive function. Here is also a good article with some pseudocode. Please make a function, which calls itself as given in this pseudocode. https://www.dyclassroom.com/recursion-algorithm/greatest-common-divisor-gcd. When you are ready, you can send me your code to review via Slack. 
// // 



// 2. Second Exercise: Write a function, that makes a little countdown. So it should be possible, to pass a number like 10 to this function, which then writes this number to the console.log, and afterwards calling itself with a smaller number until 0. So for this example it should write 10 9 8 7 6 5 4 3 2 1 0 in each line. BTW: There is no need for arrays to solve this. function countdown(number) { // your code here! } countdown(10);


let countdown = function countdown(i) {

    //loop while the passed in parameter "i" is >= 0
    if (i >= 0) {
        //return a space concatenated with the value of i
        //and call the countdown function again (by
        //concatenating the result) to continue counting down

        return ' ' + i + countdown(i - 1);

    };
    // console.log( countdown());
    return ' Boom';
};
console.log(countdown(10));

// 3. Third Exercise: We have defined a function named rangeOfNumbers with two parameters. The function should return a console.log which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
// Examples: rangeOfNumbers(1, 5) should return 1, 2, 3, 4, 5 on the console.
// rangeOfNumbers(6, 9) should return 6, 7, 8, 9 on the console.
// // rangeOfNumbers(4, 4) should return a 4 on the console (editado) 
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const newArray = rangeOfNumbers(startNum, endNum - 1);
        newArray.push(endNum);
        return newArray;
    }

};
console.log(rangeOfNumbers(1, 5)); //[ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9));

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
// //    and recur for remaining substring.

const palindrome = (s = "", l = 0, r = s.length - 1) =>
    r - l < 2 ?
    true :
    s[l] === s[r] && palindrome(s, l + 1, r - 1)

console.log(palindrome("maximiliam") // false
    , palindrome("rotor") // true
    , palindrome("racecar") // true
    , palindrome("wow") // true
    , palindrome("i") // true
)

// function countCharacter(str, char) {

//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char)
//             count++;
//     }
//     return count;
// }
// console.log(countCharacter('banana', 'c'));


function word(str, char) {
    let count = 0;
    for (let i= 0; i < str.length; i++){
    if (str.charAt(i) === char) 
    count++;
        
    }
    return count;

}
console.log(word('proparoxitona', 'o'));

