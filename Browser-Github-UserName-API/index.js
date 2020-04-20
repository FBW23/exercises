//with async
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

//WITH CLASSES
// class GitSearch {
//     constructor(url){
//         this.url = url;
//         this.init();
//     }
//     init(){
//         this.inputRepo;
//         this.form;
//         this.result;
//     }
//     async fetchGithub(){
//     const userName = inputRepo.value;
//     const response = await fetch(url);
//     const data = await response.json() // parse json
//     return data;
//     }
//     displayResults(e){
//         e.preventDefault();
//         fetchGithub().then(data=>{
//             console.log(data);
//             for (let i=0; i<data.length; i++){
//                 result.innerHTML += `<section class='repos'><a href='${data[i].html_url}'>${data[i].name}</a><p>${data[i].description}</p><span>${data[i].pushed_at}</span></section>`;
//             }
           
//         });
        
      
//     }
// }

