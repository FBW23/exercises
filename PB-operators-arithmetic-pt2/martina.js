//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

let a = 5;
let b = 6;
let c = 7;
let semiParameter = (a+b+c)/2;
console.log(semiParameter);
let s = semiParameter;
let result = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(result);