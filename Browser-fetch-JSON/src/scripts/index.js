// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import '../scripts/data.js';

// \/ All of your javascript should go here \/
const myNewObject = JSON.parse(MyJSON);

for (let i = 0; i < myNewObject; i++) {
   
    const card = document.createElement(`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${myNewObject[i][image]} " alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`)
    // append here 
    card.append
}