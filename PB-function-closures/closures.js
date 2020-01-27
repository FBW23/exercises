function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(3)(4));
console.log(add(15)(5));

function multiplier(a) {
    return function (b) {
        return a * b;
    };
}

// Function stored in a variable...cd
let multiplier2 = function (c) {
    return function (d) {
        return c * d;
    };
};

console.log(`multiplier -> ${multiplier2(4)(5)}`);

// function pension (currentAge, retirementAge, monthlyWage, percentage) {
//     if (currentAge >= retirementAge) {
//         return 'You are already retired';
//     } else if (currentAge < retirementAge) {
//         let yearsLeft = retirementAge - currentAge;
//         let monthlySavingPercentage = (monthlyWage * percentage) / 100;
//         return yearsLeft * monthlySavingPercentage * 12;
//     } 
// }

// console.log(pension(40, 65, 2000, 5));

(function (currentAge, retirementAge, monthlyWage, percentage) {
    if (currentAge >= retirementAge) {
        return console.log(`You\'re already retired.`); // alt + shift + 7
    } else if (currentAge < retirementAge) {
        let yearsLeft = retirementAge - currentAge;
        let monthlySavingPercentage = (monthlyWage * percentage) / 100;
        return console.log(`You saved exactly ${yearsLeft * monthlySavingPercentage * 12} euros.`);
    }
})(40, 65, 2000, 5);