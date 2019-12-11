console.log("");
console.log("1. Declare a variable named isDog.");
console.log("");
let isDog = true;
console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

console.log("");
console.log("2. Declare a variable named speedCheck.");
console.log("");
// FIRST EXAMPLE
let mySpeed = 49;
let speedLimit = (mySpeed < 50 ? 'too slow' : 'too fast');
console.log(speedLimit);
// SECOND EXAMPLE
let pep = true;
let speedCheck2 = pep ? '...we are talking about speed.' : '...we are not talking about speed.';
console.log(speedCheck2);

console.log("");
console.log("3. Declare a variable named age.");
console.log("");
let age = 5;
let drink = age < 18 ? 'Serve butter beer.' : 'Serve beer.';
console.log(drink);

console.log("");
console.log("4. Declare a variable named isStudent.");
console.log("");
let iStudent = true;
let discountPrice = iStudent ? 'Ticket costs €5,00.' : 'Ticket costs €12,00.';
console.log(discountPrice);

console.log("");
console.log("5. Declare a variable named okMarie.")
console.log("");
let okMarie = true;
console.log(okMarie ? 'Let them eat cake.' : 'Oh, bother.');

// - ? - means IF 
// - : - means Else

var dog = false;

function myPet() {
    return dog ? 'How do i get it?' : 'Get me a dog!';
}
console.log(myPet()) // Get me a dog!

// console.log("");
// console.log("***Example with internal if conditions***");
// console.log("");
// var myName = true;
// var myAge = true;
// var message = myName ? (myAge ? "I'll like to know your age and name" : "I'll stick with just your name") : "Oh, I'll call you JavaScript then, cus you fine and mysterious"
// console.log(message) // I'll like to know your age and name
// console.log("");
// console.log("***Example with internal if conditions***");
// console.log("");
// var email = false;
// var phoneNumber = true;
// var message = email ? 'Thanks for reaching out to us' : phoneNumber ? 'Thanks for reaching out to us' : 'Please fill in your email or phone-number'
// console.log(message) //Thanks for reaching out to us

// console.log("");
// console.log("***Example with internal if conditions***");
// console.log("");    
// var home = true;
// var myLocation = 'Lagos';
// myLocation = home ? ('Brussels', 'london', 'Rio de Janero', 'Newark' ) : 'Kinshasha'
// console.log(myLocation) // Newark