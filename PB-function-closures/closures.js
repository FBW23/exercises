// Default regular function
function add(a) {
    return function(b) {
        return a+b;
    };
}
console.log(add(3)(4));
console.log(add(5)(10));

// break 1245 

// Anonymous function
const multiplier = function (c) {
    return function (d) {
        return c * d;
    }; // closing the return from line 14 
}; // closing the const statement
console.log(multiplier(3)(4));



