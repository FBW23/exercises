const isWhole = arr => {
  let result = arr.reduce((a, b) => (a + b));
  result /= 4;
  if (parseInt(result) === result) {
    return true;
  }
  return false
};


console.log(isWhole([2, 2, 2, 2]));
console.log(isWhole([2, 2, 2, 5]));
// console.log(isWhole(2, 2, 2, 2));  

const isWhole2 = (...arr) => {

};