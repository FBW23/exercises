// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

// \/ All of your javascript should go here \/

const form = document.querySelector('form');
const nameInput = document.querySelector('input[type=text]');
const emailInput = document.querySelector('input[type=email]');
const passwordInput = document.querySelector('input[type=password]');
const messageInput = document.querySelector('input[name=message]');
const checkBoxValue = document.querySelector('input[type=checkbox]');


const handleSubmit = event => {
  event.preventDefault();
  const userInput = {
    username: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    message: messageInput.value,
    checkbox: checkBoxValue.checked
  }

  const url = 'https://jsonplaceholder.typicode.com/posts'

  async function postRequest() {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInput)
    })
    const data = await response.json();
    return data;
  }

  postRequest()
    .then(response => console.log(response))
    .then(alert('Your form was submitted'));
}





form.addEventListener('submit', handleSubmit);