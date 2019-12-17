let weather = 'good';
let takeTheTaxi = false;
let umbrella = (weather === 'good') && (takeTheTaxi === false) ? false : true; // && combine conditions, both have to be true at the same time - && AND operator
console.log();
let umbrella2 = (weather === 'good') || (takeTheTaxi === false) ? false : true; // || OR operator
console.log("AND operator ->", umbrella);
console.log("OR operator ->", umbrella2);
console.log();
let umbrella3 = (weather !== 'good') && (takeTheTaxi === true) ? 'umbrella needed' : 'umbr not needed';
let umbrella4 = (weather !== 'good') || (takeTheTaxi === true) ? 'umbrella needed' : 'umbr not needed';
// the weather must be good otherwise we don't take the umbrella
console.log(umbrella3, umbrella4);
console.log();

let hungry = true;
let thirsty = false;
let goToRestaurant = (hungry === true) || (thirsty === false) ? 'go to restaurant' : 'go to a bar';
console.log(goToRestaurant);

let break2 = true;
let summer = true;
let raining = false;
let leaveJacketAtHome = ((break2) && (summer) || raining) ? 'yes, leave it at home' : 'bring it to school!';
console.log(leaveJacketAtHome);