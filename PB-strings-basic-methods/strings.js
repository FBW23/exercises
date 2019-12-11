const WALKING= 'I can walk in the park all day!';
console.log(WALKING.substr(18,4));
//-------------------------------------
const MESSAGE='Hello World';
console.log(MESSAGE.toUpperCase());
//-------------------------------------
const HELLO='Hello Earthling';
console.log(HELLO.toLowerCase());
//-------------------------------------
const PL='JavaScript';
console.log(PL.substring(3,6));
//-------------------------------------
const NICE='nice shoes';
console.log(NICE.includes('l'));
console.log(NICE.includes('n'));
//-------------------------------------
let PART=PL[0];
let STEP=PART.concat(PL);
console.log(STEP.concat(PART));
//-------------------------------------
let PART_2=HELLO.substr(12,3);
let STEP_2=PART_2.concat(HELLO);
console.log(STEP_2.concat(PART_2));
//-------------------------------------
const OI='Oi, oi, oi!';
let UPPER=OI.toUpperCase();
console.log(UPPER.includes('oi'));
// console.log(UPPER.toLowerCase.includes("oi"));
//-------------------------------------
const BOOGIE='BoogieWoogie';
let BOOGIE_SON=BOOGIE.replace(BOOGIE[0],BOOGIE[11]).slice(0,11);
let BOOGIE_SON_2=BOOGIE[0];
console.log(BOOGIE_SON.concat(BOOGIE_SON_2));
//-------------------------------------
let firstName = 'Jamil';
let job='student';
let city='Berlin';
let sentence =`Hi there my name\'s : ${firstName}. I live in ${city} . And i\'m a ${job}.`;
console.log(sentence);
//-------------------------------------
const FOX='the quick brown fox';
let FOX_FIRST=FOX[0].toUpperCase();
let FOX_SLICE=FOX.slice(1);
let FOX_UPPER=FOX_FIRST.concat(FOX_SLICE);
console.log(FOX_UPPER);
//-------------------------------------