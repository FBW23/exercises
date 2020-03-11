const myButton = document.querySelector('button');

const toggleList = ()=> {
    const myList = document.querySelector('.list-group');
    if(myList.classList.contains('d-none')){
        myList.classList.remove('d-none');
        myButton.innerText= 'Hide destinations!';
    } else {
        myList.classList.add('d-none');
        myButton.innerText= 'Show destinations!';
    }
};


myButton.addEventListener('click', toggleList);