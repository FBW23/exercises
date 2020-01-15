// **1. Add Up.**

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

// **2. Cubed.**

const sumOfCubes = (s, d, f) => {

    if (s && d && f) {
        return (Math.pow(s, 3) + Math.pow(d, 3) + Math.pow(f, 3));
    } else if (s && d) {
        return (Math.pow(s, 3) + Math.pow(d, 3));
    } else if (s) {
        return (Math.pow(s, 3));
    } else {
        return 0;
    }
}
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


// **3. String Check.**



// **4. Less Than or Equal to Zero?**

const lessThanOrEqualToZero = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));