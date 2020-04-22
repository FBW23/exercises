// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

// \/ All of your javascript should go here \/

<<<<<<< HEAD
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
=======
// grab the elements
const form = document.querySelector('form');
const user = document.querySelector("#name");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const message = document.querySelector("#message");
const checkbox = document.querySelector("[type=checkbox]");

const handleSubmit = async (event) => {
  event.preventDefault();
  
  const myUrl = "https://jsonplaceholder.typicode.com/posts";

  const myBody= {
    username: user.value,
    email: email.value,
    password: password.value,
    message: message.value, 
    checkbox: checkbox.checked // boolean, value always "on"
  };

  const myOptions = {
    method: 'POST',
    body: JSON.stringify(myBody)
  };

  const resp = await fetch(myUrl, myOptions)
  const data = await resp.json();
  //.then(response => response.json())
  //.then(parsedData => {
    console.log(data);
  //  return parsedData;
  //})
  //.then(parsedData => 
    alert(JSON.stringify(data))
    //);
}
form.addEventListener("submit", handleSubmit); 
>>>>>>> 4a62c1db89a715a3a6a358e13130a0339963c28f
