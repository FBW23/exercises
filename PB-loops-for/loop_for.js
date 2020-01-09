console.log('------------------1----------');
let sum = 0;
for (i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);
console.log('------------------2----------');


let bottle = " one bottle of beer on the wall";
let r = 0;

// do {
//     r = r + 1;
//     console.log('There is ' +r+bottle);
// } while (r < 5);

for (r = 1; r <= 5; r++) {
    if (r === 1) {
        console.log('There is one bottle of beer on the wall');
    } else if (r === 2) {
        console.log('There is two bottles of beer on the wall');
    } else if (r === 3) {
        console.log('There is three bottles of beer on the wall');
    } else if (r === 4) {
        console.log('There is four bottles of beer on the wall');
    } else if (r === 5) {
        console.log('There is five bottles of beer on the wall');
    }

}

console.log('------------------2---second solution-------');
let bar = ['one', 'two', 'three', 'four', 'five'];
wall = 0;
for (wall = 1; wall <= 5; wall++) {
    if (wall === 1) {
        console.log('There is ' + bar[0] + ' bottle on the wall');

    } else if (wall === 2) {
        console.log('There are ' + bar[1] + ' bottles on the wall');

    } else if (wall === 3) {
        console.log('There are ' + bar[2] + ' bottles on the wall');

    } else if (wall === 4) {
        console.log('There are ' + bar[3] + ' bottles on the wall');

    } else { console.log('There are ' + bar[4] + ' bottles on the wall'); }

}

console.log('------------------3----------');

let myNumber = 0;
for (myNumber = 1; myNumber <= 20; myNumber++)
    if (myNumber % 2) {
        console.log(myNumber + '  Odd');
    } else {
        console.log(myNumber + '  Even');
    }



console.log('------------------4----------');

let multiply;

for (multiply = 0; multiply <= 10; multiply++) {
    console.log(multiply * 9);
}

console.log('------------------5----------');
for (let cocoNuts = 1; cocoNuts <= 100; cocoNuts++) {
    if (cocoNuts % 3 === 0 && cocoNuts % 5 === 0) {
        console.log(cocoNuts + ' FizzBuzz');
    } else if (cocoNuts % 3 === 0) {
        console.log(cocoNuts + ' Fizz ');
    } else if (cocoNuts % 5 === 0) {
        console.log(cocoNuts + ' Buzz ');
    } else {
        console.log(cocoNuts);
    }
}

console.log('------------------6----------');
let newNumber = 0;
for (myKoko = 1; myKoko <= 1000; myKoko++) {
    if (myKoko % 3 === 0 && myKoko % 5 === 0) {
        newNumber = newNumber + myKoko;
        console.log(newNumber);

    }
}
console.log('------------------7a----------');
let testSeven = 0;
for (testSeven = 1; testSeven <= 1000; testSeven++) {
    if (testSeven % 100 === 0)
        console.log(testSeven);
}

console.log('------------------7b----------');
let dubluUP;
for (dubluUP = 1; dubluUP <= 128;) {
    console.log(dubluUP);
    dubluUP += dubluUP;

}





console.log('------------------7c----------');
for (let kokoTip = 0; kokoTip <= 10; kokoTip++) {
    if (kokoTip % 2 === 0) { console.log(kokoTip); }

}


console.log('------------------7d----------');
for (let kokoTip = 0; kokoTip <= 15; kokoTip++) {
    if (kokoTip % 3 === 0) { console.log(kokoTip); }

}
console.log('------------------7e----------');



for (let kokoMud = 9; kokoMud >= 0; kokoMud--) {
    console.log(kokoMud);

}

console.log('------------------7f----------');
let mimiKey = "";
for (let kokoMistake = 1; kokoMistake <= 4; kokoMistake++) {
    mimiKey = mimiKey + kokoMistake + kokoMistake + kokoMistake;


}
console.log(mimiKey);







console.log('------------------7g----------');

let wantHome = "";
for (let home = 0; home <= 4; home++) {
    wantHome = wantHome + home;

}
console.log(wantHome + wantHome + wantHome);