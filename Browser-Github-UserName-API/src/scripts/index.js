'use strict'
// // https://api.github.com/users/${username}/repos

// const form1 = document.querySelector('.form1');
// const githubUserName1 = document.querySelector('#githubUsername1');
// const unorderedList1 = document.querySelector('.list-group');

// const submitHandler = () => {
//   event.preventDefault();

//   const username = githubUserName1.value;

//   async function getGithubRepositories() {
//     const response = await fetch(`https://api.github.com/users/${username}/repos`)
//     const data = await response.json();
//     return data
//   }
//   getGithubRepositories()
//     .then(data => {
//       function parseDate(gdate) {
//         let systemDate = new Date(Date.parse(gdate));
//         let userDate = new Date();
//         let diff = Math.floor((userDate - systemDate) / 1000);
//         if (diff <= 1) {return 'just now';}
//         if (diff < 20) {return diff + ' seconds ago';}
//         if (diff < 40) {return 'half a minute ago';}
//         if (diff < 60) {return 'less than a minute ago';}
//         if (diff <= 90) {return 'one minute ago';}
//         if (diff <= 3540) {return Math.round(diff / 60) + ' minutes ago';}
//         if (diff <= 5400) {return '1 hour ago';}
//         if (diff <= 86400) {return Math.round(diff / 3600) + ' hours ago';}
//         if (diff <= 129600) {return '1 day ago';}
//         if (diff < 604800) {return Math.round(diff / 86400) + ' days ago';}
//         if (diff <= 777600) {return '1 week ago';}
//         return 'on ' + systemDate;
//       }
//       data.forEach(element => {
//           unorderedList1.innerHTML += 
//       `
//       <li class="list-group-item">
//         <div>
//           <a style="text-decoration:none" href='${element.html_url}'>${element.name}</a>
//           <p>${element.description}</p>
//         </div> 
//         <p>${parseDate(element.created_at)}</p>
//       </li>
//       `
//         })
//       })
//       .catch(() => alert(`User name dose not exist.Try with different user name!`));
// }
// form1.addEventListener('submit', submitHandler);

class GithubRepos {
  constructor(containerId) {
    this.baseUrl = 'https://api.github.com/users/';
    this.endUrl = '/repos';
    this.containerId = containerId;
    this.elements = {};
    this.init();

  }

  init() {
    this.elements.container = document.querySelector(this.containerId);
    // Create the basic HTML for the widget
    this.elements.container.innerHTML = this.parseInitialTemplate();
    // this.container.innerHTML = this.parseTemplate();
    this.elements.form = this.elements.container.querySelector('form');
    this.elements.input = this.elements.container.querySelector('input');
    this.elements.list = this.elements.container.querySelector('ul');
    this.registerEvents();
  }

  registerEvents() {
    this.elements.form.addEventListener('submit', function (event) {

      event.preventDefault();
      
      // console.log(this.input);

      const username = this.elements[0].value;
      const userRepos = (async (username)  => {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        return data;
      })(); 
      debugger
      this.nextElementSibling.innerHTML = userRepos;

    })
  }



  parseInitialTemplate() {
    return `
    <form class="form"> 
      <div class="form-group">
        <label for="githubUsername">Github Username Widget</label>
        <div class="flex-form">
          <input type="text" class="form-control" name="githubUsername" placeholder="GitHub username" required>
          <button type="submit" class="btn btn btn-info">Submit</button>
        </div>
      </div>
    </form>
    
    <ul class="list-group">
    </ul>
    `;
  }

  parseListTemplate(userRepos) {
    console.log(userRepos);
    // return document.querySelector(this.container);
  }
}

const myFirstRepo = new GithubRepos('#container1');