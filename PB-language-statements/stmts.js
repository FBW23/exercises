// CONSOLE LOG

console.log('Hello', 'World!');

// MY SECOND STATEMENT

console.log('This', 'is', 'my', 'first', 'js', 'file.');

// removing a parenthesis in the first statement prevents the code from running.

// it's a syntax error.

console.log('hello' + 'world');

// LIVE CODING VARIABLES - not the best mode
var first = 2; // number
var second = 'hello world'; // string
var third = true; // boolean

// better mode
let fourth = 2; // number
let fifth = 'hello world'; // string
let sixth = false; // boolean

console.log(first);
// overwriting firtst value
var first = 15; 
console.log(first);
// first value disappears

// console.log(fourth);
// let fourth = 4;
// console.log(fourth);
// SyntaxError: Identifier 'fourth' has already been declared. "let" does not let you overwrite and checks immediately declaration.

let myName;
console.log(myName);

let myRealname = 'Nicolo';
console.log(myRealname);

let message = "hallo";
function printFunction() {
    // it starts a complete new memory
    // happening in the background: make a "box" for s;
    // HOISTING
    console.log(message); // undefined
    var message = "test"; // define as "test"
    console.log(message); // gives us "test"
}