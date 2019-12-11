function dog(isDog){
let message;

if(isDog){
message = "pat , pat";
}

else{
    message="find me a dog to pat"
}
return message;
}
console.log();
//-----------------------------------

let isDog;
console.log(isDog? 'pat pat': 'find me a dog to pat');

let speedCheck = 50; 
let currentSpeed = 60;
console.log(speedCheck < currentSpeed ? 'youre going too fast!': 'Youre driving below the speed limit, Oma');

let age=16;
console.log(age>=16? "serve butter beer": "serve beer");

let isStudent;
console.log(isStudent? "Ticket costs €5,00" : "Ticket costs €12,00");

let okMarie;
console.log(okMarie? 'cake' : "Oh, bother");

let message = "hello";
console.log(message[length]);