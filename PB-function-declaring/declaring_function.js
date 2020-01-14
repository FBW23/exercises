console.log(`-----------------First-----------------`);
function myMultiplyFunction(multiplayer) {
    console.log(multiplayer * 2);
};
myMultiplyFunction(3);
console.log(`-----------------Second-----------------`);
const myValueFunction = function (multiplayer) {
    console.log(multiplayer * 2);
};
myValueFunction(3);
console.log(`-----------------Third-----------------`);
const myArrowFunction = (multiplayer) => {
    console.log(multiplayer * 2);
};
myArrowFunction(6);
console.log(`-----------------Fourth-----------------`);
function remainder(multiplayer, multiplayer2) {
    console.log((multiplayer % multiplayer2));

}
remainder(50, 20);
let multiplayer3 = Math.floor(Math.random() * 110) + 1;
let multiplayer4 = Math.floor(Math.random() * 100) + 1;
const reminder2 = function (multiplayer3, multiplayer4) {
    console.log((multiplayer3 % multiplayer4));
};
reminder2(multiplayer3, multiplayer4);
let multiplayer5 = Math.floor(Math.random() * 110) + 1;
let multiplayer6 = Math.floor(Math.random() * 200) + 1;
const remainder3 = (multiplayer5, multiplayer6) => {
    console.log((multiplayer5 % multiplayer6));
};
remainder3(multiplayer5, multiplayer6);