console.log(`:::::::::::::::::::::: Task 1:::::::::::::::::::::::::::::::::`)
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const scriptArray = arrayOfNumbers.map(element => element + 1);
console.log(scriptArray);
console.log(`:::::::::::::::::::::: Task 2:::::::::::::::::::::::::::::::::`)
//Write a function called sum that uses the reduce to sum up an array of numbers. Do NOT use a typical loop; just use the reduce method.

//const getSum = arr => (arr.length === 1) ? arr[0] : arr.pop() + getSum(arr);

const arrSum = arr => arr.reduce((a, b) => a + b, 0)
console.log(arrSum([1, 2, 3, 4, 5])); //15
console.log(arrSum([6, 7, 7])); //20
//The function that we pass as the first parameter of the reduce method receives two parameters, a and b. In this code, a is our accumulator. It will accumulate our sum as our function works. b is the current value being processed.
//The second parameter of the reduce method is the initial value we wish to use. We’ve set our initial value to zero which allows us to use empty arrays with our arrSum functions.
//In other words, we are simply going to start with zero and one by one add each value of the array to our initial value until we’ve looped through the entire array. When done, the accumulator value will be returned
console.log(`:::::::::::::::::::::: Task 3:::::::::::::::::::::::::::::::::`)
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  console.log(transportation);

console.log(`:::::::::::::::::::::: Task 4:::::::::::::::::::::::::::::::::`)
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  //a Map
  const fullNames = inventors.map(inventors =>
    (inventors.first + ' ' + inventors.last)
);

console.log(fullNames);
// b Reduce
const totalYears = inventors.reduce((total, person)=>{
    return total + (person.passed - person.year)    
 }, 0);
 console.log(totalYears);

console.log(`:::::::::::::::::::::: Task 5:::::::::::::::::::::::::::::::::`)
console.log(`:::::::::::::::::::::: Task 6:::::::::::::::::::::::::::::::::`)
console.log(`:::::::::::::::::::::: Task 7:::::::::::::::::::::::::::::::::`)
console.log(`:::::::::::::::::::::: Task 8:::::::::::::::::::::::::::::::::`)
console.log(`:::::::::::::::::::::: Task 9:::::::::::::::::::::::::::::::::`)
console.log(`::::::::::::::::::::: Task 10:::::::::::::::::::::::::::::::::`)