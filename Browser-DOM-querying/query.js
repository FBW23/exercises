// * Change the font of the body element. 
let font = document.querySelector('body');
font.style.fontFamily = 'Arial';

// * Center the text of h1 on the page.
let title = document.querySelector('h1');
title.align = 'center';

// * The menu headings have a class named `category`. Select the elements by class name. 
// Then, change the `color` and `font-style` of each element. 
let category = document.querySelectorAll('.category');

category.forEach((item) => {
    item.style.color = 'red';
    item.style.fontFamily = 'Bookman';
    item.style.fontSize = '2em';
});


// * Create a function named "_colorGenerator_" that returns a different color. 
// The returned random color should also include set transparency. 
// Select the unordered lists with the class of `food-category`. 
// Give each list a different background color using the function that you created. 

let color = document.querySelectorAll('ul.food-category');

function colorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 10 + 1);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

for (let i = 0; i < 3; i++) {
    color[i].style.background = colorGenerator();
}

// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

const foodCategories = document.querySelectorAll('.food-category');

foodCategories.forEach((item) => {
    item.backgroundColor = colorGenerator();
    item.style.width = '27%';
    item.style.height = '8em';
});

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';


// * Select the warning at the end of the page by its id `warning`. 
// Select the id without using a querySelector. 
// Change the size and font of the `warning`.

let warning = document.getElementById('warning');

warning.style.fontSize = '2em';
warning.style.fontFamily = 'Candara';

// * Select all _even_ `allergy-info` items. Give the even items a different background color.

let justEven = document.querySelectorAll('.allergy-info:nth-child(even)');

justEven.forEach((item) => {
    item.style.backgroundColor = 'red';
    item.style.margin = '0 30%';
});



// * Make the `allergy-warning` appear as a column in the center of the page.

let allergy = document.querySelector('.allergy-warning');

allergy.style.textAlign = 'center';


// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. 
// They should appear in a column for mobile and in a row for desktop.

let footer = document.querySelector('.footer');
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around';


let eachBubble = document.querySelectorAll('.food-desc');

eachBubble.forEach((item) => {
    item.style.backgroundColor = 'pink';
    item.style.borderRadius = '50%';
    item.style.borderStyle = 'solid';
    item.style.padding = '2.5em 2.5em';
});



// add class => .add('new-class')
document.querySelectorAll('label').forEach(item => item.classList.add('category'));

// remove class => .remove('old-class')
document.querySelectorAll('label').forEach(item => item.classList.remove('category'));

// adding class to h1
document.querySelector('h1').classList.add('another-class');

// removing class to h1
document.querySelector('h1').classList.remove('another-class');
