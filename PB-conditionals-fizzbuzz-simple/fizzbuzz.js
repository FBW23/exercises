console.log("NO Function ---Reload The Pae To GENERATE NUMBER");

let fizzBizz = Math.floor(Math.random() * 50) + 1;
if ((fizzBizz % 3 === 0) && (fizzBizz % 5 === 0)) {
    console.log("FizzBuzz");
} else if (fizzBizz % 5 === 0) {
    console.log("Buzz");

} else if (fizzBizz % 3 === 0) {
    console.log("Fizz");

} else {
    console.log(fizzBizz);
}
