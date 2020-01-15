
//1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let string = 'Six Variable Long';
console.log(string);
console.log(string.length);


//2. Access the 2nd and 6th elements of the string. Print the elements to the console. **Make sure you have selected the right index numbers** 
let secondCharacter = string.length[2];
console.log(secondCharacter);
secondCharacter = string [2];
console.log(secondCharacter);

let sixthChar = string [6];
console.log(sixthChar);



//3. Declare a variable called name and assign a string as a value. 

let name = 'Julia'

//4. Declare a variable called age and assign a number as a value. 

let age = 32;
//5. Declare a variable called year and assign a number as a value. 
let year = 2019;

//6. Print the following: "*name* is *age* in *year*", using your declared variables. 
let mySentence = `${name} is ${age} in ${year}`;
console.log(mySentence);

//7. Declare a variable called isMarried and assign a boolean value. 
let isMarried = false;
console.log(isMarried);
//8. Print the following "*name* is married: true/false", using your declared variables.
 let juMarried = `${name} ${isMarried}`;
 console.log(juMarried); 
juMarried = `${name} is married ${isMarried}`;
console.log(juMarried);
juMarried = `${name} is married: ${isMarried}`;
console.log(juMarried);

//9. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true.  Print "JavaScript is fun: true" to the console, using your declared variables. 

let programmingLanguage = 'JavaScript';
let isFun = true;

let fun = `${programmingLanguage} is fun: ${isFun}`;
console.log(fun);

//10. Print the J and S of JavaScript from the variable programmingLanguage to the console. 

let firstC = programmingLanguage [0];
let fourC = programmingLanguage [4];

console.log(firstC);
console.log(fourC);


//11. Print the length of the string "JavaScript" to the console.
let length = programmingLanguage.length;
console.log(length);


