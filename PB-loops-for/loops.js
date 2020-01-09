console.log();
console.log('Write a program to add up the numbers 1 to 20.');
console.log();

let i = 1;
let sum = 0;

while (i <= 20) {
    sum = sum + i;
    console.log('i ->', i);
    console.log('sum ->', sum);
    i++;
}

for (let i = 1; i < 20; i++) {
    sum += i;
}

console.log('output ->', sum);

console.log();
console.log('Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.');
console.log();

for (let bottle = 0; bottle < 5; bottle++) {
    console.log('There are/is', bottle, 'bottle(s) of beer on the wall.');
}

