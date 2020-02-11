// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 

const euroCountries = [ 'Germany', 'Italy', 'France'];
console.log(euroCountries);
const asianCountries = [ 'Japan', 'Indonesia', 'Malaysia'];
console.log(asianCountries);

console.log(euroCountries.push(...asianCountries)); // its to push the asian into europe
// console.log(euroCountries);



// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 