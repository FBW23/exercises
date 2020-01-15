//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let entireSentece = 'I can walk in the park all day!';
console.log(entireSentece);

let park = entireSentece.substring (19, 23);
console.log(park);
park = entireSentece.substring (18, 23);
console.log(park);

//2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let helloWorld = 'Hello World';
console.log(helloWorld);

let uppercase = helloWorld.toUpperCase();
console.log(uppercase);

//3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 

let helloEarthling = 'Hello Earthling';
console.log(helloEarthling);

let lowerCase = helloEarthling.toLowerCase();

console.log(lowerCase);

//4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

let javaScript = 'JavaScript';
console.log(javaScript);

let aSc = javaScript.substring (2, 5);
console.log(aSc);

aSc = javaScript.substring (3, 6);
console.log(aSc);

//5. Check if the sentence "nice shoes" contains the letter l or n. 
let niceShoes = 'nice shoes';
console.log(niceShoes);
console.log(niceShoes.includes('l'));
console.log(niceShoes.includes('n'));

//6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

let str1 = "D";
console.log(str1);
let res = str1.concat(javaScript, str1);
console.log(res);

//7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

let ipt = javaScript.substring (7, 10);
console.log(ipt);
let add = ipt.concat(javaScript, ipt);
console.log(add);

//8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".

let oi = 'Oi, oi, oi!'
console.log(oi);
let uppercaseOi = oi.toUpperCase().includes('oi');
console.log(uppercaseOi);

//9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB


let firstChar = helloEarthling[0];
let lastChar = helloEarthling [14];

console.log(firstChar, lastChar);
console.log(lastChar + helloEarthling.substring(1, 13) + firstChar);


//10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

let name ='Julia';
console.log(name);
let city = 'Berlin';
console.log(city);
let age = 32;
console.log(age);

let mySentence = `My name is ${name}. I live in ${city} and I am ${age} years old.`;
console.log(mySentence);

//11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let fox = 'the quick brown fox';
console.log(fox);

let upperT = fox [0].toUpperCase();
console.log(upperT);
let hequickbrownFox = fox.substring(1, 19);
console.log(hequickbrownFox);

console.log(upperT + hequickbrownFox);

















