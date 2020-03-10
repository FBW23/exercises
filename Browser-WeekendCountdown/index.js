let button = document.getElementById('go');
let firstName = document.getElementById('firstName')

button.addEventListener('click', pressButton);
button.addEventListener('mouseout', sair);

function pressButton() {
    firstName.innerText = "Hello.";
}

function sair(){
    firstName.innerText = "Hello."
}