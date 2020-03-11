// let button = document.querySelector("button");
// let list = document.querySelector("ul");

// let listVisible = false;

// button.addEventListener("click", function listener() {
//   listVisible = !listVisible; // truthy and falsy, always in-between, reverses the states
//   if (listVisible) {
//     list.style.display = "block";
//     button.innerHTML = "Get them out of here!";
//   } else {
//     list.style.display = "none";
//     button.innerHTML = "Show favourite destinations";
//   }
//   //   button.removeEventListener("click", listener); // stops the event
// });


const myList = document.querySelector('.list-group');
const myButton = document.querySelector('button');
//console.log(myList);
//console.log(myButton);
const toggleList = () => {
    if (myList.classList.contains('d-none')) {
        // display block
        myList.classList.remove('d-none');
        myButton.innerText = 'Hide destinations!';
    } else {
        // display none
        myList.classList.add('d-none');
        myButton.innerText = 'Show destinations!';
    }
};
const clickListItem = (event) => {
    const myInfo = document.querySelector('.alert-info');
    if (myInfo.classList.contains('d-none')) {
        myInfo.classList.remove('d-none');
    }
    const city = event.target.innerText;
    //console.log(event.target.innerText);
    myInfo.innerText = 'You selected ' + city;
    for (let i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('active');
    }
    event.target.classList.add('active');
};
myButton.addEventListener('click', toggleList);
myList.addEventListener('click', clickListItem);
