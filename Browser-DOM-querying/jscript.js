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

// let unorderedLists = document.querySelectorAll(".food-category");
// console.log(unorderedLists);
// unorderedLists.forEach((item) => {
//   item.style.backgroundColor = colorGenerator();
//   item.style.padding = "0 2em 2em";
//   item.style.width = "80%";
//   item.style.margin = "1em 0";
// });

// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

let ulAlign = document.querySelectorAll('ul');

if (window.matchMedia("(min-width: 400px)").matches) {
    /* the viewport is at least 400 pixels wide */
    for (let i = 0; i < foodCategory.length; i++) {
        foodCategory[i].style.width = '27%';
        // foodCategory[i].style.textAlign = 'center';        
    }
} else {
    /* the viewport is less than 400 pixels wide */
}

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = "space-around";

// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.

const warningSize = document.getElementById('warning');
warningSize.style.fontSize = '77px';
warningSize.style.fontFamily = 'Roboto';

// * Select all _even_ `allergy-info` items. Give the even items a different background color.

// const evenElements = document.querySelectorAll('.allergy-info:nth-child(even)');

// for (let item in evenElements) {
//     evenElements[item].style.background = "rgb(135, 200, 238)";
//     // evenElements[item].style.width = '30%';
// }

const evenElements = document.querySelectorAll('.allergy-info');

function evenSort() {
    for (let i = 0; i < evenElements.length; i++) {
        if (i % 2 !== 0) {
            evenElements[i].style.background = 'rgb(135, 200, 238)';
        }
    }
    for (let item of evenElements) {
        item.style.width = '30%';
    }
}

evenSort();

// * Make the `allergy-warning` appear as a column in the center of the page.

const section = document.querySelector('.allergy-warning');

console.log(section)

// KEINE AHNUNG ICH DREHE DURCH