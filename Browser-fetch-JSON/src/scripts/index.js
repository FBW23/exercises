// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

// import recipes from 'recipesJSON'
import { recipesJSON } from './data';

console.log(recipesJSON);

const cakesBoilerplate = 
`
<img src='${recipesJSON['cakes'][0].image}'>
<h5>${recipesJSON[0].title}</h5>
<p>${recipesJSON[0].author}</p>
<p>${recipesJSON[0].ingredients}</p>
`;

const cakes = document.querySelector('#cakes');
cakes.innerHTML += cakesBoilerplate;