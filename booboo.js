// Declare two variables: "a" with the value of true, and "b" with the value of false.

// Check the result of:

// let sleepy=true;
// let notSleepy=false;
// let goTobed=(sleepy===true)&& (notSleepy===false)? 'go to bed' : 'go to work!'
// console.log(goTobed);

// b) a OR b.
// let sleepy=true;
// let notSleepy=false;
// let goTobed=(sleepy===true) || (notSleepy===false)? 'go to bed' : 'go to work!'
// console.log(goTobed);

// c) NOT (a AND b).
let sleepy=false;
 let notSleepy=true;
 let goTobed=(sleepy===false) && (notSleepy===true)? 'go to work' : 'go to bed!'
 console.log(goTobed);

 let x=(5);
 let y=(6);
 let z=(9);
//  a) x is greater than z AND x is greater than y.
console.log(x>z)&&(x>y);
// b) x is NOT equal to y.
console.log(x!==y);
// c) z is less than y OR z is greater than x.
console.log(z<y)||(z>x);
// d) x is equal to z OR x is NOT equal to y.
console.log(x===z)|| (x!==y);
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(x>!10) && (y<!10);
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log(x*z<100) || (x*y>100);




