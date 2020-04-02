// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import {
    exportJSON
} from '../scripts/data.js';


// \/ All of your javascript should go here \/

document.addEventListener("DOMContentLoaded", function () {

    const myJSON = JSON.parse(exportJSON);

    const cakeSection = document.getElementById('cakes');

    for (let i = 0; i < myJSON.cakes.length; i++) {
        let cakeName = myJSON.cakes[i].title;
        // let type = myJSON.cakes[i].type;
        let author = myJSON.cakes[i].author;
        let ingredients = myJSON.cakes[i].ingredients;
        let image = myJSON.cakes[i].image;
        cakeSection.innerHTML =
        `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${cakeName}</h5>
        <p class="card-text">${author}</p>
        <hr>
        <p class="card-text">Ingredients: ${ingredients}</p>
        </div>
        </div>
        `
    }
});