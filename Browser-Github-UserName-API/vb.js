 let input = document.querySelector(".input-field");
 let button = document.querySelector(".button");
 let form = document.querySelector('form');
 let targetContainer = document.querySelector(".target-container");
let currentName;
let currentDescription;
let currentReleaseDate;




// class CryptonatorAPI {
//     constructor() {
//         this.apiUrl = "https://api.cryptonator.com/api/ticker";
//         this.conversionEndpoint = "/:conversion";
//         this.init();
//     }
//     init() {
//         this.entryField = document.querySelector(".entryField");
//         this.outputField = document.querySelector(".outputField");
//         this.form = document.querySelector("#conversion-form");
//         this.input = document.querySelector("#cryptoInput");
//         this.output = document.querySelector("#cryptoOutput");
//         this.registerEvents();
//     }
//     registerEvents() {
//         this.inputAmount = document.querySelector("#cryptoInput");
//         this.form.addEventListener("submit", e => {
//             e.preventDefault();
//             fetch(`${this.apiUrl}/${this.entryField.value}-${this.outputField.value}`)
//                 .then(data => data.json())
//                 .then(
//                     response =>
//                     (this.output.value = (
//                         response.ticker.price * this.input.value
//                     ).toFixed(2))
//                 );
//         });
//     }
// }
// const cryptoRate = new CryptonatorAPI();




// class Repo {
//     init() {
//         this.input = document.querySelector(".input-field");
//         this.button = document.querySelector(".button");
//         this.form = document.querySelector('form');
//         this.targetContainer = document.querySelector(".target-container");
//         this.currentName=currentName;
//         this.currentDescription=currentDescription;
//         this.currentReleaseDate=currentDate;
//         this.currentRepo=currentRepo;
//         this.template=template;
//         this.events();
//     }
//     constructor() {
//         this.url = `https://api.github.com/users/${input.value}/repos`;
//         this.init();
//     }
//     events() {
//         form.addEventListener("submit", async event => {
//             event.preventDefault();
//             fetch(`https://api.github.com/users/${input.value}/repos`)
//                 .then(result => result.json())
//                 .then(data => {

//                     for (let i = 0; i < data.length; i++) {
//                        this.currentRepo = data[i];

//                         this.currentName = tihs.currentRepo.name;
//                         this.currentDescription = this.currentRepo.description;
//                         this.currentReleaseDate = this.currentRepo.created_at;

                     
//                         this.template = `
//                      <div id="repoContainer">
//                      <span>
//                      <p id="repoName">${currentName}</p>
//                      <p id="repoDescription">description:${currentDescription}</p>
//                      </span>
//                      <p id="releaseDate">${this.currentReleaseDate}</p>
//                      </div>`;

//                         this.targetContainer.innerHTML += this.template;
//                     }

//                 })
//         });
//     }
// }



// const repos= new Repo()





async function fetching() {
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

                let presentDate = new Date();
                let pastDate = currentReleaseDate;
                console.log(typeof presentDate)
                console.log(typeof pastDate)


                let template = `
                     <div id="repoContainer">
                    <span>
                     <p id="repoName">${currentName}</p>
                     <p id="repoDescription">description:${currentDescription}</p>
                     </span>`;
                // <p id="releaseDate">${presentDate - currentReleaseDate}</p>
                //  </div>

                targetContainer.innerHTML += template;
            }

        })

    await this.fetch
    targetContainer.innerHTML = `<h2>Repositories of ${input.value}</h2>`

}


form.addEventListener("submit", fetching);