const twoNumbers = (number1, number2) => {

    if ((typeof number1 === 'number') && (typeof number2 === 'number')) {

        for (let number3 = 1; number3 <= number2; number3++) {
            console.log(Math.pow(number1, number3));
        }

    }
}
twoNumbers(3, 5);

console.log(`----------------------FRUITS---------------`);
let x = 'Banana'
const printFavoriteFruit = () => {
    x = 5;
    console.log('My favorite fruit is ' + x);
};
printFavoriteFruit();






