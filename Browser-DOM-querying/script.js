//Change the font of the body element.
document.querySelector('body').style.fontFamily = 'Trade Winds';

//Center the text of h1 on the page.
document.querySelector("h1").style.textAlign = "center";
/*The menu headings have a class named `category`. 
Select the elements by class name. Then, change the `color` and `font-style` of each element. */
let x = document.querySelectorAll(".category");

for (let i = 0; i < x.length; i++) {
    //x[i].style.backgroundColor = "red";
    x[i].style.textDecoration = "underline";
    x[i].style.fontSize = "1.5rem";
    x[i].style.fontFamily = 'Tangerine';
    x[i].style.fontStyle = "italic";
}


/*Create a function named "_colorGenerator_" that returns a different color. 
The returned random color should also include set transparency. 
Select the unordered lists with the class of `food-category`. 
Give each list a different background color using the function that you created. */
function colorGenerator() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let a = document.querySelectorAll('.food-category');
for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = colorGenerator();
}

/*Align the `food-category` lists in a row on desktop. 
Make sure that the page is responsive and also works on mobile.*/
const foodCategories = document.querySelectorAll(".food-category");

foodCategories.forEach(({
    style: categoryBox
}) => {
    categoryBox.backgroundColor = colorGenerator();
    categoryBox.width = '30%';
    categoryBox.lineHeight = "1.8rem";
    categoryBox.border = "8px solid white";

})
const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';



/* Select the warning at the end of the page by its id `warning`. 
Select the id without using a querySelector. Change the size and font of the `warning`.*/


let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.textAlign = "center";
warning.style.fontFamily = "Garamond";

/*Select all _even_ `allergy-info` items. Give the even items a different background color.
Make the `allergy-warning` appear as a column in the center of the page.*/



let evenAllergyInfo = document.querySelectorAll('.allergy-info');
evenAllergyInfo.forEach((item) => {
    item.style.textAlign = "left";
    item.style.listStyle = "none";
    item.style.display = "flex";
    //item.style.justifyContent = "flex-start";
    item.style.width = "30%";
    item.style.margin = "0 auto";
});
for (let i = 0; i < evenAllergyInfo.length; i++) {
    evenAllergyInfo[++i].style.backgroundColor = "lightblue";
}


/*The descriptions in the footer should also be styled, e.g. a rounded border with a background color. 
They should appear in a column for mobile and in a row for desktop.*/

let footer = document.querySelector('.footer');
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.marginTop = "3em";
footer.style.alignItems = "center";
footer.style.textFamily = 'bookman'


let footerDesc = document.querySelectorAll(".food-desc");


footerDesc.forEach((item) => {
    item.style.fontSize = "1.5rem";
    item.style.border = "5px solid orange";
    item.style.padding = "3em";
    item.style.borderRadius = "50%";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.margin = "1em 1.5em";
    item.style.textAlign = "center";
});