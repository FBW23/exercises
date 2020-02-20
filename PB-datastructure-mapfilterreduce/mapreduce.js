
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


//##### Map
//* Give an array of inventors' first and last names. 
const functionFirst = (inventors) =>{
    return inventors.first;
}
const inventorsFirts = inventors.map(functionFirst);


console.log(inventorsFirts);

const inventorsLast = (inventors.map(inventors => inventors.last));
console.log(inventorsLast);
//##### Reduce
//* How many years did all of the inventors live? 

const howManyYears = inventors.reduce( (acc, prev) => {
    return acc + (prev.passed - prev.year);
  }, 0);

console.log(howManyYears);

//An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
function isSpecialArray (arr) {
    return arr.every((current, index) => current % 2 === index % 2)
}

function isSpecial (previous, number, index){
    let isIndexEven = index %2 ? true : false; //boolean 
    let isNumberEven = number % 2 ? true : false;
    return previous && (isIndexEven=== isNumberEven); 
};

console.log([2, 7, 4, 9, 6, 1, 6, 3].reduce(isSpecial))


//big O notation
function isFirstElementNull (arr){
    return arr [0] === null; //one statement it will run the same time no matter how long the array is
};

// Big O notation = O (N) <=== worst case cenarium, if the value is in the last array item or not there at all, it will run as long as the length of the array = N 

function containsValue (arr, value){
    for ( element in elements){
        if (element == value) {
            return true;
        } 
    }

    return false;
}

//Big O Notation = O(N2) // maximum run time would be the length of the array to the porwer of two

function ContainsDuplicates(arr) {
    for (let outer = 0; outer < arr.length; outer++)
    {
        for (let inner = 0; inner < arr.length; inner++)
        {
            // Don't compare with self
            if (outer == inner){
                continue;
            } 

            if (arr[outer] == arr[inner]) return true;
        }
    }

    return false;
};

function fibonacci (number) {
    if (number <= 1){
        return number;
    } return fibonacci (number - 2) + fibonacci (number - 1);
}; 
