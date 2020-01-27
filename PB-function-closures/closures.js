function add (a) {
    return function(b) {
        return a + b;
    };
}
console.log(add(3)(4));
console.log(add(5)(10));

//=======================================

function multiply(c) {
    return function(d) {
        return c * d;
    };
}
console.log(multiply(5)(7));