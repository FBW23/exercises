// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog; //false when no value

console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, 
// print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let mySpeed = 50;
let speedCheck= mySpeed > 55 ? 'You re driving below the speed limit, Oma' : 'you re going too fast!';

console.log(speedCheck);

// 3. Declare a variable named age. If age is below 16, print "serv'you re going too fast!'e butter beer". Otherwise print "serve beer".

let age=16;
let serveBeer= age >= 12 ? 'serve beer':'serve butter beer';

console.log(serveBeer);

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent=false;
let priceTicket= isStudent? 'Ticket costs €5,00' : 'Ticket costs €12,00';

console.log(priceTicket);

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". 
// If not, print "Oh, bother". 

let okMarie=true;
let isCake= okMarie? 'Let them eat cake' : 'Oh, bother';

console.log(isCake);