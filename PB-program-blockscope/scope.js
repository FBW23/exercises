const determiner = -3;

if (determiner < 0) {
    var x;
    x = ' is smaller than 0';
    console.log(x);
} else {
    x = 'is equal or greater than 0';
    console.log(x);
}
let updater;
if (determiner >= 0) {
    updater = 'greater or equal to 0';
    var message = 'Positive Integer';
} else {
    updater = 'less than 0';
}
console.log(updater);
console.log(message);
console.log(message + 'will print because the var is globally reachable no matter where it lives , if you give a value to determiner you will start getting string values for message');

console.log('where you do not need more than one line of code and for not complicated statements and outputs , it is ok to use the ternary operator');
console.log('example : let isCorrect= student ? "5euros fee" : "12euros fee"');
console.log('for more advanced cases you ll need the if else kind of statements');