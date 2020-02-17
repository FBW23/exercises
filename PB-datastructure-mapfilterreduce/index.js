// 1. Increment by 1
console.log("===== 1. Increment by 1 =====");
// Given an array of numbers, e.g. 
// javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; ,
// create a function that increments each element by 1. 
// Return the a new array of modified elements.

let arrayOfNumbers = [3, 45, 6, 56, 7, 9]
const incrementArr = arr => {
  return arr.map(item => item + 1);
};

console.log(incrementArr(arrayOfNumbers));

//2. Sum Up
console.log("===== 2. Sum Up =====");
// Write a function called sum that uses the 
// reduce to sum up an array of numbers. Do NOT use a 
// typical loop; just use the reduce method.
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

const sum = arr => {
  return arr.reduce((acc, value) => acc += value);
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

//3. instanceOf
console.log("===== 3. instanceOf =====");
//Sum up the instances of each of these:
//const data = ['car', 'car', 'truck', 'truck', 
//'bike', 'walk', 'car', 'van', 'bike', 'walk', 
//'car', 'van', 'car', 'truck', 'pogostick'];
// object = {
//   bike: 2
//   car: 5
//   pogostick: 1
//   truck: 3
//   van: 2
//   walk: 2
// }


//4. Inventors
//Look at the piece of code below and complete the tasks and questions.
console.log("===== 4. Inventors =====");

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];
// Give an array of inventors' first and last names.
let arrOfNames = inventors.map(arr => {
  return arr.first + ' ' + arr.last;
})
console.log(arrOfNames);

// How many years did all of the inventors live?
const livedYears = inventors.reduce((acc, val) => {
  return (val.passed - val.year) + acc;
}, 0);
console.log(livedYears);

// const totalYears = inventors.reduce((acc, val) => {
//   return 
// });