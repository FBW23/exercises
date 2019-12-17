console.log(Math.sqrt(4)); // math square root
console.log(Math.pow(3,2)); // x to the power of y
console.log(Math.round(9.4)); // rounds up - 10
console.log(Math.round(9.1)); // rounds down - 9
console.log(Math.random()); // picks a random number between [0-1]
console.log(Math.round(Math.random())); // rounds a random number from 0 to 1. if below 0.5 rounds to 0, if above 0.5 rounds to 1.
let randomNumber = Math.random();
console.log("here is the random number:", randomNumber);
console.log("always produces a new number:", Math.round(randomNumber)); // always produces a new number
console.log(randomNumber*10);
console.log("random number between 0 and 10", Math.round(randomNumber*10)); // random number between 0 and 10
// rounding up
console.log("rounding up", Math.ceil(randomNumber*10));
console.log("rounding down", Math.floor(randomNumber*10));

let integer = 23;
console.log("rounding up an integer...", Math.ceil(integer));
console.log("rounding down an integer...", Math.floor(integer));

console.log("maximum pick among many numbers", Math.max(1,2,3,4,5,6,456));
console.log("minimum pick among many numbers", Math.min(1,2,3,4,5,654654));
 