import '../styles/main.scss';
import 'babel-polyfill';

<<<<<<< HEAD
import Client from '../scripts/apiCall.js';
import View from '../scripts/view.js';

// \/ All of your javascript should go here \/

let inputData = document.querySelector('input');
let movies = [];
const movie = new View();
async function mySave() {
    event.preventDefault();
    console.log(inputData.value);
    movies = JSON.parse(localStorage.getItem('movies'));
    if (movies && movies.includes(inputData.value)) {
        alert("Not today Satan");

    } else {
        if (movies === null) {
            movies = [];
        } 
        movies.push(inputData.value);
        localStorage.setItem('movies', JSON.stringify(movies));
        const clientData = new Client();
        const savedData = await clientData.getMovieData(inputData.value);
        movie.displayMovieOnPage(savedData);

    }

}

function myReset() {
    movie.removeDisplay()
    localStorage.clear();
}
async function myPage() {

    movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
        for (let i = 0; i < movies.length; i++) {
            const clientData = new Client();
            const savedData = await clientData.getMovieData(movies[i]);
            movie.displayMovieOnPage(savedData);
        }

    }



}
let resetto = document.querySelector(".btn-reset").addEventListener("click", myReset);
let savvo = document.querySelector(".btn-save").addEventListener("click", mySave);
document.addEventListener('DOMContentLoaded', myPage);
=======
import { Client } from "../scripts/apiCall.js"
import { View } from "../scripts/view.js"

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
