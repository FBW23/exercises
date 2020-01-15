console.log(`------------Task1--------------`);
const addUp = (number) => {
    let sumUP = 0;
    for (let i = 1; i <= number; i++) {
        sumUP += i;
    } return sumUP;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

console.log(`------------Task2--------------`);
const powerCub = (a, b, c) => {
    if (a && b && c) {
        return (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    } else if (a && b) {
        return (Math.pow(a, 3) + Math.pow(b, 3));
    } else if (a) { return Math.pow(a, 3); }
    else { return 0; }
}
console.log(powerCub(1, 5, 9));
console.log(powerCub(2));
console.log(powerCub());
console.log(`------------Task3--------------`);

const dictionary = (string1,string2) => {
    return 
}
