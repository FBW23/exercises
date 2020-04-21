// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

const form = document.querySelector('.container');
const name = document.querySelector('input[type=text]');
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const checkbox = document.querySelector('input[type=checkbox]');
const message = document.querySelector('#message');




const handleSubmit = (event) => {
    event.preventDefault();


    const myBody = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked
    };

    const url = "https://jsonplaceholder.typicode.com/posts"


    async function postRequest() {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(myBody)
        })
        const data = await response.json();
        return data;
    }

    postRequest()
        .then(response => console.log(response))
        .then(alert('Your form was submitted'));

}
form.addEventListener('submit', handleSubmit);