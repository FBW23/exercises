//changing the bodyfont

const body= document.querySelector('body');
body.style.fontFamily = 'Roboto';

//Center the text of h1 on the page
const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

//Select the elements by class name.

const categories = document.querySelectorAll ('.category');
for (let i=0; i<categories.length; i++){
    categories[i].style.color = 'grey';
    categories[i].fontStyle = 'italic';
};

//Create a function named "_colorGenerator_" 
function colorGenerator() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
};

const foodCategories = document.querySelectorAll('.food-category');
for (let i=0;i< foodCategories.length; i++){
    categories[i].style.backgroundColor = colorGenerator();
    foodCategories[i].style.backgroundColor = colorGenerator();
    foodCategories[i].style.width = '30%';
};

//allign food-category in a row

const main = document.querySelector('.main');
main.style.display = 'flex';

//selecting warning

const warning = document.getElementById('warning');
warning.style.fontFamily = 'Verdana';
warning.style.fontSize = '70px';



