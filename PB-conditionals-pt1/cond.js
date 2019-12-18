let a = 9,
    b = 8.1;
if (Number.isInteger(a) && Number.isInteger(b)) {
    if ((50 <= a && a <= 99) || (50 <= b && b <= 99)) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('please use only integers')
}

//2.
let c = 10,
    d = 19.4,
    e = 4;
if (Number.isInteger(c) && Number.isInteger(d) && Number.isInteger(e)) {
    if ((50 >= c && c <= 99) || (50 >= d && d <= 99) || (50 >= e && e <= 99)) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('please use only integers');
}

//3.
let f = 25,
    g = 39.4,
    h = 26;
if (Number.isInteger(f) && Number.isInteger(g) && Number.isInteger(h)) {
    if (f > g && f > h) {
        console.log(f);
    } else if (g > h) {
        console.log(g);
    } else {
        console.log(h);
    }
} else {
    console.log('please give only integers');
}

//4.
let originalString = "javascript";
let py = 'Py';
let newString = py.concat(originalString);
let checkString = "Pylkjl";
if ((checkString.includes(py))) {
    console.log(originalString);
}
//5.
let i = 40.3,
    j = 0;
let sum = i + j;
if(Number.isInteger(i)&&Number.isInteger(j)){
    if (sum >= 50 && sum <= 80) {
        console.log(65);
    } else if (sum > 80) {
        console.log(80);
    } else {
        console.log('below the range');
    }
}
else{
    console.log('please use only integers');
}

//6.
let k = 12.4,
    l = 4;
let Sum = k + l;
let minus = k - l;
if(Number.isInteger(k)&&Number.isInteger(l)){
    if (Sum === 8 || minus === 8) {
        console.log(true);
    }
}
else{
    console.log('please use only integers');
}

//7.
let m = 12,
    n = 15.4;
let SUm = m + n;
if (Number.isInteger(m) && Number.isInteger(n)) {
    if (m === 15 || n === 15 || SUm === 15) {
        console.log(true);
    }
} else {
    console.log('please give only integers');
}
//8.
let int1 = 70.1,
    int2 = 2.3;
if (Number.isInteger(int1) && Number.isInteger(int2)) {
    if (int1 % 7 || int1 % 11 || int2 % 7 || int2 % 11) {
        console.log(true);
    }
} else {
    console.log('please give an integer');
}
//9.
let int3 = 5,
    int4 = 5.4;
let sum2 = int3 + int4;
if (Number.isInteger(int3) && Number.isInteger(int4)) {
    if (int3 === int4) {
        console.log(3 * sum2);
    } else if (Number.isInteger(int3) && Number.isInteger(int4) && Number.isInteger(sum2) && !(int3 === int4)) {
        console.log(sum2);
    }
} else {
    console.log('please give an integer');
}
//10.
let number = 20.6;
if (Number.isInteger(number) && number - 19 > 0) {
    console.log((number - 19) * 2);
} else {
    console.log('please give an integer')
}
//11.
let firstName = 'jamil',
    age = 5;
if (age >= 2 && age < 5) {
    console.log('firstName is a BABY')
} else if (age >= 5 && age < 13) {

    console.log('firstName is a child');
} else if (age >= 13 && age < 20) {

    console.log('firstName is a teenager');
} else if (age = 20 && age < 30) {
    console.log('firstName is a young adult');
} else {
    console.log('firstName is a adult');
}