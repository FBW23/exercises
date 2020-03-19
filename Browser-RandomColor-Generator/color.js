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
// saving the form
const form = document.querySelector('.form-inline');
// saving the number input
const numberInput = document.querySelector('#numberInput');
const numberDiv = numberInput.value;
// saving buttons
const button = document.querySelector('#button');
const eachDiv = '';
const newDivCreator = () => {
    const numberDiv = numberInput.value;
    for (i = 0; i < numberDiv; i++) {
        let divContainer = document.createElement('div');
        divContainer.className = 'div-container';
        document.querySelector('.section').appendChild(divContainer);
        let newDiv = document.createElement('div');
        newDiv.className = 'card';
        document.querySelector('.div-container').appendChild(newDiv);
        newDiv.style.width = '21rem';
        newDiv.style.height = '7rem'
        newDiv.style.backgroundColor = randomColor();
    }
};
// numberInput.addEventListener('keydown', newDivCreator);
button.addEventListener('mousedown', newDivCreator);