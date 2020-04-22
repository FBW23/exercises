// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
import Client from './apiCall.js';
import View from './view.js';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
const form = document.querySelector('input');



 function submitForm() {
  console.log(form.value);
  localStorage.setItem(form.value, form.value);
  const clientInput =  new Client();
  const movieData =  clientInput.getMovieData(form.value);
  const createView =  new View();
  console.log(createView)
  const renderMovieBoilerPlate =  createView.moviesSection.insertAdjacentHTML(movies)

  console.log(createView)
}








let save = document.querySelector(".btn-save").addEventListener('click', submitForm)