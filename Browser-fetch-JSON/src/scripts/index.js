// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import {exportJSON} from '../scripts/data.js';

// \/ All of your javascript should go here \/
console.log('is it me you\'re looking for?');

const cakes = document.querySelector('#cakes');
const biscuits = document.querySelector('#biscuits');
const bread = document.querySelector('#bread');

const myNewObject = JSON.parse(exportJSON);

for (const cake in myNewObject.cakes) {
    let list = document.createElement('li');
    cakes.appendChild(list);

    let image = document.createElement('IMG');
    list.appendChild(image);
    image.classList.add('card');
    image.src = cake.image;
    image.classList.add('card-img-top', 'book-cover');

    let h5 = document.createElement('h5');
    image.appendChild(h5);
    h5.classList.add('card-title');
    h5.innerText = ;
}