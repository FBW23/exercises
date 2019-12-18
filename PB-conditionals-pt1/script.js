const integerM = [a = 67, b = 9, c = 10, d = 19, e = 4, f = 25, g = 39, h = 26,i = 40, j = 0,  k = 12, l = 4,  m = 12, n = 15,  int1 = 70, int2 = 2, int3 = 5, int4 = 5,  number = 20]
console.log(integerM.length);
console.log(integerM[1]);
for (var x = 0 ; x < integerM.length ; x++) {
    if ( Number.isInteger(integerM[x])) {
        if ((50 <= a && a <= 99) || (50 <= b && b <= 99)) {
            console.log(true);
        } else {
            console.log(false);
        }
        if ((50 >= c && c <= 99) || (50 >= d && d <= 99) || (50 >= e && e <= 99)) {
            console.log(true);
        } else {
            console.log(false);
        }
        if (f > g && f > h) {
            console.log(f);
        } else if (g > h) {
            console.log(g);
        } else {
            console.log(h);
        }
        let originalString = "javascript";
        let py = 'Py';
        let newString = py.concat(originalString);
        let checkString = "Pylkjl";
        if ((checkString.includes(py))) {
            console.log(originalString);
        }
        let sum= i+j;
        if (sum >= 50 && sum <= 80) {
            console.log(65);
        } else if (sum > 80) {
            console.log(80);
        } else {
            console.log('below the range');
        }
        let Sum = k + l;
        let minus = k - l;
        if (Sum === 8 || minus === 8) {
            console.log(true);
        }
      let SUm = m + n;
        if (m === 15 || n === 15 || SUm === 15) {
            console.log(true);
        }
        if (int1 % 7 || int1 % 11 || int2 % 7 || int2 % 11) {
            console.log(true);
        }
       let sum2 = int3 + int4;
        if (int3 === int4) {
            console.log(3 * sum2);
        } else if (!(int3 === int4)) {
            console.log(sum2);
        }
        if (number - 19 > 0) {
            console.log((number - 19) * 2);
        }
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
    }
    // if(Number.isInteger(a)&&Number.isInteger(b)&&Number.isInteger(c)&&Number.isInteger(d)&&Number.isInteger(e)&&Number.isInteger(f)&&Number.isInteger(g)&&Number.isInteger(h)&&Number.isInteger(i)&&Number.isInteger(j)&&Number.isInteger(k)&&Number.isInteger(l)&&Number.isInteger(m)&&Number.isInteger(n)&&Number.isInteger(int1)&&Number.isInteger(int2)&&Number.isInteger(int3)&&Number.isInteger(int4)&&Number.isInteger(number)){
        else {
            console.log('please use only integers');
        }
}
