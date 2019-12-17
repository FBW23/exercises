//1.

let number = 3;
console.log(3 == "3");
console.log(3 === "3"); 
//Is there a difference? Why/why not? 
//yes, first 3 is a number, second 3 is a string.

//Which comparison operator should we generally use? Why?
//the === because it checks at the same time the type and the content.

//What would happen if we were to use =?
//would throw an error.

//2.
let trueVar = true;
console.log((!trueVar) ? true : false);



//3.
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name); //Stacey because was the only one give variable.

