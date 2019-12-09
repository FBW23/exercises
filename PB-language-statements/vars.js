var first=2; //number
var second = 'hello world'; //string
var third = true; //Boolean

let fourth =2; //number
let fifth = 'hello world'; //string
let sixth = false; //Boolean
console.log(first);
var first = 4;    // last defineded variable overwrite the first one
console.log(first);
console.log(fourth);

//let fourth = 29; //with 'let' te variable cann't be overwrited , daca a fost odata numita, nu o poti schimba pe parcus... ca la 'var'
fourth = 29; // for overwrite 'let' variables
console.log(fourth);//Uncaught SyntaxError: Identifier 'fourth' has already been declared


let s = "hallo";
function foo() {

    console.log(s);
    var s = "test";
    console.log(s);
}
foo();

let something;
let number = null;
something = 5;
console.log(number);
console.log(typeof(number));
let anything = 4;
console.log(anything);

