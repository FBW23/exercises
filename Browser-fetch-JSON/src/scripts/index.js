// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

// import recipes from 'recipesJSON'

import { recipesJSON } from './data.js';


const cakesHtml = document.querySelector('#cakes');
const biscuitsHtml = document.querySelector('#biscuits');
const breadHtml = document.querySelector('#bread');

const recipes = JSON.parse(recipesJSON);


 Object.values(recipes).forEach((element,index) => { element.forEach((element) => {
    
    const cakesBoilerplate = 
    `

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src='${element['image']}'>
      <div class="card-body">
        <h5>${element['title']}</h5>
        <p class="author">${element['author']}</p>
        <p>${element['ingredients']}</p>
      </div>
    </div>

    `;

    switch(element['type']) {
        case 'cakes':
            cakesHtml.innerHTML += cakesBoilerplate;
            break;
        case 'biscuits':
            biscuitsHtml.innerHTML += cakesBoilerplate;
            break;
        case 'bread':
            breadHtml.innerHTML += cakesBoilerplate;
            break;
        default: 
            console.log('end');
    }

})});


