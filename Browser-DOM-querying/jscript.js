// * Change the font of the body element. 

let bodyFont = document.getElementById('changeFontOfBodyElement');
// console.log(bodyFont);
bodyFont.style.fontFamily = 'Arial';

// * Center the text of h1 on the page.

let centerTitle = document.getElementById('menuTitle');
// console.log(centerTitle);
menuTitle.style.textAlign = 'center';

// * The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 

let categoryElements = document.querySelectorAll('.category');
// console.log(categoryElements);
for (let i = 0; i < categoryElements.length; i++) {
    categoryElements[i].style.color = 'green';
    categoryElements[i].style.fontFamily = 'Roboto';
}

// * Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 

let foodCategory = document.querySelectorAll('ul.food-category');

function colorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 10 + 1);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
for (let i = 0; i < foodCategory.length; i++) {
    foodCategory[i].style.background = colorGenerator();
}

// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

let ulAlign = document.querySelectorAll('ul');

if (window.matchMedia("(min-width: 400px)").matches) {
    /* the viewport is at least 400 pixels wide */
    for (let i = 0; i < foodCategory.length; i++) {
        foodCategory[i].style.width = '25%';
        // foodCategory[i].style.textAlign = 'center';
        foodCategory[i].style.flex = 'flex-grow';
        foodCategory[i].style.margin = "30px 10px 10px 30px";
    }
} else {
    /* the viewport is less than 400 pixels wide */
}