var myVar = 4;
let myLet = 5;
const PI = 3.14; // const accepts only capital letters
const PI_SECOND = 3.14159265;
const SQUARE_ROOT_OF_MINUS_ONE = Math.sqrt(-1);
const MY_NAME = "Nicolo";
const IS_STUDENT = true;
// PI = 2.14; - cannot reassign a value to const
// const PI = 2.14; - cannot declare anew like let
console.log(PI);

// String Escaping

console.log('Hell On World\n'); // \n generates a new line in the string
console.log('Quote of the day: \"Not knowing anything is the sweetest life.\"'); // to print apostrophe or quotes - careful of unclosed quatiotion marks
console.log('');
let city = 'Kacklandia';
let mySentence = `${MY_NAME} is living in ${city}.`; //string interpolation
console.log(mySentence);
console.log('');

// String.prototype.length - shows the quantity of characters in a string
console.log(city.length);
console.log(mySentence.length);
console.log('');
let helloWorld = 'hello world';
console.log('how many characters in "hello world"?', helloWorld.length);
let oneCharacter = helloWorld[6]; // tell what character corresponds to the sixth place starting from zero in the sentence "hello world"
console.log('what letter takes the sixth place in the sentence?', oneCharacter);

// how to show a particular character in a string with square brackets - 
let w = helloWorld[6];
console.log(w);
let h = helloWorld[0];
console.log(h);

let length = helloWorld.length; // the lenght has been saved in a variables - the number 11
console.log('undefined value:', helloWorld[length]); // undefined because there is no 11th character. to look for it, we must add -1
console.log(helloWorld[length - 1]);
console.log(helloWorld[--length]); // if we put it after (length--) it does not work. if we put it first, it decreases the number.
console.log('length of "hello world" is', length);