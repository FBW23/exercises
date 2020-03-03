/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable semi */

/** Change the font of the body element.*/
// const body = document.querySelectorAll("body");
// body[0].style.fontFamily = 'arial';
const body = document.body;
body.style.fontFamily="arial";
body.style.padding='0';
/** Center the text of h1 on the page.*/
const title = document.getElementsByTagName("h1");
title[0].style.textAlign = 'center';
/* The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element.  */
const category = document.getElementsByClassName("category");
for (let i =0;i<category.length;i++) {
    category[i].style.color = 'green';
    category[i].style.fontStyle = 'italic';
    category[i].style.borderBottom = '2px solid black';
}

/* Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created. */

function generateRandomColor () {
    let r = Math.round,
    g = Math.random,
    b = 255,
    a= 0.5;
  return 'rgba(' + r(g() * b) + ',' + r(g() * b) + ',' + r(g() * b) + ',' + a + ')';
}
let w = document.querySelectorAll('.food-category');
for (let i = 0; i < w.length; i++) {
    w[i].style.backgroundColor = generateRandomColor();
}
const foodCategories = document.querySelectorAll(".food-category");
foodCategories.forEach(({
    style: categoryBox
})   => {
    categoryBox.backgroundColor=generateRandomColor();
    categoryBox.width= '30%';
    categoryBox.height= '10vh';
}
)
/* * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile. */
const main = document.querySelector('main');
main.style.display= 'flex';
main.style.justifyContent= 'space-between';

/* Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`. */
const achtung = document.getElementById('warning');
achtung.style.fontSize = '40px';
achtung.style.fontFamily = 'comic sans'
achtung.style.textAlign = 'center';
/* * Select all _even_ `allergy-info` items. Give the even items a different background color. */
const evenBack = document.querySelectorAll('.allergy-info:nth-child(even)');
for (let q=0;q<evenBack.length;q++) {
    evenBack[q].style.backgroundColor='#87C8EE';

}
/* * Make the `allergy-warning` appear as a column in the center of the page. */

const columnWarning = document.querySelectorAll('.allergy-warning');
columnWarning.forEach((item)=> {
    item.style.width = "55%";
    item.style.margin = "0 auto";
  });

  /* * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop. */

  const descriptionFooter = document.querySelector('.footer');
  descriptionFooter.style.display= 'flex';
  descriptionFooter.style.justifyContent = 'space-around';
  descriptionFooter.style.marginTop = '3%';
 

  /* Make the allergy-warning appear as a column in the center of the page. */

const footerItems = document.querySelectorAll('.food-desc');
footerItems.forEach((item)=>{
item.style.display = 'flex';
item.style.justifyContent = 'space-around';
item.style.borderRadius = '50%';
item.style.border = '5px solid orange';
item.style.fontSize= '1rem';
item.style.width='5rem';
item.style.padding='3rem 3rem'

});



