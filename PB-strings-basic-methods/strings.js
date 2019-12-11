// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const parkWalk = "I can walk in the park all day!"
console.log(parkWalk.substring(18, 22));
// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const hellToWorld = "Hello World"
const upperWorld = hellToWorld.toUpperCase();
console.log(upperWorld);

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const niceEarth = "Hello Earthling";
console.log(niceEarth.toLowerCase());
// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const digitalInstitute = "JavaScript";
console.log(digitalInstitute.substring(3, 6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
const sentence = "nice shoes";
console.log(sentence.includes('n'));


// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const fruit = 'Bananas'
const B = fruit[0].toUpperCase();
console.log(`${B}${fruit}${B}`);
// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const lastThree = fruit.substring(4);
console.log(`${lastThree}${fruit}${lastThree}`);

// 8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".
const oiOi ="Oi, oi, oi!"
console.log(oiOi.toUpperCase().includes('oi'));
// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
// BoogieWoogie => eoogieWoogiB
const booGie = 'BoogieWoogie';
const middleBoogie = booGie.substring(1, 11)
const lastBoogie=booGie.substr(11);
const firstBoogie=booGie.substring(0,1);
console.log(`${lastBoogie}${middleBoogie}${firstBoogie}`);

// 10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let me = 'constantin',
from='berlin',
school='dci';
console.log(`My name is ${me}. I am from ${from}. Studying at the ${school}`);
// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let theBrown = "the quick brown fox";
let theBrown2 =theBrown.substr(1)  
console.log(theBrown[0].toUpperCase()+theBrown2);
