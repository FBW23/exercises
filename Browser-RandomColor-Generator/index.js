// 1. Create a function to generate a random color HEX code

const hexLetter = 'abcdef0123456789';

const randomColor = () => {
    let hex = '#' + '';
    for (let i = 0; i < 6; i++) {
        const colorNumber = Math.floor(Math.random() * hexLetter.length);
        hex += hexLetter[colorNumber];
        // console.log(hex);
    }
    return hex;
};



// const colorDiv = document.querySelector('.card');
// colorDiv.style.backgroundColor = randomColor();

// 2. Create a function to add a new color item to the list, passing the color code as argument

const form = document.querySelector('.form-inline');

const numberInput = document.querySelector('#numberInput');
const numberDiv = numberInput.value;
const button = document.querySelector('#button');
const body = document.querySelector('#body');
const eachDiv = '';
const newDivCreator = () => {
    let newDiv = document.createElement('div');
    newDiv.className = 'card';
    document.querySelector('.div-container').appendChild(newDiv);
    newDiv.style.width = '18rem';
    newDiv.style.height = '18rem'
    newDiv.style.backgroundColor = randomColor();

    for (let i = 0; i < 3; i++) {
        let list = document.createElement('li');
        list.className = 'div-container';
        document.querySelector('.div-section').appendChild(list);
    }
};

// const newDivCreator = () => {
//     for (i = 0; i < 3; i++) {
//         let list = document.createElement('li');
//         list.className = 'div-container';
//         document.querySelector('.div-section').appendChild(list);
//       for
//         let newDiv = document.createElement('div');
//         newDiv.className = 'card';
//         document.querySelector('.div-container').appendChild(newDiv);
//         newDiv.style.width = '18rem';
//         newDiv.style.height = '18rem'
//         newDiv.style.backgroundColor = randomColor();

//     }
// };

button.addEventListener('click', newDivCreator());


// div.forEach(div => {

//     let list = document.createElement('ul');
//     document.querySelector('.book-list').appendChild(list);

//     let image = document.createElement('IMG');
//     document.querySelector('li').appendChild(image);
//     image.classList.add('card', 'book');
//     image.src = book.img;
//     image.classList.add('card-img-top', 'book-cover');

//     let div = document.createElement('div');
//     document.querySelector('.card').appendChild(div);
//     div.classList.add('card-body');

//     let h5 = document.createElement('h5');
//     document.querySelector('.card-body').appendChild(h5);
//     h5.classList.add('card-title');
//     h5.innerText = book.title;

//     let p = document.createElement('p');
//     document.querySelector('.card-body').appendChild(p);
//     p.classList.add('card-text', 'text-muted');
//     p.innerText = book.author;


//     let a = document.createElement('a');
//     document.querySelector('.card-body').appendChild(a);
//     a.classList.add('btn', 'btn-success', 'status');
//     a.innerText = 'Read';

// })