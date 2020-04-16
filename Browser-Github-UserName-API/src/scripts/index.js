'use strict'
// https://api.github.com/users/${username}/repos

const form1 = document.querySelector('.form1');
const githubUserName1 = document.querySelector('#githubUsername1');
const unorderedList1 = document.querySelector('.list-group');

const submitHandler = () => {
  event.preventDefault();

  const username = githubUserName1.value;

  async function getGithubRepositories() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await response.json();
    return data
  }
  getGithubRepositories()
    .then(data => {
      data.forEach(element => {
          unorderedList1.innerHTML += 
      `
      <li class="list-group-item">
        <div>
          <a style="text-decoration:none" href='${element.html_url}'>${element.name}</a>
          <p>${element.description}</p>
        </div> 
        <p>${element.created_at}</p>
      </li>
      `
        })
      })
    .catch(error => console.error(error));
}
form1.addEventListener('submit', submitHandler);