// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables 
// respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). 
// Use array destructuring assignment to complete this task.
console.log('----------------1. Array Destructuring');
let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit);
console.log(vegetable);
console.log(food);


// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.
// Assign each key pair value to corresponding variable. Print out the object values. 
console.log('----------------2.Object Destructuring');

const myHalloween = {
    Julien: 'Cereal killer',
    Nicolo: 'Walking dead moustache',
    Julia: 'Nun of your business'
};

({Julien, Nicolo, Julia} = myHalloween);
console.log(Julien);
console.log(Nicolo);
console.log(Julia);


// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and 
// their greatest hit is "Us"`.
console.log('----------------3. Parameters: Object Destructuring');

const myBand = {
    name: 'Mykki Blanco',
    greatestHit: 'haze, boogy, life',
    nationality: 'american',
    genre: 'Hip-Hop'
};

const display = ({name, greatestHit, nationality, genre}) => {
    return name + ' is an ' + nationality + ' singer/songwriter. The artist sings ' + genre + ' and his greatest hit is \"' + greatestHit + '\".';
};

console.log(display(myBand));