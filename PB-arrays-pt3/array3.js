console.log(`-----------------EX1---------------`);
const isFourLetters = stringNames => {
    let totalNume = [];
    let letterCount = 4;
    for (let i = 0; i < stringNames.length; i++) {
        if (stringNames[i].length === letterCount) {
            totalNume.push(stringNames[i]);

        }

    }
    return "The word with the four letter is: " + totalNume;

};
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));

console.log(`-----------------EX2---------------`);
let months = [
    'January',
    'February',
    'March',
    'April','Mai',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December'];

const monthName = missingMonth => months[missingMonth-1];
console.log(monthName(3));
console.log(monthName(4));
console.log(monthName(1));
console.log(monthName(9));

console.log(`-----------------EX3---------------`);
const amplify = number1 => {
    let countingNumber = [];
    for (let g=0;g<=number1;g++) {
        console.log(g);
        if (g%4 === 0){
            countingNumber.push(g*10);
            
        }return countingNumber;
    }
     
};
console.log(amplify(4));
console.log(`-----------------EX4---------------`);