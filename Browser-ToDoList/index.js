const textArea = document.querySelector('textarea');
const toDoContainer = document.getElementById('to-do-container');
const button = document.querySelector('button');
const textInput = textArea.value;

// saving the value
let arrayOfToDos = []; // Text of the to do
let arrayOfToDoCards = []; // to do card elemets

// create a function called inside the forEach to create the card

const createCards = () => {
  
}

button.addEventListener('click', function(){
  event.preventDefault();
  arrayOfToDos.push(textArea.value); // getting the value of the text area and push it into an array
  console.log(arrayOfToDos);
  arrayOfToDos.forEach((element, index) => { // looping trough the array of to do`s
  // create an toDo cards
    let toDoCard = ` 
   <div class="card" style="width: 18rem;">
   <a href="#"><i class="fas fa-times"></i></a>
   <div class="card-body">
     <h5 class="card-title">${arrayOfToDos[index]}</h5>
     <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
     <a href="#" class="btn btn-primary">Complete</a>
   </div>
   </div>
   `;
  
   arrayOfToDoCards.push(toDoCard); // push the cards to the toDoCard array
 
   arrayOfToDoCards.forEach(element => {
    toDoContainer.appendChild(element); // trying to put each element from the arrayOfToDoCard's inside the to-do-container
 
   })
   
  })
  console.log(arrayOfToDoCards)
})

