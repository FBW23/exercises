
console.log("....................'Binary to Decimal'.......................");
// make a decimal number under 1000 into a binary number

function toBinary(number) {
    let binaryNumber = '';
    for (let i=9; i>-1; i--) {
    if (number > Math.pow(2, i)) {
        binaryNumber += '1';
        number = number - Math.pow(2, i);
    }else {
        binaryNumber += '0';
    }
}
return Number(binaryNumber)
}

console.log(toBinary(123));
console.log(toBinary(1024));
console.log(toBinary(682));

console.log("..........'Decimal to Binary'........................")

function toDecimal(binaryNumber2) {
    let binaryNumber = binaryNumber2.toString();
    let decimalNumber = 0;
    const last = binaryNumber.length-1; // 9
    //console.log(last);
    for (let i = 0; i < binaryNumber.length; i++) {
        //console.log('last char: ' + binaryNumber.charAt(last-i));
        if (binaryNumber.charAt(last-i) === '1') {
            //console.log(decimalNumber);
            decimalNumber += Math.pow(2, i);
        }
    }
    return decimalNumber;
}
console.log(toDecimal(1010101010)); //682
console.log(toDecimal(1111111111)); //1023