
const myFunction = function (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
};

const myFunction2 = myFunction(4);
console.log(myFunction2);
//=======================================================
const cubed = function(number1, number2, number3) {
    let sum2 = Math.pow(number1, 3) + Math.pow(number2, 3) + Math.pow(number3, 3);
    let sum3 = Math.pow(number1, 3) + Math.pow(number3, 3) || Math.pow(number2, 3) + Math.pow(number3, 3) || Math.pow(number1, 3) + Math.pow(number2, 3);
    let sum4 = Math.pow(number1, 3);

    if (number1 && number2 && number3) {
        return sum2;
    }
    else if (number1 && number2) {
        return sum3;

    } else if (number1) {
        return sum4;

    }
    else {
        return 0;
    }
}

const myCube = cubed(7);
console.log(myCube);

//============================================

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const equality = function(a){
    if(a<=0){
        return true;
    }
    else{
        return false
    }
}

const myEquality = equality(5);
console.log(myEquality);

// Examples:
// * lessThanOrEqualToZero(3) ➞ false
// * lessThanOrEqualToZero(0) ➞ true
// * lessThanOrEqualToZero(-4) ➞ true
// * lessThanOrEqualToZero(10) ➞ false


