// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) { 
        sum += args[i]; // sum = sum + args[i] -> it takes at each time the array indicated by the loop and performs the sum of the the previous calculation plus the next array. 

        // *** first case ***
        // only one loop because the length of the arguments is 1. so:
        // first loop
        // sum = 0 + 1 = 1

        // *** second case ***
        // two loops because the length of the arguments is 2. so:
        // first loop
        // sum = 0 + 1 (i = 1 so it takes the first array, which is 1) = 1
        // second loop
        // sum = 1 + 25 (i = 2 so it takes the second array, which is 15) = 16

        // *** third case ***
        // three loops because the length of the arguments is 3. so:
        // first loop
        // sum = 0 + 25 (i = 1 so it takes the first array which is 25) = 25
        // second loop 
        // sum = 25 + 25 (i = 2 so it takes the second array which is again 25) = 50
        // third loop
        // sum = 50 + 20 (i = 3 so it takes the third array which is 20) = 70
    }
    return sum;
};




console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

// function printNamesIndividually(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log('Hello ' + args[i] + '!'); // bracket notation for arguments: first args[0], second args[1], third args[2]
//     }
// }
// printNamesIndividually('Constantine', 'Balasz', 'Nagster', 'Joao');