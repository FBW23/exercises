// grabbing the elements needed


const button = document.querySelector('button');
const closeB = document.getElementsByClassName('hide');
const toDoList = document.querySelector('.todolist');
const crossTask = document.getElementsByClassName('cross');  
const inputValue = document.querySelector('#addList');

const addTask = () => {
  
    //create the li
    const newLi = document.createElement('li');
    //adding the value of the input inside the new li
    const liContent = document.createTextNode(inputValue.value);
   
    const liClose = document.createElement('a');
    liClose.href='';
    liClose.classList.add('hide');
    //liContent.classList.add('cross');
    const liCloseContent = document.createTextNode('x');

    toDoList.appendChild(newLi);
    newLi.appendChild(liContent);
    newLi.appendChild(liClose);
    liClose.appendChild(liCloseContent);

    for(let i=0; i<closeB.length; i++){
       
        function closeTask (){
            let parent= event.target.parentNode;
            parent.style.display = 'none';
        }
            closeB[i].addEventListener('click', closeTask)
        
    }

//     for(let j=0; j<liContent.length;j++){
//         function crossTask (){
//         let boxCross = event.target.parentNode;
//         boxCross.style.textDecoration = 'line-through'
//     }
//      liContent[j].addEventListener('click', crossTask)
// }
}



button.addEventListener('click', addTask);

//all of them are closing x
