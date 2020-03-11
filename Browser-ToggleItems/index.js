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