// Your JS here!
// function modifyText() {
//     let input = document.querySelector('#fname');
//     let label = document.querySelector('label');
//     let today = new Date().getDay();
//     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//     let leftDays = 5 - today;
   
//     if (input.value) {
//         label.innerText = `Hello ${input.value} today is ${days[today-1]}. There are ${leftDays} days until the weekend `
//     }

// }

function profileSection (){
    let input = document.querySelector('input');
    let h1= document.querySelector('h1');
    let h2= document.querySelector('h2');
    let section = document.querySelector('section');
    
    if(EventTarget){
        // input.innerText = `hello`;
        // h1.innerText= `da`;
        // h2.innerText = `àsd`;
        section.classList.remove('none')
    }
};

let submit = document.querySelector('.create');
submit.addEventListener('click', profileSection)