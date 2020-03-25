const form = document.querySelector("#form");




const myFunction = () => {
    event.preventDefault();
    const textField = document.querySelector('#addItemName');

    if (textField.value) {
        const text = textField.value;

        const listItem = document.createElement("div");
        listItem.classList.add("listItem");
        const task = document.createElement("p");
        const closeButton = document.createElement("p");
        const done = document.createElement("p");


        task.classList.add("task");
        done.classList.add("crossing");



        closeButton.classList.add("closing");



        const close = (event) => {
            const parent = event.target.parentNode;
            parent.remove();
        }

        closeButton.addEventListener("click", close);



        const crossIt = (event) => {
            const box = event.target.parentNode;
            box.classList.add("done");
        }

        done.addEventListener("click", crossIt);

        done.innerText = "done";
        task.innerText = text;
        closeButton.innerText = "X";


        listItem.append(task);
        listItem.append(done);
        listItem.append(closeButton);
        listContainer.append(listItem);
    }
};



form.addEventListener("submit", myFunction);