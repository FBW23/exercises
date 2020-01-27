function add(a) {
    return function(b) {
        return a+b;
    };
}
console.log(add(3)(4));
console.log(add(10)(5));

console.log("...............Exercise...................");

const multiplier = function (c) {
    return function (d) {
        return c * d;
    }; // closing the return from line 14
}; // closing the const statement
console.log(multiplier(3)(4));

console.log("..................Exercise 2................");

let person = 40;
let age = 60;
let wage = (1000 * 0.1);

(output = function (person, age, wage) {
 return console.log('output = '+`${(age - person) * 12 * wage}`)

})(person,age,wage)