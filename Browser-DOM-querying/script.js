//1. 
document.querySelector('body').style.fontFamily = 'Trade Winds';


document.querySelector("h1").style.textAlign = "center";

let x = document.querySelectorAll(".category");

for (let i = 0; i < x.length; i++) {
    //x[i].style.backgroundColor = "red";
    x[i].style.textDecoration = "underline";
    x[i].style.fontSize = "1.5rem";
    x[i].style.fontFamily = 'Tangerine';
    x[i].style.fontStyle = "italic";



}

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let a = document.querySelectorAll('.food-category');
for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = generateRandomColor();
}

const foodCategories = document.querySelectorAll(".food-category");

foodCategories.forEach(({
    style: categoryBox
}) => {
    categoryBox.backgroundColor = generateRandomColor();
    categoryBox.width = '30%';
    categoryBox.lineHeight = "1.8rem";
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

let footer = document.querySelectorAll('.footer');


footer.forEach((item) => {
    item.style.display = 'flex';
    item.style.fontFamily = 'bookman';
    item.style.fontSize = '2rem';
    item.style.textAlign = 'right';
    item.style.justifyContent = "center";
    item.style.fontSize = "0.7rem";
    item.style.fontSize = "1.5rem";
    item.style.border = "5px solid orange";
    item.style.padding = "5em";
    item.style.padding = "3em";
    item.style.borderRadius = "50%";
    item.style.width = "5%";
    item.style.width = "9rem";
    item.style.margin = "1em 1.5em";
    item.style.textAlign = "center";
});