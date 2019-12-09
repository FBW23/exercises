console.log('Hello' + ' World');
//console.log('This' + ' is' + ' my' + ' first' + ' js' + ' file');
//SyntaxError: missing ) after argument list


let first = 'testing';
let second = 'coding';
let third = 'push';

console.log('first ' + 'second ' + 'third');


let x = "hallo";
function foo () {
// It start a completely new memory
//happening in the background: make a box for s;
// ====== HOITING

console.log(x);  //undefined
var s = "test";  // define s as “test”
console.log(x);  // test

}
foo();

// Empty variable

let something; // = 'undefined' //not on purpose  // on accident
let number = null; //on purpose
//let something = 5; // no new box for something possible
something = 5; // overwrite on purpose !
console.log(number);
console.log(typeof(number));
let anything =4;
console.log(anything)

let somethingEqualsAnything = anything;
console.log(somethingEqualsAnything)