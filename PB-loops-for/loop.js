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

for (let z = 1; z <= 100; z++) {
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


let que = 0;
for (let time = 0; time <= 1000; time++) {
    if (time % 3 === 0 && time % 5 === 0) {
        // console.log(time);
        que += time;
        console.log(que);
    }
}

console.log(".......................................");

let out = 0;
for (let put = 0; put <= 1000; put++) {
    if (put % 100 === 0) {
        console.log(put);
    }
}

console.log(".......................................");

let set = 0;
for (let double = 1; double <= 128;) {
    console.log(double);
    double += double;

}

console.log(".......................................");

let set1 = 0;
for (let double2 = 0; double2 <= 10; double2++) {
    if (double2 % 2 === 0) {
        console.log(double2);
    }
}

console.log(".......................................");

let set2 = 0;
for (let double3 = 1; double3 <= 15; double3++) {
    if (double3 % 3 === 0) {
        console.log(double3);
    }
}

console.log(".......................................");

let numb = 0;
for (number = 9; number >= 0; number--) {
    numb += number;
    console.log(number);
}

console.log(".......................................");

let numb1 = "";

for (number1 = 1; number1 <= 4; number1++) {
    numb1 = numb1 + number1 + number1 + number1;
}
console.log(numb1);

console.log(".......................................");

let numb2 = "";
for (number2 = 0; number2 <= 4; number2++) {
    numb2 = numb2 + number2;   

}
console.log(numb2 + numb2 + numb2);