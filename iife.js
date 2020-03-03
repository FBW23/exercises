(function init2() {
    let name = "Mozilla";
    (function () {
        console.log(name);
    })();
})();


function calculator(numberOne, numberTwo, operator) {
    let one = numberOne;
    let two = numberTwo;
    let op = operator;
    function makeAnOperation() {
        return function() {
            switch(operator) {
                case '+':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne + numberTwo}`);
                    break;
                case '-':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne - numberTwo}`);
                    break;
                case '*':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne * numberTwo}`);
                    break;
                case '/':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne / numberTwo}`);
                    break;
                case '%':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne % numberTwo}`);
                    break;
                default:
                    console.log('invalid operator!'); // Error default case
            }
        }
    }
    let myNewFunction = makeAnOperation();
    myNewFunction();
}
calculator(1, 2, '+');
calculator(10, 25, '%');