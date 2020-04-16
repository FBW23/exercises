const input = document.querySelector(".input-field");
const button = document.querySelector(".button");
const form = document.querySelector('.wiget-form');
let targetContainer = document.querySelector(".target-container");


let currentName;
let currentDescription;
let currentReleaseDate;




async function fetching () {
    event.preventDefault();
   
  
 await this;
    fetch(`https://api.github.com/users/${input.value}/repos`)
        .then(result => result.json())

        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let currentRepo = data[i];

                currentName = currentRepo.name;
                currentDescription = currentRepo.description;
                currentReleaseDate = currentRepo.created_at;

                
                

                let template = `
                     <div id="repoContainer">
                    <span>
                     <p id="repoName">${currentName}</p>
                     <p id="repoDescription">description:${currentDescription}</p>
                     </span>
                     <p id="releaseDate">${currentReleaseDate}</p>
                     </div>
                             `;
                targetContainer.innerHTML += template;
            }

        })

        await this.fetch
        targetContainer.innerHTML = `<h2>Repositories of ${input.value}</h2>`

}


form.addEventListener("submit", fetching);

