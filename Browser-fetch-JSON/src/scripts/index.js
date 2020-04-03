// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import {
    recipesOBJ
} from './data.js';
// // \/ All of your javascript should go here \/



const recipes = JSON.parse(recipesOBJ);
// const cakes = document.querySelector("#cakes");
const sections = document.querySelectorAll(".container section");




const categoryNames = Object.keys(recipes);
const categoryValues = Object.values(recipes);
let currentCategoryName = ``;
let currentCategoryValue = ``;
let currentItem = ``;
let currentName = ``;
let currentAuthor = ``;
let currentImg = ``;
let currentIngredients = ``;
let template = ``;
let currentType=``;

for (let i = 0; i < categoryNames.length; i++) {
    let currentCategoryName = categoryNames[i];
    let currentCategoryValue = categoryValues[i];

    for (let j = 0; j < currentCategoryValue.length; j++) {
        currentItem = currentCategoryValue[j];

        currentName = currentItem.title;
        currentAuthor = currentItem.author;
        currentImg = currentItem.image;
        currentIngredients = currentItem.ingredients;
        currentType=currentItem.type;

        template =
        `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${currentImg}" alt="Card image cap">
                    <div class="card-body">
                <h5 class="card-title">${currentName}</h5>
                <p class="card-text">${currentType}</p>
                <p class="card-text">${currentAuthor}</p>
                <hr>
                <p class="card-text">Ingredients: ${currentIngredients}</p>
                </div>
                </div>
                `


    sections[i].innerHTML += template;

    }

}










// const creator = () => {
//     for (let i = 0; i < sections.length; i++) {

// for (let j = 0; j < recipes.cakes.length; j++) {
//             let cakeName = recipes.cakes[j].title;
//             let type =  recipes.cakes[j].type;
//             let author = recipes.cakes[j].author;
//             let ingredients = recipes.cakes[j].ingredients;
//             let image = recipes.cakes[j].image;

//           let template =
//                 `
//             <div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="${image}" alt="Card image cap">
//                 <div class="card-body">
//             <h5 class="card-title">${cakeName}</h5>
//             <p class="card-text">${type}</p>
//             <p class="card-text">${author}</p>
//             <hr>
//             <p class="card-text">Ingredients: ${ingredients}</p>
//             </div>
//             </div>
//             `

//             sections[i].innerHTML += template;

//         }
//     }
// }

// creator()