// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import '../scripts/data.js';

// \/ All of your javascript should go here \/
const myNewObject = JSON.parse(MyJSON);
console.log(myNewObject);

for (let i = 0; i < myNewObject.length; i++) {
   
   const cakes = document.querySelector('#cakes');
   cakes.innerHTML += `  <li class="card" style="width: 18rem;">
   <img class="card-img-top" src=${myNewObject[i].cakes[0].image} alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${myNewObject[i].cakes[0].title}</h5>
     <p class="card-text">bla</p>
     <a href="#" class="btn btn-primary">Read</a>
   </div>
   </li>`
}