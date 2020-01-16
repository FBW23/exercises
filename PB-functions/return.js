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


console.log(`:::::::::::::::::::::::::::::::::::::Task 6:::::::::::::::::::::::::::::::`)
const calculateBaseToExponent = (basenumber, exponentnumber) => {
    return Math.pow(basenumber, exponentnumber);
};


console.log(calculateBaseToExponent(5, 5)); // 3125
console.log(calculateBaseToExponent(10, 10)); // 10000000000
console.log(calculateBaseToExponent(3, 3)); // 27


console.log(`:::::::::::::::::::::::::::::::::::::Task 7:::::::::::::::::::::::::::::::`)

const dogAge = (years) => {
    return (years * 7);
}

console.log(dogAge(4));


console.log(`:::::::::::::::::::::::::::::::::::::Task 8:::::::::::::::::::::::::::::::`)

const calcSupply = (age, amount) => ((80 - age) * 365 * (amount));

console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));

console.log(`:::::::::::::::::::::::::::::::::::::Task 9:::::::::::::::::::::::::::::::`)


// if (!String.prototype.includes) {
//     String.prototype.includes = function(search, start) {
//       'use strict';
//       if (typeof start !== 'number') {
//         start = 0;
//       }

//       if (start + search.length > this.length) {
//         return false;
//       } else {
//         return this.indexOf(search, start) !== -1;
//       }
//     };
//   }


// function isWaldoHere( str ) {
//     str = 'Waldo' + 'waldo';
// let pattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$');
// str.testResult = pattern.test(str);
//    }

//   console.log(isWaldoHere("is there wal here ?"));
//   console.log(isWaldoHere("I found you Waldo!"));
//   console.log(isWaldoHere("is wally here?"));
//   console.log(isWaldoHere("waldo is here"));

console.log(`:::::::::::::::::::::::::::::::::::::Task 10:::::::::::::::::::::::::::::::`)

const equalSlices = (slices, recipients, persons) => slices >= recipients * persons;
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));


console.log(`:::::::::::::::::::::::::::::::::::::Task 11:::::::::::::::::::::::::::::::`)


function XO(str) {
    const len = str.length;
    for (let sum2 = 1; sum2 <= len / 2; ++sum2) {
        if ((len % sum2 !== 0) || str[0] !== str[sum2]) {
            continue;
        }
        let i = 1;
        for (; i < sum2; ++i) {
            let j = 0;
            for (; j < len; j += sum2)
                if (str[i] !== str[j + i])
                    break;
            if (j != len)
                break;
        }

        if (i === sum2)
            return true;
    }
    return false;
}

console.log(XO("ooxx"));; //true
console.log(XO("xooxx")); //false
console.log(XO("ooxXm")); //true
console.log(XO('zpzpzpp')); //false
console.log(XO('zzoo')); //true


console.log(`:::::::::::::::::::::::::::::::::::::Task 12:::::::::::::::::::::::::::::::`)

const isPrime = n => {

    for (i = 2; i < n; i++)
        if (n % i === 0) {
            return false;
        }
    return n > 1;
}

console.log(isPrime(7)); //true
console.log(isPrime(9)); //false
console.log(isPrime(10)); //false
console.log(isPrime(101)); // true
console.log(isPrime(1001)); // false
console.log(isPrime(10001)); // false


console.log(`:::::::::::::::::::::::::::::::::::::Task 13:::::::::::::::::::::::::::::::`)

function validateEmail(str) {
    let reg = /^[\w\.]+@\w+\.\w+$/;
    return str.match(reg) ? true : false
}

console.log(validateEmail('magda.klopos@@dmd.pl'));