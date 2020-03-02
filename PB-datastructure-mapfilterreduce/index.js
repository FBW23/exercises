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
console.log("===== NOT DONE =====");

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

// 5. Square Root
<<<<<<< HEAD
// Given an array of numbers, find the square root of those 
// numbers using map.
console.log("===== 5. Square Root =====");

myArrOfNumb = [4, 9, 16];

const sqrtArr = myArrOfNumb.map( item => Math.sqrt(item));
console.log(sqrtArr);
=======
console.log("===== 5. Square Root =====");
// Given an array of numbers, 
// find the square root of those numbers using map.

const myArrOfNum = [4, 9, 16];

const sqrArr = myArrOfNum.map( item => Math.sqrt(item));
console.log(sqrArr);

// 6. Instances of Letters
console.log("===== 6. Instances of Letters =====");
console.log("===== NOT DONE =====");

// Create a function that takes a string as an argument 
// and counts the number of each letter in that string.

// 7. List of Movies
console.log("===== 7. List of Movies =====");
// Given the code below, complete the task
// Create a function that returns an array of your friends 
// favourite films!

let friends = [{
  name: 'Maria',
  films: ['Avengers: Infinity War', 'Avatar' ],
  age: 22
}, {
  name: 'John',
  films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
  age: 29
}, {
  name: 'Jean',
  films: ['Deadpool', 'Incredibles 2'],
  age: 20
}];

const favoriteFilms = arr => {
  const filmArr =  arr.map(item => item["films"]);
  return filmArr.flat();
};

console.log(favoriteFilms(friends));

// 8. Filter Evens
console.log("===== 8. Filter Evens =====");
// Write a function called filterEvens that uses the filter 
// method to filter an array and only return the even numbers. 
// The function should take in an array of numbers as an argument, 
// and should not use a loop.
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const filterEvens = arr => {
  return arr.filter(item => item % 2 === 0);
};

console.log(filterEvens([1,2,3,11,12,13]));
console.log(filterEvens([22,2,31,110,6,13]));

// 9. Search
console.log("===== 9. Search =====");
// Given an array, create a function which uses filter() 
// to filter an array based on a search query.

>>>>>>> c8bb93a0383b06420841f2f334543971382fef83
