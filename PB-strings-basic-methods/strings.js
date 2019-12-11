// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

const WALK= 'I can walk in the park all day!';
console.log(WALK.substring(18,22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted 
// value to the console.

const HELLO_WORLD= 'Hello World';
const UPPER= (HELLO_WORLD.toLocaleUpperCase());

console.log(UPPER);

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print 
// the converted value to the console. 

const HELLO_EARTH= 'Hello Earthling';
const LOWER= (HELLO_EARTH.toLowerCase());

console.log(LOWER);

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from 
// your declared variable.

const LANGUAGE= 'JavaScript';

console.log(LANGUAGE.substring(3,6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 

const SHOES= 'nice shoes';
const L= 'l';
const N= 'n';
console.log(SHOES.includes(L, N));

// 6. Create a new string from a given string with the first character of the given string added at the front 
// and back, i.e., expected output: Bananas => BBananasB

const FIRST_LET= LANGUAGE.substring(0,1)+LANGUAGE+LANGUAGE.substring(0,1);

console.log(FIRST_LET);



// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both 
// the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

const LAST_LET= (LANGUAGE.substring(7)+LANGUAGE+LANGUAGE.substring(7));
console.log(LAST_LET);

// 8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print 
// the converted value to the console, checking whether it includes "oi".

const OI= 'Oi, oi, oi!';
const BIG_OI= OI.toLocaleUpperCase();
console.log(BIG_OI);
const CHECK= 'oi';
console.log(BIG_OI.includes(CHECK));

// 9. Create a new string from a given string by changing the position of first and last characters. 
// The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

const WITHOUT= LANGUAGE.slice(1,9);
const MIX= LANGUAGE.slice(9)+WITHOUT+LANGUAGE.slice(0,1);
console.log(MIX);

// 10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; 
// let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e.,
//  "My name is Maria. I live in Berlin and I am a teacher". 

const FIRST_NAME= 'Julien';
const ORIGIN= 'France';
const AGE= '38;'
console.log(`My name is ${FIRST_NAME}, I'm from ${ORIGIN} and I am ${AGE}.`);


// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). 
// Capitalize the first letter of that string. Print the result to the console.

const FOX= 'the quick brown fox';
const T= FOX[0].toLocaleUpperCase();
const REST= FOX.substring(1);

console.log(T+REST);