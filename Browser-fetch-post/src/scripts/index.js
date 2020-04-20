// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

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