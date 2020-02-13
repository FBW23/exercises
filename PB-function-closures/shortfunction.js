const biggestNumbers = num => Math.max(...num);
console.log(biggestNumbers([2, 3, 4, 5, 899]));

const calcAverage = (array) => {
    let sum = 0;
    for (number in array) {
        sum += array[number];
    }
    let average = sum / array.length;
    return average;
};

let result = calcAverage([1, 2, 3, 4]);

const isInteger = (result) => Number.isInteger(result);

console.log(isInteger(result));
console.log(isInteger(10.2)); // false
console.log(isInteger(10)); // true

const isWhole = (num) => {
    let sum = 0;
    for (number in num) {
        sum += num[number];
    }
    let average = sum / num.length;
    return Number.isInteger(average);
};

console.log(isWhole([5, 5, 5, 5, 5]));