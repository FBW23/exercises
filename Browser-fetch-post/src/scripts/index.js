// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/
const form = document.querySelector('form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const checkBox = document.querySelector('#checkbox');

const handleSubmit = async (event) => {
    event.preventDefault();
    const myOptions = {
        method : 'GET' 
    };

    const myBody = {
        username: userName.value,
        password: password.value,
        email: email.value,
        message: message.value,
        checkBox: checkBox.checked
        
    };
    
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(myBody)
    })
    .then(response => response.json()) 
    .then(json => console.log(json)) 
    .then(alert('Thank you for submitting your details!'));
}

form.addEventListener('submit', handleSubmit);


