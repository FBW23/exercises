// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let a = 50;
let b = 49;

// Easier solution
if ((50 <= a) && (a <= 99)) {
    console.log(true);
}
if ((50 <= b) && (b <= 99)) {
    console.log(true);
}
console.log(false);


// Harder solution 
if (((50 <= a) && (a <= 99)) || ((50 <= b) && (b <= 99))) {
    console.log(true);
} else {
    console.log(false);
}