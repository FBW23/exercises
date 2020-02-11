//1. Array Destructuring
console.log('******1. Array Destructuring******')

let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];


console.log(fruit);
console.log(vegetable);
console.log(food);

// 2.Object Destructuring
console.log('******2.Object Destructuring******');
// const halloween = {
//   fran: "which",
//   bob: "banana",
//   poo: "cucumber",
//   foo: "bar",
//   jane: "doe"
// };
let fran, bob, poo, foo, jane;
({fran, bob, poo, foo, jane} = {fran: "which", bob: "banana", poo: "cucumber", foo: "bar", jane: "doe"});

console.log(fran);
console.log(bob);
console.log(poo);
console.log(foo);
console.log(jane);

//3. Parameters: Object Destructuring
console.log('******3. Parameters: Object Destructuring******');

const band = {
name: "Disturbed",
vocalist: "David Draiman",
greatestHit: "Ten Thousand Fists",
nationality: "American",
genre: "Heavy Metal",
formed: 1994,
printBand: function() {
  `${this.name} is a ${this.nationality} ${this.genre} band formed in ${this.formed}.The band vocalist is ${this.vocalist}.${this.name} greatest hit is ${this.greatestHit}`

}
};

console.log(band.printBand());