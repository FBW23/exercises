


const inputRepo = document.querySelector('.form-control');
const form = document.querySelector('form');
const result = document.querySelector('.divResult');
async function fetchGithub() {
    const userName = inputRepo.value;
    let url = `https://api.github.com/users/${userName}/repos `;
    const response = await fetch(url);
    const data = await response.json() // parse json
    return data;
    
  }
  
function displayResults(e){
    e.preventDefault();
    fetchGithub().then(data=>{
        console.log(data);
        for (let i=0; i<data.length; i++){
            result.innerHTML += `<section class='repos'><a href='${data[i].html_url}'>${data[i].name}</a><p>${data[i].description}</p><span>${data[i].pushed_at}</span></section>`;
        }
       
    });
    
  
}
 
  form.addEventListener('submit', displayResults);


  const form = document.querySelector('form');
const userName = document.querySelector('input[type=text]');
const password = document.querySelector('input[type=password]');

const handleSubmit = (event) => {
    event.preventDefault();
    const myOptions = {
        method : 'GET' // 'GET'
    };

    const myBody = {
        username: userName.value,
        password: password.value // possibilities to secure the password /encrypt 
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