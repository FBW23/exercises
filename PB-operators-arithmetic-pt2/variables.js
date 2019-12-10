let myString = 'hello';
console.log(myString);
// please change it to world
myString = 'world';
console.log(myString);
// variables have a life circle

let myNumber = 5;
console.log(myNumber),
    // please increment this number

    //first way - increase value by one
    myNumber++;
console.log(myNumber);

//second way - 
myNumber = myNumber + 1;
console.log(myNumber);

// normal way
myNumber += 1;
console.log(myNumber);

// don't put ++ to a string
myString++;
console.log(myString);

// detraction
myNumber = myNumber - 1;
console.log(myNumber);

myNumber--;
console.log(myNumber);

myNumber -= 1;
console.log(myNumber);

// add strings together
let firstString = 'hello';
let secondString = 'world';
myString = (firstString + ' ' + secondString); // concatenation to make "hello world" appear with a space in between
console.log(myString);

// accumulation
myString = `Result: ${firstString} ${secondString}`;
console.log(myString);


// ternary operator
let person = null; //on purpose - null, undefined and zero are considered falsy values
let name = person ? person : "stranger";
console.log("Howdy, " + name);

