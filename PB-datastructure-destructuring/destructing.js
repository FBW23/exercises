// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.
let fruit, vegetable, food; //['banana','cucumber',],
//['cucumber'],
//['bread','cakes','pizaa'];
([fruit, vegetable, ...food] = ['banana', 'cucumber', 'bread', 'cakes', 'pizza']);
console.log(fruit);
console.log(vegetable);
console.log(food);
console.log(`_____________________________________________________________________`);
console.log(`* Create an object which contains key pair values of names and the respective halloween costume e.g. \`fran: "witch"\`.   Assign each key pair value to corresponding variable. Print out the object values. `);
console.log(`_____________________________________________________________________`);

let constantin, negs, bendis, someOneElse;
({
    constantin,
    negs,
    bendis,
    someOneElse
} = {
    constantin: 'jocker',
    negs: 'batman',
    bendis: 'spiderMan',
    someOneElse: 'misterX'
});
console.log(constantin);
console.log(negs);
console.log(bendis);
console.log(someOneElse);

console.log(`_____________________________________________________________________`);
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```
console.log(`_____________________________________________________________________`);

const band = {
        name: 'The prodigy',
        greatestHit: 'Smack my b*$ch up',
        country: 'Usa',
        genre: 'rave'

    };
    // ({
    //     name,
    //     greatestHit,
    //     country,
    //     genre
    // } = musician);
const bestMusic = ({name,greatestHit,country,genre}) => `This is  ${name} with the greatest Hit ${greatestHit} from ${country} playing good ${genre} music `;

console.log(bestMusic(band));