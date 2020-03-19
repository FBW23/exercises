// loadEvents();
// // load every event in the page
// function loadEvents(){
//   document.querySelector('button').addEventListener('click', submit);
//   document.querySelector('checkbox').addEventListener('click', checked);
//   // document.getElementById('clear').addEventListener('click',clearList);
//   // // recently added
//   // document.querySelector('ul').addEventListener('click',deleteOrTick);

// }

const button = document.querySelector('button');
button.addEventListener('click', submit);

function submit(e) {
  e.preventDefault();
  let textArea = document.querySelector('textarea');
  if (textArea.value != '') {
    addTask(textArea.value);
  }
  textArea.value = '';
}

// add task function
function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete"><i class="fas fa-times"></i></span><input id='checkbox' type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.container-fluid').classList.remove('d-none');
  // checkbox.addEventListener('click', checked);
  let checkboxTick = document.querySelector('#checkbox');
  let label = document.querySelector('label');
  checkboxTick.addEventListener('change', function () {
    if (checkboxTick.checked === true) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  })
  let icon = document.querySelectorAll('.fas');
  icon.forEach(element => {
    element.addEventListener('click', function (e) {
      console.log(e.target.parentNode.parentNode.style.display = "none");
    })
  })
  // icon.addEventListener('click', function (e) {
  //   console.log(e.target.parentNode.parentNode.style.display = "none");
  // })
}


// checked
// how to add you on zoom :D 
// I send you a link
// maybe your on mute?


// function checked() {
//   const taskLabel = document.querySelector('label');
//   const checkbox = document.getElementById('checkbox');
//   if (checkbox.checked === true) {
//     taskLabel.style.textDecoration = "line-through";
//     taskLabel.style.color = "grey";
//   } else {
//     taskLabel.style.textDecoration = "none";
//   }
// }
// checked()

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