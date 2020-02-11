const calcAverage = (num) => {
  let sum = 0;
  for (number in num) {
    sum += num[number];
  }
  let average = sum /num.length;
  return average;
};

let result = calcAverage([1, 2 ,3 ,4 ]);
const isInteger = (result) => Number.isInteger(result);

console.log(isInteger(result));


const isWhole =( num ) => {
  let sum = 0;
  for (number in num) {
    sum += num[number];
  }
}