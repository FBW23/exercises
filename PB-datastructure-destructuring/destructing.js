// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.
let fruit, vegetable, food; //['banana','cucumber',],
//['cucumber'],
//['bread','cakes','pizaa'];
([fruit, vegetable, ...food] = ['banana', 'cucumber', 'bread', 'cakes', 'pizza']);
console.log(fruit);
console.log(vegetable);
console.log(food);
console.log(`_____________________________________________________________________`);
console.log(`* Create an object which contains key pair values of names and the respective halloween costume e.g. \`fran: "witch"\`.   Assign each key pair value to corresponding variable. Print out the object values. `);
console.log(`_____________________________________________________________________`);

let constantin, negs, bendis, someOneElse;
 ({
    constantin,
    negs,
    bendis,
    someOneElse
} = {
    constantin: 'jocker',
    negs: 'batman',
    bendis: 'spiderMan',
    someOneElse: 'misterX'
});
console.log(constantin);
console.log(negs);
console.log(bendis);
console.log(someOneElse);