
console.log(`5. Count Occurrences 
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

// i.e. 
// countOccurrences("this is a string", "i") ➞ 3 `);

const exercise5 = (string, letter) => {
    let numberOfLetter = 0;
    let firstMatch = 0;
    for (let i = 0; i < string.length; i++) {

        if (string.indexOf(letter, firstMatch) > -1) {
            numberOfLetter++;

            firstMatch = string.indexOf(letter, firstMatch) + 1;
        }
    }
    return numberOfLetter;
}
let number = exercise5('motto', 'o');
console.log(number);

