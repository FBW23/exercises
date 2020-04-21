// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

// \/ All of your javascript should go here \/

<<<<<<< HEAD
const form = document.querySelector('form');
const userName = document.querySelector('#name');
const password = document.querySelector('#password');
const myEmail = document.querySelector('#email')
const message = document.querySelector('#message');
const checkbox = document.querySelector('#checkbox');

 const handleSubmit = async (event) => {
    event.preventDefault();
    
    let url = `https://jsonplaceholder.typicode.com/posts`;
    
    const myBody = {
        username: userName.value,
        password: password.value,
        email: myEmail.value,
        message: message.value,
        checkbox: checkbox.checked
    };
    
    
     await fetch(url, {
            method: 'POST',
            body: JSON.stringify(myBody)
        })
        .then(response => response.json()) // parse JSON
        .then(json => console.log(json));
    alert("thank you for submitting your details"); // console.log it!

    //  


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
