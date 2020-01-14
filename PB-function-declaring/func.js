let myNumber = function (number, number1) {
    console.log(number % number1)
};

myNumber(20, 40);

console.log("...............................");

const myNumb = (x, y) => {  
console.log(typeof x);

    if ((typeof x === 'number') && (typeof y === 'number')) {
   
        for (let z=1; z <= y; z++) {
        console.log(Math.pow(x, z));
    }
}
}


myNumb(4, 6);

console.log("..................1c...............");

const myValue = (a, b) => {
for (let c = 1; c <= b; c++) {
    console.log(Math.pow(a,c));
}}
myValue(2,8);

console.log("....................2...............");

let myFruit = 'Apple';
const printFavoriteFruite = () => {
    
    myFruit = 7;
    console.log(myFruit);
}
printFavoriteFruite();