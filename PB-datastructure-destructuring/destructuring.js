// # Destructuring

// **Instructions**
console.log(`#### 1. Array Destructuring`);
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

let fruit, vegetable, food;
[fruit, vegetable] = ["banana", "cucumber"];
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(`#### 2.Object Destructuring`);
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`. Assign each key pair value to corresponding variable. Print out the object values. 

let fran, mike, lucas, steffi;
({
    fran,
    mike,
    lucas,
    steffi
} = {
    fran: 'witch',
    mike: 'rich',
    lucas: 'snitch',
});
