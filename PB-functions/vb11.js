console.log(`// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:
	
// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * XO("ooxx") ➞ true
// * XO("xooxx") ➞ false
// * XO("ooxXm") ➞ true (case insensitive)
// * XO("zpzpzpp") ➞ true (returns true if no x and o)
// * XO("zzoo") ➞ false`);

// const exercise11 = (string2) => {
//     let string = string2.toLowerCase();
//     let numberOfO = 0;
//     let numberOfX = 0;
//    


//     for (let i = 0; i < string.length; i++) {
//         if (string.indexOf('o', firstMatchOfO) + 1 > -1) {
//             numberOfO = +1;
//             firstMatchOfO = string.indexOf('o', firstMatchOfO) + 1;
//             console.log(`number of O: ${string.indexOf('o', firstMatchOfO + 1)}`);
//         }
//         if (string.indexOf('x', firstMatchOfX) + 1 > -1) {
//             numberOfX = +1;
//             firstMatchOfX = string.indexOf('x', firstMatchOfX + 1);
//             console.log(string.indexOf('x', firstMatchOfX + 1));
//         }

//     }
//     if (string.indexOf('o') === -1 && string.indexOf('x') === -1) {
//         match = true;
//     }
//     match = numberOfO === numberOfX;

//     return match;
// }
// console.log(exercise11('xxoo'));
// console.log(exercise11('xooxx'));
// console.log(exercise11('ooxXm'));
// console.log(exercise11('zpzpzpp'));
// console.log(exercise11('zzoo'));



// const XO = (string2) => {
//     let string = string2.toLowerCase();
//     let x = 0;
//     let o = 0;
//     let firstO = string.indexOf('o');
//     let firstX = string.indexOf('x');

//     let match = false;


//         for (let i = 0; i < string.length; i++) {
//             if (firstO > -1  ) {

//             o++
//             firstO=string.indexOf('o')+1;
//              }
//             if ( firstX > -1){
//            x++
//             firstX=string.indexOf('x')+1;
//              }

//         }else {
//             match = true;

//         } 
//         }
//     }

//         console.log(o);
//         console.log(x);

//         match= x===o;
// return match;


// console.log(XO('xxoo'));



function XO(myString) {

    if (myString) {
        let matchXs = myString.match(/x/gi);
        let matchOs = myString.match(/o/gi);
        let allXs = 0;
        let allOs = 0;

        if (matchXs) {
            allXs = matchXs.length;
        }
        if (matchOs) {
            allOs = matchOs.length;
        }
        if (allXs === allOs) {
            console.log(allXs);
            return true;
        } else {
            return false;
        }
    }
    return true;

}

console.log(XO());
console.log(XO('xxoo'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));