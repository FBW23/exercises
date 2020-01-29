
console.log(`// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false`);
const exercise3 = (string, word) => {
    string.toLowerCase();
    word.toLowerCase();
    return string.charAt(0) === word.charAt(0);

}
const firstLetter = exercise3('string', 'string');
console.log(firstLetter);



