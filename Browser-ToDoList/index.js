// grabbing the elements needed


const button = document.querySelector('button');
const closeB = document.getElementsByClassName('done');
const toDoList = document.querySelector('.todolist');
const crossTask = document.getElementsByClassName('cross');
const inputValue = document.querySelector('#addList');

const addTask = () => {

    //create the li
    const newLi = document.createElement('li');
    //adding the value of the input inside the new li
    const liContent = document.createTextNode(inputValue.value);

    const liClose = document.createElement('a');
    liClose.href = '';


    const liCloseContent = document.createTextNode('x');

    toDoList.appendChild(newLi);
    newLi.appendChild(liContent);
    newLi.appendChild(liClose);
    liClose.appendChild(liCloseContent);
    // because it's in the function, it only adds it for new items
    function crossOut() {
        newLi.classList.toggle("done");
    }

    newLi.addEventListener("click", crossOut);
    //END STRIKETHROUGH
    function deleteListItem(){
		newLi.classList.add("delete")
    }
    closeB.addEventListener('click',deleteListItem)

}



button.addEventListener('click', addTask);

//all of them are closing x
