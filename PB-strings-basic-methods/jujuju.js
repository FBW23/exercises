// # Programming Basics: Basic String Methods

// **These exercises are aimed at making you more familiar with string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results.**

// **NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
park = (string)=>{
    return string.substring(18, 23);
}

const park2=park('I can walk in the park all day!');
console.log(park2);

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
upper = (string2)=>{
    return string2.toUpperCase();
}

const upper2 = upper('Hello World');
console.log(upper2);

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
lower = (string3)=>{
    return string3.toLowerCase();
}

const lower2=lower('Hello Earthing');
console.log(lower2);
// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
asc = (string4)=>{
    return string4.substring(3,6);
}

const asc2 = asc('JavaScript');
console.log(asc2);

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
shoes = (striii)=>{
    return striii.includes('l')|| striii.includes('n');
}
const shoes2= shoes('ice shoes');
console.log(shoes2);

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

// 8. Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted value to the console, checking whether it includes "oi".

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

// 10. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.










