console.log(`============1================`);
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const javascriptArray = arrayOfNumbers.map(value => value + 1);
console.log(javascriptArray);
console.log(`============2================`);

const sum = (total, currentValue) => total + currentValue;
console.log(arrayOfNumbers.reduce(sum));
console.log(`============3================`);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
let count = {}; //pentru a salva tot in variabila
data.forEach(function (i) { // cream functia ca sa calculam
    count[i] = (count[i] || 0) + 1;
});
console.log(count);

console.log(`============4================`);



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
console.log(`============4a================`);
let fullName = inventors.map(inventors => `${inventors.first} ${inventors.last}`);
console.log(fullName);
console.log(`============4b================`);

const yearSum = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(yearSum);

console.log(`============5================`);

let root = [1, 4, 36, 25];
const squareRoot = root.map(value => Math.sqrt(value));
console.log(squareRoot);





//git test
