let a = true;
let b = false; 

console.log (a && b);
console.log (a || b);
console.log(!(a && b));


//2. 
let x = 5; 
let y = 2;
let z = 8; 

// a) x is greater than z AND x is greater than y
console.log((x > z) && (x > y)); 

//b) x is NOT equal to y.
console.log(x != y);

//c) z is less than y OR z is greater than x.
console.log(z <= y || z > x);

//d) x is equal to z OR x is NOT equal to y.
console.log(x === z || x != y);

//e) x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(x >= 10 && y <= 10);

//f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log((x * z) < 100 || (x * y) > 100);
