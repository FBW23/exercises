// const go = document.querySelector('go');

function modifyText() {
    let input = document.querySelector('#fname');
    let label = document.querySelector('label');
    let today = new Date().getDay();
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let leftDays = 5 - today;
   
    if (input.value) {
        label.innerText = `Hello ${input.value} today is ${days[today-1]}. There are ${leftDays} days until the weekend `
    }

}


// add event listener to table
let el = document.querySelector("#btn"); //or the name of the #ID
el.addEventListener("click", modifyText);

