console.log(`// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true`);




const exercise9 = (string) => {
    let answer = false;
    if (string.indexOf('Waldo') > -1) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;

}

const isWaldoHere = exercise9('is there wal here ?');
console.log('is there wal here ? ' + isWaldoHere);
const isWaldoHere2 = exercise9('I found you Waldo!');
console.log('I found you Waldo! ' + isWaldoHere2);
const isWaldoHere3 = exercise9('is wally here?');
console.log(`is wally here?  ${isWaldoHere3}`);
const isWaldoHere4 = exercise9('waldo is here');
console.log('waldo is here ' + isWaldoHere4);



