console.log('------------------1----------');
let sum = 0;
for (i=1;i<=20;i++){
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

for (r=1;r<=5; r++) {
    if (r ===1) {
        console.log('There is one bottle of beer on the wall');
    }else if (r === 2){
        console.log('There is two bottles of beer on the wall');
    }else if (r === 3){
        console.log('There is three bottles of beer on the wall');
    }else if (r === 4){
        console.log('There is four bottles of beer on the wall');
    }else if (r === 5){
        console.log('There is five bottles of beer on the wall');
    }
    
}

console.log('------------------2---second solution-------');
let 