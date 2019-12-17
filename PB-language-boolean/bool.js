let a,b;
a=3;
b="3";
console.log(a===b);
console.log('when checking the type of the compared inputs it turned out that they are not the same type');
console.log("we should use the strict comparison to make sure that we are on the right path");
console.log('using a=b will reassign a to equal the value of b');
let myVar= true;
console.log(!(myVar));
console.log('by checking the NOT event of myVar we get false cause i is fucking false since the variable had a default value of true')

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
console.log('the print result is stacy cause it is the value of the first defined variable on the list' );
