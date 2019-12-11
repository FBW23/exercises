console.log('1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.');
console.log('====================================================================================================================');

let walk='I can walk in the park all day!';


console.log(walk[18]+walk[19]+walk[20]+walk[21]+walk[22]);
console.log(walk.substring(18,22));



















console.log('====================================================================================================================');
console.log('2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.');
console.log('====================================================================================================================');


let hw='Hello World';
let capital=hw.toUpperCase();
console.log(capital);



















console.log('====================================================================================================================');
console.log('3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. ');
console.log('====================================================================================================================');


let he='Hello Earthling';
let lowerc=he.toLowerCase();
console.log(lowerc);


















console.log('====================================================================================================================');
console.log('4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.');
console.log('====================================================================================================================');



let js='JavaScript';
console.log(js[3]+js[4]+js[5]);



















console.log('====================================================================================================================');
console.log('5. Check if the sentence "nice shoes" contains the letter l or n. ');
console.log('====================================================================================================================');



let ns='nice shoes';
console.log(' nice shoes has an "l" in it:', ns.includes('l'), 'nice shoes has an "n" in it:', ns.includes('n'));











console.log('====================================================================================================================');
console.log('6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB');
console.log('====================================================================================================================');





let bana='Bananas';
console.log(bana[0]+bana+bana[0]);












console.log('====================================================================================================================');
console.log('7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch');
console.log('====================================================================================================================');



let scr='Scritch';
let last3=scr[4]+scr[5]+scr[6];

console.log(last3+scr+last3);








console.log('====================================================================================================================');
console.log('8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".');
console.log('====================================================================================================================');



let oi = 'Oi, oi, oi!';
console.log(oi.toUpperCase().includes('oi'));








console.log('====================================================================================================================');
console.log('9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB');
console.log('====================================================================================================================');







let boogie='BoogieWoogie';
let first=boogie.substring(0,1);
let last=boogie.substring(boogie.length-1)
let mid=boogie.substring(1,12)

console.log(last+mid+first);





console.log('====================================================================================================================');
//console.log('10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". ');
console.log('====================================================================================================================');










let name='Geza';
let city='Berlin';
let food= 'Pizza';

console.log(`Hello, my name is ${name}, I live in ${city}, and I love ${food}`);


console.log('====================================================================================================================');
console.log('11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.');
console.log('====================================================================================================================');






let fox='the quick brown fox';
console.log(fox[0].toUpperCase()+fox.substring(1));




