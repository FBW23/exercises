console.log('');
console.log('1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.');
console.log('');
let park = 'I can walk in the park all day!';
console.log(park.substring(18, 22));

console.log('');
console.log('2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.');
console.log('');
let hello = 'Hello World';
console.log(hello.toUpperCase());

console.log('');
console.log('3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.');
console.log('');
let earth = 'Hello Earthling';
console.log(earth.toLowerCase());

console.log('');
console.log('4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.');
console.log('');
let js = 'JavaScript';
console.log(js.substring(3, 6));

console.log('');
console.log('5. Check if the sentence "nice shoes" contains the letter l or n.');
console.log('');
let shoes = 'nice shoes';
console.log('nice shoes contains \"n or l\":', shoes.includes('n'), shoes.includes('l'));

console.log('');
console.log('6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.');
console.log('');
let woosh = 'woosh';
let w = woosh[0];
console.log('the word is:', woosh);
console.log(`${w}${woosh}${w}`);

console.log('');
console.log('7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.');
console.log('');
const NEW_STRING = 'demmamussabebonk';
let threeChars = NEW_STRING.substring(13, 16);
console.log('the word is:', NEW_STRING);
console.log('effective output is:', `${threeChars}${NEW_STRING}${threeChars}`);

console.log('');
console.log('8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".');
console.log('');
let oi = 'Oi, oi, oi!';
console.log(oi.toUpperCase().includes('oi'));

console.log('');
console.log('9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.');
console.log('');
let stringNine = 'KillAllTheRockStars';
let firstChar = stringNine[0];
let lastChar = stringNine[18];
let middleChar = stringNine.substring(1, 18);
console.log('The word is:', stringNine);
console.log(`${lastChar}${middleChar}${firstChar}`);
console.log('');
console.log('created straight in the console log without making additional vars:', stringNine[18] + stringNine.substring(1, 18) + stringNine[0]);

console.log('');
console.log('10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".');
console.log('');
let myName = 'Nicolò';
let myCity = 'Börlin';
let myHobby = 'playing music and raving';
console.log(`Hello! My name is ${myName}, I am 37 years old and I live in ${myCity}. My hobbys are mainly ${myHobby} but I also really like going to the movies.`);

console.log('');
console.log('11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.');
console.log('');
let fox = 'the quick brown fox';
let capitalF = fox[0].toUpperCase();
console.log(capitalF);
