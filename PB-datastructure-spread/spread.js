// # Spread the Word

console.log();
console.log('#### 1. Combining Arrays');
console.log();
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

let euroCountries = ["germany", "holland", "spain"];
let asianCountries = ["myanmar", "laos", "cambodia"];
euroCountries.push(...asianCountries);
console.log(euroCountries);
let euroPopStars = ["adele", "geri halliwell", "bonny tyler"];
let usaPopStars = ["pink", "kylie minogue", "madonna"];
let worldPopStars = euroPopStars.concat(...usaPopStars); // push does not work in this context of creating a variable.
console.log(worldPopStars);

console.log();
console.log('#### 2. Copying Arrays');
console.log();
// * Copy an array using the spread operator. Store the copied array in another variable. 

