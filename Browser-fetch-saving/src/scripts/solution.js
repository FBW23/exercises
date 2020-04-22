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