// const myList = document.querySelector('.list-group');

function modifyText() {
    if (submit.firstChild.nodeValue === "Show Destinations!") {
        submit.innerText = `Hide Destinations!`;
    } else {
        submit.firstChild.nodeValue = "Show Destinations!";
    }
}

const submit = document.querySelector('#submit');
console.log(submit);
submit.addEventListener("click", modifyText);

// const clickListItem = (event) => {
//     const myInfo = document.querySelector('alert-info');
//     if(myInfo.classList.contains('d-none')) {
//         myInfo.classList.remove('d-none');
//         const city = event.target.innerText;
//         myInfo.innerText = 'You selected ' + city;
//         for (let i = 0; i < myList.children.length; i++) {
//             myList.children[i].classList.remove('list-group-item');
//         }
//         event.target.classList.add('list-group-item')
//     }
// }

