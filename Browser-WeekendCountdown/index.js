const submitButton = document.querySelector('#submit');
const text = document.querySelector('p');
let date = new Date();

function modifyText() { 
    let inputValue = document.querySelector('#yourname').value;
    text.innerText = `Hello ${inputValue}! Today is ${date}`;
}

function clearText() {
    text.innerText = `Please enter your name`;
}

const nameEnter = document.querySelector('#submit');
console.log(nameEnter);
submitButton.addEventListener("click", modifyText); 

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearText);