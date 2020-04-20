// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

const form = document.querySelector('.container');
const name = document.querySelector('input[type=text]');
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const checkbox = document.querySelector('input[type=checkbox]');




const handleSubmit = (event) => {
    event.preventDefault();


    const myBody = {
        name: name.value,
        email: email.value,
        password: password.value,
        checkbox: checkbox.checked
    };

    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(myBody)
        })
        .then(response => response.json()) // parse JSON
        .then(json => console.log(json)); // console.log it!


}
form.addEventListener('submit', handleSubmit);


