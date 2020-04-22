// Special Arrays
// An array is special, if every even index contains an even number and every odd 
// index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
  const indexes =  arr.map(item => arr.findIndex(item));
  const specialArr = arr.map(item => item % 2);
  const specialIndex =  indexes.map(item => item % 2);
  console.log(specialIndex);

  const  strSpecialIndex = specialIndex.join('');
  const strSpecialArr = specialArr.join('');
  console.log(strSpecialArr);
  console.log(strSpecialIndex);
  if(strSpecialIndex === strSpecialArr) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));


// function isSpecialArray(arr) {
//   return arr.every ((x, y) => x%2 === y%2)
// }