console.log(`..............................Task 1...............`)
const addUP = (a) => {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;

}
console.log(addUP(4));
console.log(addUP(13));
console.log(addUP(600));

console.log(`..............................Task 2...............`)
const sumOfCubes = (s, d, f) => {

    let sum1 = 0;

    if (s) {
        sum1 += Math.pow(s, 3);
    }
    if (d) {
        sum1 += Math.pow(d, 3);
    }
    if (f) {
        sum1 += Math.pow(f, 3);
    }
    return sum1;
    // if (s && d && f) {
    //     return (Math.pow(s, 3) + Math.pow(d, 3) + Math.pow(f, 3));
    // } else if (s && d) {
    //     return (Math.pow(s, 3) + Math.pow(d, 3));
    // } else if (s) {
    //     return (Math.pow(s, 3));
    // } else {
    //     return 0;
    // }
}
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


console.log(`..............................Task 3...............`)
const stringCheck = (check1, check2) => {
    if (check2.startsWith(check1) === true) {
        return true;
    } else {
        return false;
    }
}
console.log(stringCheck("bu", "button")); // true
console.log(stringCheck("tri", "triplet")); // true
console.log(stringCheck("beau", "pastry")); // false

// second solution short one
const cubed3 = (n, m) => n.startsWith(m) ? true : false;
console.log(stringCheck("beau", "pastry")); // false

console.log(`..............................Task 4...............`)
const lessThanOrEqualToZero = (num) => num <= 0;
//  {
//     if (num <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(lessThanOrEqualToZero(3)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-4)); // true
console.log(lessThanOrEqualToZero(10)); // false

console.log(`..............................Task 5...............`)

function countOccurrences(string1, letter) {
    let sumCount = 0;
    for (let position = 0; position < string1.length; position++) {
        if (string1.charAt(position) === letter) {
            sumCount += 1;
        }
    }
    return sumCount;
}

console.log(countOccurrences("this is a string", "i")); //3


console.log(`..............................Task 6...............`)
const calculateBaseToExponent = (basenumber, exponentnumber) => {
    return Math.pow(basenumber, exponentnumber);
};


console.log(calculateBaseToExponent(5, 5)); // 3125
console.log(calculateBaseToExponent(10, 10)); // 10000000000
console.log(calculateBaseToExponent(3, 3)); // 27


console.log(`..............................Task 7..............................`)

const dogAge = (years) => {
    return (years * 7);
}

console.log(dogAge(4));


console.log(`..............................Task 8............................`)

const calcSupply = (age, amount) => ((80 - age) * 365 * (amount));

console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));

console.log(`..............................Task 9............................`)


