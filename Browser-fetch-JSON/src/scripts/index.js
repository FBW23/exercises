// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { recipes } from './data.js';

// \/ All of your javascript should go here \/
// convert from JSON to JAVASCRIPT OBJECT: 
//const recipesOBJ = JSON.parse(recipesJSON);
const recipesOBJ = recipes;
//console.log(recipesJSON);
console.log(recipesOBJ);

const myPromise = new Promise(resolve, reject) 
