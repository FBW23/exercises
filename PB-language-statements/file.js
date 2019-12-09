let message = "hallo";
function printFunction() {
    // it starts a complete new memory
    // happening in the background: make a "box" for s;
    // HOISTING
    console.log(message); // undefined
    var message = "test"; // define as "test"
    console.log(message); // gives us "test"
}   
printFunction();