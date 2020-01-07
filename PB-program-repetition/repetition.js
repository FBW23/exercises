let i = 1;
while (i < 15) {
    i++;
}
console.log(i);


let phone = 0;
let bar = 1;

do {
    phone = phone + 1;
    bar = bar + phone;
    console.log(bar);
} while ((phone > 0 && phone < 20));





let result = "The Number is ";
let a = 1;

do {
    a = a + 1;
    result = result + a;
    console.log(result);
} while (a < 20);
console.log(a);