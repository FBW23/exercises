// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
// Import any additional modules you want to include below \/
import { Client } from './apiCall.js';
import { View } from './view.js';
// \/ All of your javascript should go here \/
const client = new Client();
const view = new View();

const inputData = document.querySelector('input');
const buttonSave = document.querySelector('.btn-save');
const buttonReset = document.querySelector('.btn-reset');
let arrayOfStorage = [];

async function save() {
    console.log(inputData.value);
    arrayOfStorage = JSON.parse(localStorage.getItem('movies'));
    if (arrayOfStorage && arrayOfStorage.includes(inputData.value)) {

        alert("You already have it");

    } else {

        const savedData = await client.getMovieData(inputData.value);
        view.displayMovieOnPage(savedData);
        if (arrayOfStorage === null) {
            arrayOfStorage = [];
        }
        arrayOfStorage.push(inputData.value);
        localStorage.setItem('movies', JSON.stringify(arrayOfStorage));


    }
}


function reset() {
    view.removeDisplay();
    localStorage.clear();
}

async function savedData() {
    arrayOfStorage = JSON.parse(localStorage.getItem('movies'));
    if (arrayOfStorage) {
        for (let i = 0; i < arrayOfStorage.length; i++) {
            const savedData = await client.getMovieData(arrayOfStorage[i]);
            view.displayMovieOnPage(savedData);
        }
    }


}

buttonReset.addEventListener("click", reset);
buttonSave.addEventListener("click", save);
document.addEventListener('DOMContentLoaded', savedData);


