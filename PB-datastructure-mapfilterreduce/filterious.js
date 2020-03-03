// 4. Inventors
// Look at the piece of code below and complete the tasks and questions.

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
// Map
// Give an array of inventors' first and last names.
const names=inventors.map(object=>object.first+' '+object.last);
console.log(names);
// Reduce
// How many years did all of the inventors live?

const totalYears = inventors
  .filter(inventor => inventor.year+inventor.passed)
  .map(inventor => inventor.passed - inventor.year)
  .reduce((acc, previous) => acc + previous, 0);
  const totaliYears = inventors.reduce((acc, inventor) => inventor ? acc + inventor.passed - inventor.year : acc, 0);
  console.log('The total  number of  years  the  inventors  lived are ' + totaliYears)
  // 5. Square Root
// Given an array of numbers, find the square root of those numbers using map.

// 6. Instances of Letters
// Create a function that takes a string as an argument and counts the number of each letter in that string.

// 7. List of Movies
// Given the code below, complete the task

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
}]

 
// Create a function that returns an array of your friends favourite films!

// 8. Filter Evens
// Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]

// filterEvens([22,2,31,110,6,13]); //returns [22shapes.sort((a, b) => parseFloat(a.keys) + parseFloat(b.keys));ilter() to filter an array based on a search query.

// Example
// const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, 'ka')); // ["Rika", "Marika"];
// console.log(filterItems(friends, 'e')); // ["Alex", "Oliver"];
// 10. Reformat an Array
// Given the following array:

let originalArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
         {key: 8, name: "Ron"}
        ]
        Object.entries(originalArray).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            //use key and value here
          });

console.log(obj);
// Reformat the array as follow:
// let newArray = [{1: "John"}, {2: "Maria"}, {3: "Oliver"}, {4: "Jane"}, {5: "Jack"}, {6: "Albert"}, {7: "Harry"}, {8: "Ron"}, {9: "Kenneth"}, {10: "Kyle"}];

// #### 11. Sorting Numbers
// Given the following array of numbers, sort from smallest to largest. 
// ```javascript
console.log('bleh')
let arrayOfIntegers = [4,200,90,30,12,75,21,3];
console.log(arrayOfIntegers.sort((firstNumber, secondNumber) => firstNumber - secondNumber)); 

// Once you are finished, answer the following questions: Which method did you use to solve the problem? Why did you have to use this method?
// 12. Sort Shapes
// Given the following array of shapes, complete the task below:

let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
    ];
    
    shapes.sort((a, b) => b[1].localeCompare(a[1]));
    console.log(shapes)
// * Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from smaller number to greater number. 
// * Example of output:
// ``` javascript
// [ [ 3, 'Triangle' ],
//   [ 4, 'Rectangle' ],
//   [ 5, 'Pentagon' ],
//   [ 6, 'Hexagon' ],
//   [ 8, 'Octagon' ],
// //   [ 10, 'Decagon' ] ]



const numbers=[4,2,5,3,9,7,1,8,2,6]

numbers.sort();
console.log(numbers);


const namess=['Fran','Leon','Ale','Jenna','Bleda','Hadi']
namess.sort()

console.log(namess)

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
   console.log(bubbleSort([4, 3, 9, 1, 5, 5, 10, 2])); // [ 1, 2, 3, 4, 5, 5, 9, 10 ]
   console.log(bubbleSort(['toi', 'moi', 'maison', 'animal', 'zoo'])); // [ 'animal', 'maison', 'moi', 'toi', 'zoo' ]


   class Cat{  constructor(name,age,weight){
       this.name=name;
       this.age=age;
       this.weight=weight;
}
      eat () {
          console.log('Poop!')
      }
      sleep() { console.log('Snore')

      }//define our  class in details
   }
  
   const fatma=new Cat('Fatma',14,4);
   console.log(fatma);
   fatma.eat();
  fatma.sleep();


  class Rectangle {
      constructor(height,width){
          this.height=height;
          this.width=width;

      }
  }
  const newRectangle= new Rectangle(10,5);
  console.log(newRectangle);