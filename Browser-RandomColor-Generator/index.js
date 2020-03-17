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

// function to erase a div
function closeCrossFunction (e){
    let singleDivElement = e.target.parentNode.parentNode;
    singleDivElement.remove();
}

// function to create divs according to input number
const newDivCreator = () => {
    event.preventDefault();
    const numberDiv = numberInput.value;
    for (i = 0; i < numberDiv; i++) {
        // create a div element
        let divContainer = document.createElement('div');
        divContainer.className = 'div-container';
        document.querySelector('.section').appendChild(divContainer);
        let newDiv = document.createElement('div');
        newDiv.className = 'card';
        document.querySelector('.div-container').appendChild(newDiv);
        newDiv.style.width = '21rem';
        newDiv.style.height = '7rem';
        let hexColor = randomColor();
        newDiv.style.backgroundColor = hexColor;
        newDiv.innerText = hexColor.toUpperCase();
        let closeCross = document.createElement('button');
        closeCross.className = 'close';
        closeCross.setAttribute('aria-label', 'Close');
        closeCross.innerHTML = '<span aria-hidden="true">&times;</span>';
        newDiv.appendChild(closeCross);
        closeCross.addEventListener('click', closeCrossFunction)
    }
};

// numberInput.addEventListener('keydown', newDivCreator);
button.addEventListener('click', newDivCreator);


// CODE WITH JULIEN

// const newDivCreator = () => {
//     for (i = 0; i < 3; i++) {
//         let list = document.createElement('li');
//         list.className = 'div-container';
//         document.querySelector('.div-section').appendChild(list);
//         let newDiv = document.createElement('div');
//         newDiv.className = 'card';
//         document.querySelector('.div-container').appendChild(newDiv);
//         newDiv.style.width = '18rem';
//         newDiv.style.height = '18rem'
//         newDiv.style.backgroundColor = randomColor();

//     }
// };
