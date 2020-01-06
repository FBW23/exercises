// BLOCKSCOPE

var x = 1; // var stays globally -> also inside the block - it will redefine the variable in any location of the document.
let y = 1; // let is not global -> it will work only inside or outside of a block but not in both environments.
// const CAP = 'capitalized'; const variables should be written with capital letters to differentiate them from the others. 

if (true) { // defines a new block scope.
    // console.log(y);  unavailable: in the block "y" has not been defined.
    // console.log(x);  will display the "x" because it has been declared with a var, which is globally effective.
    const CAP = 'capitalized'; // this will not work outside the block, just like a let (and not like a var)
    var x = 2;
    let y = 2; // you can change the let, redifining the variables. i.e. y = 2;
    console.log("output of let ->", y);
    let z = 3;
    console.log("z declared with a let inside the block", z);
    console.log(CAP);
}

console.log("var output ->", x);
// expected output: 2

console.log("let output ->", y);
// expected output: 1

// console.log(CAP); will not be displayed because outside of the block.

let markBMI = 20;
let johnBMI = 25;

let isHigher = markBMI < johnBMI ? 'John' : 'Mark';
console.log(isHigher);

let isHigher2;

if (markBMI < johnBMI) {
    let isHigher2 = 'John';
    console.log(isHigher2);
} else {
    let isHigher2 = 'Mark';
    console.log(isHigher2);
}

console.log();
console.log(isHigher);
console.log(isHigher2);

// When to use the ternary, when the if better?
// ==========================================================================
// 1. When we have more than two cases (true / false), use the IF!
// 2. Always when we do more then one statement, use the IF!
// 3. Ternary is perfect for all occasions where we just save ONE thing only!

// THE SWITCH CASE

var expr = 'Kiwis';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    case 'Kiwis':
        console.log('You want to eat ' + expr + '? Very good, they are for free');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}