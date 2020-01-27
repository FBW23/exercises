// add
function add(a) {
    return function(b) {
        return a + b;
    }
    
}

// Multiplier
const multiplier = function(a) {
    return function(b) {
        return a * b;
    }; // closing the return from  line 26
}; // Closing the const statement thats why we need ;

console.log(multiplier(2)(2));
console.log(multiplier(3)(4));

// Pension
(function(age,retAge,mWage,percentage) {
    
    let result;
    percentage = parseFloat(percentage);

    if(age > retAge) {
        console.log("You're already retired!");
    } else {
         result = (retAge - age) * 12 * percentage * mWage;
         console.log(result);
        }
})(40, 65, 2000, 0.05);

