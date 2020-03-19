const button = document.querySelector('button');

button.addEventListener('click', submit);


function submit(e) {
  e.preventDefault();
  let textArea = document.querySelector('textarea');
  if(textArea.value != '') {
    addTask(textArea.value);
  }
  textArea.value = '';
}

// add task function
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">x<input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.container-fluid').classList.remove('d-none');
  // remove a "li"
  li.addEventListener('click', removeElement);
  // check a task
  let inputCheck = document.querySelector('input');
  inputCheck.addEventListener('click', taskChecked);
}

// remove element
function removeElement (e) {
  event.preventDefault();
  let singleTask = e.target.parentNode.parentNode.parentNode;
  singleTask.remove();
}

// mark element as "complete"
function taskChecked (e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "none";
  }
}

// tick a task
// function tickTask(e){
//   const task = e.target.nextSibling;
//   if(e.target.checked){
//     task.style.textDecoration = "line-through";
//     task.style.color = "#ff0000";
//   }else {
//     task.style.textDecoration = "none";
//     task.style.color = "#2f4f4f";
//   }
// }





// const textArea = document.querySelector('textarea');
// const toDoContainer = document.getElementById('to-do-container');
// const button = document.querySelector('button');
// const textInput = textArea.value;

// // saving the value
// let arrayOfToDos = []; // Text of the to do
// let arrayOfToDoCards = []; // to do card elemets

// // create a function called inside the forEach to create the card

// const createCards = () => {

// }

// button.addEventListener('click', function(){
//   event.preventDefault();
//   arrayOfToDos.push(textArea.value); // getting the value of the text area and push it into an array
//   console.log(arrayOfToDos);
//   arrayOfToDos.forEach((element, index) => { // looping trough the array of to do`s
//   // create an toDo cards

//   //   let toDoCard = ` 
//   //  <div class="card" style="width: 18rem;">
//   //  <a href="#"><i class="fas fa-times"></i></a>
//   //  <div class="card-body">
//   //    <h5 class="card-title">${arrayOfToDos[index]}</h5>
//   //    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
//   //    <a href="#" class="btn btn-primary">Complete</a>
//   //  </div>
//   //  </div>
//   //  `;

//    arrayOfToDoCards.push(toDoCard); // push the cards to the toDoCard array

//    arrayOfToDoCards.forEach(element => {
//     toDoContainer.appendChild(element); // trying to put each element from the arrayOfToDoCard's inside the to-do-container

//    })

//   })
//   console.log(arrayOfToDoCards)
// })