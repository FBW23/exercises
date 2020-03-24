console.log(`// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false`);



//  const isPrime = (x) => 
//  {


//         let prime = false
//         if (x === 1) {
//              prime = false;
//          } else if (x === 2) {
//              prime = true;
//         } else {
//              for (let i = 2; i < x; i++) {
//                  if (x % i === 0) {
//                    prime = false;
//                } 
//             }

//         }
//         return prime;
//      }



// function test_prime(n) {

//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }




const isPrime = (x) => {
    if (x >= 2) {
        for (let i = 3; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}

console.log(`baseNumber is 2 : ${isPrime(2)}`);
console.log(`baseNumber is 3 : ${isPrime(3)}`);
console.log(`baseNumber is 5 : ${isPrime(5)}`);
console.log(`baseNumber is 7 : ${isPrime(7)}`);
console.log(`baseNumber is 11 : ${isPrime(11)}`);
console.log(`baseNumber is 13 : ${isPrime(13)}`);
console.log(`baseNumber is 17 : ${isPrime(17)}`);
console.log(`baseNumber is 19 : ${isPrime(19)}`);
console.log(`baseNumber is 23 : ${isPrime(23)}`);
console.log(`baseNumber is 29 : ${isPrime(29)}`);


console.log(`baseNumber is 9 : ${isPrime(9)}`);
console.log(`baseNumber is 2500 : ${isPrime(2500)}`);