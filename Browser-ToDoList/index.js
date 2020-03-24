// grabbing the elements needed


const button = document.querySelector('button');
//const closeB = document.getElementsByClassName('done');
const toDoList = document.querySelector('.todolist');
//const crossTask = document.getElementsByClassName('cross');
const inputValue = document.querySelector('#addList');

const addTask = () => {
  debugger

  //create the li
  const newLi = document.createElement('li');
  //adding the value of the input inside the new li
  const liContent = document.createTextNode(inputValue.value);

  const liClose = document.createElement('a');
  liClose.href = '';

  const liCloseContent = document.createTextNode('x');


  function deleteListItem() {
    debugger
    event.preventDefault();
    event.target.remove();
  }

  liCloseContent.addEventListener('click', deleteListItem, true);
  
  toDoList.appendChild(newLi);
  newLi.appendChild(liContent);
  newLi.appendChild(liClose);
  liClose.appendChild(liCloseContent);

  // function crossOut() {
  //   debugger
  //   newLi.classList.toggle("done");
  // }

  
  //newLi.addEventListener("click", crossOut);


}



button.addEventListener('click', addTask);

//all of them are closing x
