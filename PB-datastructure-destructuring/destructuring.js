console.log(`:::::::::::::::::::::::::::::::Task 1:::::::::::::::::::::::::::::::;`)
let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit);
console.log(vegetable);
console.log(...food);

console.log(`:::::::::::::::::::::::::::::::Task 2:::::::::::::::::::::::::::::::;`)
let adam, frau;
({
    adam,
    frau,

} = {
    adam: 'wolf',
    frau: 'witch',

});
console.log(adam);
console.log(frau);


console.log(`:::::::::::::::::::::::::::::::Task 3:::::::::::::::::::::::::::::::;`)

const object = {
    name: "The Beatles",
    nationality: "UK",
    genre: 'Rock, Pop',
    greatesthit: 'Hey Jude'
};
const musician = ({
    name,
    nationality,
    genre,
    greatesthit
}) => {
    return name + ' from ' + nationality + ' were famous in ' + genre + ' and greatest album ' + greatesthit
};
console.log(musician(object));