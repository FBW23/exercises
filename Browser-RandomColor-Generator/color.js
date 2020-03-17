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

