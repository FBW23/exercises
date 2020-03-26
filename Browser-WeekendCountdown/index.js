let button = document.getElementById('go');
button.addEventListener('click', pressButton);


function pressButton(event) {

    let firstName = document.getElementById('firstName')
    let input = document.querySelector('input');

    event.preventDefault();
    let today = new Date().getDay();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let leftDays = 5 - today;

    if (input.value) {
        firstName.innerText = `Hello ${input.value}. Today is ${days[today-1]}. 
        There are ${leftDays} days until the weekend.`
    }
}