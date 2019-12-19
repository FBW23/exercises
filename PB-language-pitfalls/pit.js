// NaN = Not a Number
console.log(isNaN ("hello"));
console.log(isNaN (3));
// it is a property of the global object. The value of NaN is the same as the value of

let b = 0.1*0.2;
console.log(b.toFixed(2));

console.log(Infinity/0);
console.log(Infinity/Infinity);
console.log(1/0);


let christmas = true;
let newYearEve = false;
let decoration = null;

if(christmas) {
    decoration = "Christmas Decoration";

} else if (newYearEve) {
    decoration ="NYE";
} else {
    decoration = null;
}

console.log(decoration);