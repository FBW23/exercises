//1 Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog='true';

console.log(isDog? 'pat, pat' : 'find me a dog to pat!' );

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.


let speedCheck=50;
console.log(speedCheck>50? 'you are going too fast!': 'You are driving below the speed limit, Oma');


// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age;
console.log(age<=16? "serve butter beer": "serve beer");

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".


// console.log(isStudent? "Ticket costs €5,00" : "Ticket costs €12,00");

let isStudent =true;
let price = isStudent ? 5 : 12;
console.log(price);

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 
let okMarie;
console.log(okMarie? 'cake' : "Oh, bother");