let x = 20;
let y = 30;
console.log('Check whether x and y are equal.');
console.log(x===y);
console.log('Check whether x and y are *not* equal.');
console.log(x!==y);

console.log('3. Check whether x is greater than y. ');
console.log(x>y);

console.log('4. Check whether x is less than or equal to y. ');
console.log(x<=y);

console.log('5. Check whether y is greater than x.'); 
console.log(y>x);


console.log('6. Declare another variable "z" and give it a value of 5. Multiply z and x, and check whether this result is greater than z added to y. ');
let z = 5;
console.log(z*x>z+y);
console.log('7. Subtract z from x and check whether this result is less than y divided by z.'); 
console.log(x-z<y/z);

console.log('8. Check whether z, x and y are equal. ');
console.log(z===x===y);

console.log('9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal. '); 
console.log((x%z)===(y%z));
console.log('10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.');
console.log(z+x>y-z);
console.log(z+x===y-z);
console.log(z+x<=y-z);
console.log(z+x>=y-z);
console.log('11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.');

