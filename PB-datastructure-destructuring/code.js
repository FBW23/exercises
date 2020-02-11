// Destructuring
// Instructions

// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.
console.log('======Task 1  =======')
const bubba = [
    "Banana",
    "Cucumber",
    ['bread', 'cakes', 'pizza']
]

const [fruit, vegetable, food] = bubba;
console.log(fruit);
console.log(vegetable);
console.log(food);



// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.
console.log('======Task 2  =======')
const pubba = {
    Fran: 'Witch',
    Jonas: 'Vampire',
    Kim: 'Cat'
};


const {
    Fran,
    Jonas,
    Kim
} = pubba;
console.log(Fran);
console.log(Jonas);
console.log(Kim);
console.log(pubba);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greate

const heavy = {
    name: 'Metallica',
    greatestHit: 'Enter Sandman ',
    nationality: 'American',
    genre: 'Heavy Metal'


};
const getInfo = ({
    name,
    greatestHit,
    nationality,
    genre
}) => ` ${name} is an  ${nationality} their greatest hit  ${greatestHit}, they play ${genre} `;
console.log(getInfo(heavy));