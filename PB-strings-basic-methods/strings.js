// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let park="I can Walk in the park all day"
let walk= park.substring(18, 22);
console.log(walk)

// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let mitch="Hello World";
console.log(mitch.toUpperCase());

// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let bubba="Hello Earthling";
console.log(bubba.toLowerCase());

// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let beavis="JavaScript";
let butthead=beavis.substring(3, 6);
console.log(butthead);

// Check if the sentence "nice shoes" contains the letter l or n.
let meh="nice shoes";
console.log(meh.includes('n' ),meh.includes('i' ));

// Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

console.log(mitch[0]+mitch+mitch[0]);
// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

console.log(mitch[8]+mitch[9]+mitch[10]+mitch+mitch[8]+mitch[9]+mitch[10]);

// Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".

let ska="Oi,oi,oi!";
let punk=ska.toUpperCase();
console.log(punk);
console.log(punk.includes("oi"));

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB


let first=beavis[0];
let second=beavis[beavis.length-1];
let middle=beavis.substring(1,9)
console.log(second+middle+first);

// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let firstName="Joao";
let city="Berlin";
let truth="Beautiful"
console.log(`Im ${firstName} from Brazil ,and I live in ${city}, and Im very ${truth}!`);

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.


let last="the quick brown fox";
console.log(last[0].toUpperCase()+last.substring(1));



