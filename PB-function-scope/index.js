const EXP = function (num1, num2) {
    if (Object.prototype.toString.call(num1) === '[object Number]' && Object.prototype.toString.call(num2) === '[object Number]') {
        for (var i = 1; i <= num2; i++) {
            console.log(Math.pow(num1, i));
        }
    } else {
        console.log('please use only numbers');
    }
}
console.log(Object.prototype.toString.call(9));
EXP(2, 5);


//----------------------
let myFavoriteFruit = 'orange';
const printFavoriteFruit = function () {
    myFavoriteFruit = 'apple';
    console.log("My favorite fruit is: " + myFavoriteFruit);
};

printFavoriteFruit();

//---------------------------------

const exponent = (num1, num2) => {
    let result = Math.pow(num1, num2);
};
console.log(exponent(2, 4));
// console.log(result);
console.log('trying to access the variable \"result\" will detect a break in the code cause you may never access a locally scoped variable from a global scale \" like in the case of being out side the function\"')