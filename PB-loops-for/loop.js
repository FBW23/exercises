let i = "bottle of the wall";
let sum = 0;

while (i < 5) {
    sum = sum + 1;
    console.log(i);
    i++;

}
for (i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log("There is One Bottle of Beer on the Wall");

    } else if (i === 2) {
        console.log("There is Two Bottle of Beer on the Wall");
    } else if (i === 3) {
        console.log("There is Three Bottle of Beer on the Wall");
    } else if (i === 4) {
        console.log("There is Four Bottle of Beer on the Wall");
    } else if (i === 5) {
        console.log("There is Five Bottle of Beer on the Wall");
    }
    // console.log("There is " + i + " Bottle of Beer on the Wall");
}

console.log("...........................................");


for (let n = 1; n <= 20; n++) {
    //  if (n === 0) {
    //     console.log(n + " is even");
    // }

    if (n % 2) {
        console.log(n + " is odd");
    } else {
        console.log(n + " is even");
    }
}

console.log("........................................");

for (let m = 0; m <= 10; m++) {
    if (m * 9) {
        console.log(m * 9);
    }
}

console.log("......................................");

for (let z = 0; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log(z + " FizzBuzz");
    } else if (z % 3 === 0) {
        console.log(z + " Buzz");
    } else if (z % 5 === 0) {
        console.log(z + "  Fizz");
    } else {
        console.log(z);
    }
}

console.log(".......................................");


