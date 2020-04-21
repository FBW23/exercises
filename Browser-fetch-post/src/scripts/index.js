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
    .then(alert(data));
}

form.addEventListener('submit', handleSubmit);


// const form = document.querySelector("form");
// const user = document.querySelector("#name");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const message=document.querySelector("#message");
// const checkbox=document.querySelector("#checkbox")


// const formSubmit = async (event) => {
// event.preventDefault();

// const myOptions = {
// method: 'POST'
// };

// let myBody={};

// const formCheck= async ()=>{


// myBody={
// username: user.value,
// email: email.value,
// password: password.value,
// message:message.value,
// checkbox:checkbox.checked
// }
// }

// await formCheck()

// const fetchFunction=async()=>{
// const url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url, {
// method: 'POST',
// body: JSON.stringify(myBody)
// })
// .then(response => response.json()) // parse JSON
// .then(json => console.log(json)); // console.log it!
// };


// await fetchFunction();

// alert("You have submitted your request!")



// };




// form.addEventListener("submit", formSubmit); 