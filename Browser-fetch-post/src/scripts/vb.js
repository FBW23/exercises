// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

// # Submit me 

// **Instructions**: 

// * Look at the form on HTML. In the `index.js` file, create a post request on submit. 

// **Requirements**: 
// * Use fetch to post data. 
// * Use `async await` syntax.
// * When resolving your promise, print the raw JSON to the console. 
// * Alert the user once they have submitted the form.

// * You can use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to make a POST request. 

// ![alt text](image/reference.png "On Submission")


const form = document.querySelector("form");
const user = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message=document.querySelector("#message");
const checkbox=document.querySelector("#checkbox")


const formSubmit = async (event) => {
    event.preventDefault();

    const myOptions = {
        method: 'POST'
    };

let myBody={};

const formCheck= async ()=>{


    myBody={
        username: user.value,
        email: email.value,
        password: password.value,
        message:message.value,
        checkbox:checkbox.checked
    }


//     await user.value

//     const myBodyUser = {
//         username: user.value,

//     };


//     await email.value

//     const myBodyEmail = {

//         email: email.value,

//     };
//     await password.value

//     const myBodyPassword = {

//         password: password.value
//     };

//     await message.value


// const myBodyMessage={ message:message.value};


// await checkbox.checked=;
// console.log(checkbox.checked)

// const myBodyCheckbox={checkbox:checkbox.checked};





//      myBody = `{
//         ${myBodyUser},
//         ${myBodyEmail},
//         ${myBodyPassword},  
//         ${myBodyMessage},
//         ${myBodyCheckbox}
//     }`;


}

await formCheck()

const fetchFunction=async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(myBody)
        })
        .then(response => response.json()) // parse JSON
        .then(json => console.log(json)); // console.log it!
};
   

await fetchFunction();

alert("You have submitted your request!")



};




form.addEventListener("submit", formSubmit);