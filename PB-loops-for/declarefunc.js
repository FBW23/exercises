
function multiples (number) {
    console.log(number * 7);
}
multiples(9);


console.log("...........Number 2..........");

const myValueFunction = function multiply (number){
console.log(number * 4);
};

myValueFunction(8);

console.log("................Arrow...........");

const myArrowFunction = (number) => {
    console.log(number * 4);
};
myArrowFunction(20);

console.log("...................number 4..............");

function myfourth(number, number1) {
    let myfourth = (number % number1)
    console.log(myfourth);
};
myfourth(20, 15);

console.log("..............4b..................");

const myValue = function(number, number1) {
    console.log(number % number1)
    };
    
    myValue(8, 2);
console.log("................4c...............");

const myArrowTwo = (number, number1) => {
    console.log(number % number1);
};
myArrowTwo(3, 6);
