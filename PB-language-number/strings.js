let introSentence = "hello, my name is Fran and I am ";
let age = 25;
console.log(`${introSentence + age}`);
console.log(introSentence + age);
// + is adding both let which we have introduce to add in a sentence.


const count = parseInt('1005');
console.log(count);

const count2 = parseFloat('10.05');
console.log(count2);

let no1 = 30;
let no2 = 939;
let no3 = 40.9;
console.log(no1?"30 is even":"odd");
console.log(no2?"939 is odd":"even");
console.log(no3?"40.9 is odd":"even");
console.log(no1?'even':939?'odd':40.9?'odd':'even')