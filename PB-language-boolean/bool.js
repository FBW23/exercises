
let three = 3;
console.log(three==three); // true
console.log(three===three); // true
// ya theres a differences '==' is loose and '===' is strict.
console.log(three=three); // answer is 3

let myNumber = true;
console.log(myNumber == true? true : false); //true
let noNumber = !(myNumber === true)? true : false;
console.log(noNumber); // false

let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John';
console.log(name); // Stacey