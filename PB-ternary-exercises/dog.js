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

let speedCheck;
console.log(speedCheck > 50 ? 'youre going too fast!': 'Youre driving below the speed limit, Oma');

let age;
console.log(age<=16? "serve butter beer": "serve beer");

let isStudent;
console.log(isStudent? "Ticket costs €5,00" : "Ticket costs €12,00");

let okMarie;
console.log(okMarie? 'cake' : "Oh, bother");

