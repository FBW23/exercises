let sum = 0;
function addUpTo(n) {
    for (let i = 0; i <= n; i++) {
        // console.log(i);
        console.log(`first i ${i}`);
        let m = i;
        let sum = m + i;
        // console.log(sum);
    }
    return sum;
}

// addUpTo(3);
// 1 + 2 + 3 = 6

console.log(addUpTo(10));
// 1 + 2 + 3 + ... + 10 = 55

// addUpTo(7);
// 1 + 2 + 3 + ... + 7 = 28