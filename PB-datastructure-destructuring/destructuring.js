//1. Array Destructuring
//Declare the variables fruit, vegetable, food. 
//Assign the following values to the variables respectively: 
//"banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). 
//Use array destructuring assignment to complete this task.


// const {"banana"} = fruit; 
// const {"cucumber"} = vegetable;
// const {bread, cakes, pizza} = food; 

// console.log("banana")

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective 
//halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. 
//Print out the object values.



//3. Parameters: Object Destructuring
//Create an object with band / musician details e.g.name of the band / musician, greatest hit, nationality, genre etc.
//Then, create a function to display all of the band / musician 's data.

const britney = {
    artist: "Britney Spears",
    age: 38,
    genre: "pop",
    country: "USA"
};
const popSinger = ({
    artist,
    age,
    genre,
    country
}) => {

    return `${artist} is a ${age} ${genre} from ${country}.`;
};

console.log(popSinger(britney));

// Example
//     `Regina Spektor is a American-Russian singer/songwriter and pianist. 
//     The musician sings indie-pop and their greatest hit is "Us"`.