// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';
import Client from './apiCall';
import View from './view';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
console.log(View);
console.log(Client)
localStorage.clear();

let newClass = new Client();

newClass.getMovieData()
.then( response => console.log(Object.keys(response)))
