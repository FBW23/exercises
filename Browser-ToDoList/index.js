
const textField = document.querySelector('#addItemName');
const button = document.querySelector("#button");
const form = document.querySelector("#form");
const listContainer = document.querySelector("#listContainer");
const p = document.querySelector("p");



const myFunction = () => {
    event.preventDefault();
    const text = textField.value;
    for(let i=0;i<listContainer.length;i++){ 
       const listItem=document.createElement("div");
       const listItemText= listItem.innerText;
       listItemText[i]=text;
    }
    // listContainer.innerText = text;
};

form.addEventListener("submit", myFunction);

// 2. Add a _Delete_ button in the form of **X**, to enable the user delete a To-Do from the list.

// 3. **Optional:** Style to your pleasing.

// ## Bonus
// - Add a button to show that the item is complete. 
// - You can add styling to cross-out an item.

// > Hint: Refer to the representation below, for an idea of what your result should look like.