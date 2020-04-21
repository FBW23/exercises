// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
// Import any additional modules you want to include below \/

import Client from '../scripts/apiCall.js';
import View from '../scripts/view.js';







// \/ All of your javascript should go here \/

let inputData=document.querySelector('input');

function mySave() {
    console.log(inputData.value)
    localStorage.setItem(inputData.value, inputData.value);
    const clientData= new Client();
    const savedData=clientData.getMovieData(inputData.value);
    const movie= new View();
    const show=moviesSection.insertAdjacentHTML(movies)


}

function myReset() {
    localStorage.clear();
}
let resetto = document.querySelector(".btn-reset").addEventListener("click", myReset);
let savvo = document.querySelector(".btn-save").addEventListener("click", mySave);

