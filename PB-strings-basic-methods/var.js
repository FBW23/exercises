// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let phrase = "I can walk in the park all day!";
console.log(phrase.substring(18, 22));



// 2. Declare a variable with the value of "Hello World". Convert the value to upper case and print the converted value to the console.

let call= 'Hello World';
console.log(call.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 

const Earthling= 'Hello Earthling'
console.log(Earthling.toLowerCase());


// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

const JavaScript='JavaScript';
console.log(JavaScript.substring(3, 6));


// 5. Check if the sentence "nice shoes" contains the letter l or n. 
let nice='nice shoes';
console.log(nice.includes('n'));



// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

let fruit= 'Bananas';
const C = fruit[0].toUpperCase();
console.log(`${C}${fruit}${C}`);




// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

let strong = 'Scritch'
let last = strong.substring(4);
console.log(`${last}${strong}${last}`);

// 8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".

const OI="Oi, oi, oi!";
console.log(OI.toUpperCase().includes("oi"));

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

let given= 'BoogieWoogie';
let given_son=given.substring(1,11);
let given_son1=given.substr(11);
let given_son3=given.substring(0,1);
console.log(`${given_son1}${given_son}${given_son3}`);

// 10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

let firstName='Bendis';
let city= 'Berlin';
let student='student';
let sentence =`Hi, My name is ${firstName}. I live in ${city} . And i\'m a ${student}.`;
console.log(sentence);


// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let fix='the quick brown fox';
let fix_1=fix[0].toUpperCase();
let fix_2=fix.slice(1);
let fix_3=fix_1.concat(fix_2);
console.log(fix_3);