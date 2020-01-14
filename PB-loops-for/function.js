// Declaring a funtion

function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}



// Anonymos function
const myFunction = function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}; // ; because is using const!!!

// Calling function with an arguement
multiplyWithTwo(5);

//Arrow Function 
// => because we using Arrow
const myArrowFunction = (number) => {

    console.log(number *2);
};
myArrowFunction(8);

console.log("....................Exercise.............................");


