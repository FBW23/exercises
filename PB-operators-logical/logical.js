let a = true;
let b = false;
let result = (a) && (b);
console.log(result);
let result2 = a || b;
console.log(result2);
let result3 = !(a&&b);
console.log(result3);


let x = 3;
let y = 8;
let z = 6;
let result4 = (x > z) && (x > y);
console.log(result4);
let result5 = (x !== y);
console.log(result5);
let result6 = (z < y) || (z > x);
console.log(result6);
let result7 = (x === z) || (x !== y);
console.log(result7); 
let result8 = (x >=10) && (y <= 10);
console.log(result8);
let result9 = (x*z < 100) || (x*y > 100);
console.log(result9);

// well is getting to understand the movement of each variable.


let markBMI = 20;
let johnBMI = 25;
// let markBMI = markBMI > johnBMI ? true : false;


let isHigher =markBMI < johnBMI ? 'John' : 'Mark';
console.log(isHigher);

if (markBMI < johnBMI) {
    let isHigher2 = 'John';
    console.log(isHigher2);
    
} else {
        let isHigher2 = 'Mark'; 
        console.log(isHigher2);
    }
    console.log(isHigher);
    console.log(isHigher2);


    // When to use the ternary, when the if better?
    // 1) When we have more than two cases (true/false), take the IF!
    // 2) Always when we fo more than one statement, take the IF!
    // 3) Ternary is perfect for all occasions where we just save ONE variable thing only!
