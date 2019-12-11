console.log('Declare a variable and assign a string as a value.');
console.log('');
let hotSnakes = 'I know your heart is in the right place, but why does it hurt?';
console.log(hotSnakes);
console.log('');
console.log('Access the 2nd and 6th elements of the string.');
console.log('');
let secondElement = hotSnakes[1];
let sixthElement = hotSnakes[5];
console.log('')
let elements = `the second element is ${secondElement}, the sixth element is ${sixthElement}.`;
console.log(elements);
console.log('');
console.log('Declare a variable called name, age and year and assign a string as a value. Print the following: "name is age in year", using your declared variables.');
console.log('');
let name = 'Slim Shady';
let age = 47;
let year = 1972;
console.log(`${name} is a ${age} year-old artist born in ${year}`);
console.log('');
console.log('Declare a variable called isMarried and assign a boolean value. Print the following "name is married: true/false", using your declared variables.');
console.log('');
const IS_MARRIED = false;
let maritalStatus = IS_MARRIED ? 'He is married.' : 'He is not married.';
console.log(maritalStatus);
console.log('');
console.log('Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.');
console.log('');
let programmingLanguage = 'JavaScript';
const IS_FUN = true; // JAVASCRIPT IS ALWAYS FUN
console.log(programmingLanguage, 'is fun:', IS_FUN ? 'true' : 'false');
console.log('');
console.log('Print the J and S of JavaScript from the variable programmingLanguage to the console.');
console.log('');
console.log(programmingLanguage[0], programmingLanguage[4]);
console.log('');
console.log('Print the length of the string "JavaScript" to the console.');
console.log('');
console.log(programmingLanguage.length);

hotSnakes.length;
console.log(hotSnakes.toUpperCase()); // all upper case

let upperCase = hotSnakes.toUpperCase();
console.log(upperCase);

let lowerCase = hotSnakes.toLocaleLowerCase(); // all lower case
console.log(lowerCase);

console.log(hotSnakes[0].toUpperCase()); // shows the first character in upper case

// String prototype substring

console.log(hotSnakes.substring(0, 6));
console.log(hotSnakes.substring(14)); // takes all included from the 14th character
let know = hotSnakes.substring(2, 6); // shows only the word 'know'
console.log(know);
console.log(know.length);

// Does the word 'earth' include the word 'art'
let earth = 'Earth'; 
let art = 'art';
console.log(earth.includes(art)); // true
console.log(earth.includes('sky')); // false
console.log(hotSnakes.includes('ar')); //true
console.log(earth.toLocaleLowerCase().includes('e')); // true
console.log(earth.toLocaleLowerCase().includes('E')); // false

// string.prototype.trim - only trims empty spaces before and after the string
let chickenDay = ' We dn es da y ';
console.log(chickenDay.trim());
console.log(chickenDay.length);