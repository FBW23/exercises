let myString = "good afternoon! FBW";
let myNumber = 23;
console.log(`${myString}${myNumber}`);
console.log(myString + myNumber);

let myStringNumber = "23"; // string
console.log(myStringNumber + myNumber); // a number + a string results in a string
console.log(`addition one ${myStringNumber + myNumber}`); // string without addition
console.log(`addition two ${myNumber + myNumber}`); // addition possible, becomes a string
console.log(`addition three ${myNumber * myNumber}`); // addition possible, becomes a string

const newNumber = parseInt(myStringNumber, 10);
console.log(newNumber);

// parse float converts strings into floats
let float = '3.14';
const newFloat = parseFloat(float);
console.log(newFloat);

// can we also convert whole numbers with float?
const newFloat2 = parseFloat(myStringNumber);
console.log(newFloat2);

// cannot convert string to number - NaN
let helloWorld = 'hello world';
const newString = parseFloat(helloWorld);
console.log(newString);

// 
const newInteger = parseInt(float); // 3.14
console.log(newInteger); // 3

let round = 3.5;
const newRound = parseInt(round);
console.log(newRound);