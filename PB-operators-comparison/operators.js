0.
console.log(' Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y. ');
let x=20;
let y=30;
1.
console.log("Check whether x and y are equal");
console.log( x===y);
//false
2.
console.log('Check whether x and y are *not* equal.');
console.log(x!==y);
//true
3.
console.log("Check whether x is greater than y");

console.log( x>y);
//false
4.
console.log("Check whether x is less than or equal to y");

console.log( x<y);
//true
5.
console.log("Check whether y is greater than x");

console.log(y>x);
//true

6. 
console.log('Declare another variable "z" and give it a value of 5.');
let z=5;
console.log((x*z)>(z+y));
//true

7.
console.log('Subtract z from x and check whether this result is less than y divided by z.');
console.log((x-z)<(y/z));
//false

8.
console.log('Check whether z, x and y are equal.');
console.log(z===y===x);

//false

9.
console.log('Check whether the remainder of x divided by z and the remainder of y divided by z are equal.');
console.log((x%z)===(y%z));
//true

10.
console.log('Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.');
console.log((z+x)>(y-z));
//false
console.log((z+x)===(y-z));
//true

11.
//Bonus challenge




