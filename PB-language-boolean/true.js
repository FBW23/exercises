// Check whether 3 is equal to "3" using loose comparison. Then, check whether they are equal while using strict comparison
console.log(3==3);
// Is there a difference? Why/why not?
//nope, because 3 is indeed equal to 3.
// Which comparison operator should we generally use? Why?
//usually 3 equal signs, because is a stronger comparison operator.
//console.log(3=3);
// What would happen if we were to use =?
//Invalid left-hand side in assignment

// Not
// Store the value true to a variable. Using a ternary operator,print the false option by checking the value of the initial variable.

let moody=true;
let happy=false;
let goAway= (happy!==false)||(moody!==true)? 'go home' : 'go travelling!'
console.log(goAway);

// Given the code below, what will print when when we console log name? Comment your answer in the js file.
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
//because first name  comes  first  in the "let"; angivenName is not  defined as variable 