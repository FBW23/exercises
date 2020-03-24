let x = 20;
console.log('x=', x);
let y = 30;
console.log('y=', y);



//Compare X and Y


console.log('Are X and Y equal?');
console.log(x === y);

console.log('Are X and Y unequal?');
console.log(x !== y);

console.log('is X greater than Y ?');
console.log(x > y);

console.log('is X less or equal than Y ?');
console.log(x <= y);


console.log('is Y greater than X ?');
console.log(y > x);




//Is x*z greater than x+z?

let z = 5;
console.log('z=', z);


console.log('x*z=', z * x);
let zx = z * x;


console.log('y+z=', z + y);
let zPlusY = z + y;




console.log('I x+z less than x*z?');
console.log(zPlusY < zx);


//Is x/z greater than x-z

console.log('x/z=', x / z);
let xPerZ = x / z;


console.log('x-z=', z - x);
let xSubZ = x - z;




console.log('Is x-z less than y/z?');
console.log(xSubZ < (y / z));


//Are X Z Y equal?


console.log('Are X Y Z equal?');
console.log(x === y === z);


//Check whether the remainder of x divided by z and the remainder of y divided by z are equal.  


console.log('Reminder of x/z');
console.log(x % z);
let xRemZ = x % z;

console.log('Reminder of y/z');
console.log(y % z);
let yRemZ = y % z;



console.log('Are the remainders equal?');
console.log(xRemZ === yRemZ);



//Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.



console.log('Is x+z greater than y-z?');
console.log(x + z > (y - z));

console.log('it was false, as 25=25, we need to swap > to === or >= or <=');

console.log(x + z === (y - z));
console.log(x + z <= (y - z));
console.log(x + z >= (y - z));


// BONUS CHALLENGE: Try increasing script readability by adding question headings 
//to your output before each result.