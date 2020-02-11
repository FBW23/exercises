// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values. 

// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
//
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.


console.log(`==================1=================`);

let fruit, vegetable, food;
[fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];
console.log(fruit);
console.log(vegetable);
console.log(food);
console.log(`====================================`);


console.log(`==================2=================`);

const object = { fran: "witch", joao: "darthvader", balazs: "batman" };
let fran, joao, balazs;
({ fran, joao, balazs } = object);

console.log(fran);
console.log(joao);
console.log(balazs);


console.log(`====================================`);


console.log(`==================3=================`);
const bandObject = {
    bandname: "Giddy Giraffe",
    greatesthit: "patchy necks",
    nationality: "Martian",
    genre: "polish rap"
}

const bandDetails = ({ bandname, greatesthit, nationality, genre }) => {
    return `${bandname} is a ${nationality} band playing ${genre}, and their greatest hit is ${greatesthit}`
}
console.log(bandDetails(bandObject));
console.log(`====================================`);