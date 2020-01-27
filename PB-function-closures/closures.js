console.log(`---------------1-------------------`);
function add (a) {
    return function (b){
        return a+b;
    };
}
console.log(add(3)(4));

console.log(`----------------2------------------`);
function multiplier(c){
    return function(d){
        return c*d;
    };

}
console.log(multiplier(4)(5));
console.log(`-----------------3-----------------`);
let currentAge=40;
let endAge=65;
let thePercentage=0.05;
let amoutn = 2000;

(function(currentAge,endAge,thePercentage,amoutn){
    return console.log('The amount will be: '+(endAge-currentAge)*12*thePercentage*amoutn);
})(currentAge,endAge,thePercentage,amoutn);
