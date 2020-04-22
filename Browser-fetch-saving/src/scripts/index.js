import '../styles/main.scss';
import 'babel-polyfill';
<<<<<<< HEAD
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
=======
>>>>>>> bc113b5484ecc7f51da1bc1d22f504f7c9ba48f7

import { Client } from "../scripts/apiCall.js"
import { View } from "../scripts/view.js"

<<<<<<< HEAD
=======
class Movies {
    constructor() {
        this.client = new Client();
        this.view = new View();
        this.inputMovie = document.querySelector("input");
        this.movies = [];
        this.savedMovies;
        this.storedMovies;
    }

    getMovie(movie) {
        this.client.getMovieData(movie).then(data=>{
               this.view.displayMovieOnPage(data); 
        })
            
    }

    searchMovie () {
        this.inputMovie.addEventListener("keydown",  (e) => {
            let match = 0; // no match
            if(this.movies){
                this.movies.map(movie => {
                    if (this.inputMovie.value === movie) {
                        match++; // same movie as already present
                    }
                })  
            }
           

            if ((e.keyCode === 13) && (this.inputMovie.value.length > 0) && (match === 0)) {
                this.movies.push(this.inputMovie.value); 
                this.savedMovies = localStorage.setItem("savedMovies", JSON.stringify(this.movies));
                this.inputMovie.value = "";
                this.getStorage()
              
            } else if ((e.keyCode === 13) && match > 0) {
                alert("You've already stored that movie!");
                this.inputMovie.value = "";
            }
        })
    }

    saveMovies() {
        document.querySelector(".container").addEventListener("click", (e) => {
            switch (e.target.className) {
                case "btn-save":
                    if (!this.movies.includes(this.inputMovie.value)) {
                        this.movies.push(this.inputMovie.value)
                        this.inputMovie.value = ""
                       
                        this.savedMovies =window.localStorage.setItem("savedMovies", JSON.stringify(this.movies));
                        this.getStorage()
                    }
                    break;
                case "btn-reset":
                    window.localStorage.removeItem('savedMovies');
                    this.view.removeDisplay();
                    this.movies = [];
                    break;
            }
        })
    }

    getStorage() {
        this.storedMovies = JSON.parse(window.localStorage.getItem("savedMovies"));
        if (this.storedMovies !== null) {
            this.movies=this.storedMovies
            this.view.removeDisplay();
            this.storedMovies.map(movie => {
                this.getMovie(movie);
            })
        }

    }

    init() {
        this.searchMovie();
        this.saveMovies();
        this.getStorage();
    }

}
document.addEventListener("DOMContentLoaded", () => {
    let movies = new Movies();
    movies.init();
});
>>>>>>> bc113b5484ecc7f51da1bc1d22f504f7c9ba48f7
