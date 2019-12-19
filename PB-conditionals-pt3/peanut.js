let aleeza = (89 + 120 + 103) / 3;
let lis = (116 + 94 + 123) / 3;

console.log(`${aleeza.toFixed(0)} Aleeza score`);
console.log(`${lis} + Lis score`);

if (aleeza >= lis) {
    console.log(`aleeza  ${aleeza}`);
} else {
    console.log(`lis score  ${lis}`);
}

// Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let mary = (97 + 134 + 105) / 3;
console.log(`${mary}  Mary Score`);
if ((aleeza > mary) && (aleeza > lis)) {
    console.log(('aleeza has the best team'));
}
else if ((lis > aleeza) && (lis > mary)) {
    console.log(`Lis has the best team`);
} else {
console.log(`Mary has the best team`);}