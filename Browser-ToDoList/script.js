const addTodo = document.querySelector("#btn");
const inputTodo = document.querySelector("#todoInput");
const todos = document.querySelector("#todoList");

addTodo.addEventListener("click", () => {
    event.preventDefault();
    //create todoItem
    const todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    todoItem.addEventListener("click", () => {
        if(todoText.classList.contains("doneItem")) {
            todoText.classList.remove("doneItem");
        } else {
            todoText.classList.add("doneItem");
        } 
    });

    const todoText = document.createElement("span");
    todoText.innerText = inputTodo.value;

    const delTodo = document.createElement("span");
    delTodo.classList.add("delTodo");
    delTodo.innerText = "x";
    delTodo.addEventListener("click", () => {
        todos.removeChild(todoItem);
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(delTodo);
    todos.appendChild(todoItem);

    inputTodo.value = "";
});