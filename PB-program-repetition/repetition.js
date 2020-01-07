let i = 0;

while (i < 15) {
    console.log('loop start ->', i);
    i++;
    console.log('loop end ->', i);
    console.log();
}

let sum = 0;

while (i < 20) {
    i++;
    sum += i; 
    console.log();
}
console.log('final sum ->',sum);
console.log();
console.log();

do {
    i = i + 1; 
    console.log('the number is->',i);
} while (i < 20); 
