<<<<<<< HEAD
//Change the font of the body element.

let body = document.body;

body.style.fontFamily = "mono";
body.style.lineHeight = "1.5";
body.style.letterSpacing = ".1rem";

//Center the text of h1 on the page.

let heading = document.querySelector("h1");
heading.style.textAlign = "center";

//The menu headings have a class named category. 
//Select the elements by class name. Then, change 
//the color and font-style of each element.

let menuHeadings = document.querySelectorAll(".category");

menuHeadings.forEach((item) => {
  item.style.color = "red";
  item.style.fontFamily = "serif";
  item.style.fontStyle = "italic";
  item.style.fontSize = "3rem";
  item.style.borderBottom = "2px solid black";
  item.style.display = "block";
  item.style.marginBottom = "1em"
});
/*
Create a function named "colorGenerator" that returns a 
different color. The returned random color should also 
include set transparency. Select the unordered lists with 
the class of food-category. Give each list a different 
background color using the function that you created.
*/

function colorGenerator() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.2 + ')';
}

let unorderedLists = document.querySelectorAll(".food-category");
console.log(unorderedLists);


unorderedLists.forEach((item) => {
  item.style.backgroundColor = colorGenerator();
  item.style.padding = "0 2em 2em";
  item.style.width = "80%";
  item.style.margin = "1em 0";
});


/*
Align the food-category lists in a row on 
desktop. Make sure that the
page is responsive and also works on mobile.
*/

let main = document.querySelector(".main");
let screenWidth = window.matchMedia("(max-width: 615px)");
main.style.display = "flex";
main.style.width = "100%";

let foodItems = document.querySelectorAll(".food-item");
foodItems.forEach((item) => {
  item.style.marginBottom = "0.8em";
  item.style.fontWeight = "900";
  item.style.fontSize = "1.2em";
});

function responsivePage(screenWidth) {
  if (screenWidth.matches) {
    main.style.flexDirection = "column";
    main.style.padding = "1em";
    main.style.alignItems = "center";
    footer.style.flexDirection = "column";
  } else {
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-around";
    for (let i = 0; i < unorderedLists.length; i++) {
      unorderedLists[i].style.margin = "1em";
    }
  }
}
responsivePage(screenWidth);
screenWidth.addListener(responsivePage);
/*
Select the warning at the end of 
the page by its id warning. Select 
the id without using a querySelector. 
Change the size and font of the warning.
*/

let warning = document.getElementById("warning");
warning.style.fontSize = "2.5rem";
warning.style.textAlign = "center";
warning.style.fontFamily = "serif";

/* 
Select all even allergy-info items. 
Give the even items a different background color.
Make the allergy-warning appear as a column in 
the center of the page.
*/


let evenAllergyInfo = document.querySelectorAll('.allergy-info');


evenAllergyInfo.forEach((item) => {
  item.style.textAlign = "left";
  item.style.listStyle = "none";
  item.style.display = "flex";
  item.style.justifyContent = "flex-start";
  item.style.width = "30%";
  item.style.margin = "0 auto";
});

for (let i = 0; i < evenAllergyInfo.length; i++) {
  evenAllergyInfo[++i].style.backgroundColor = "lightblue";

}

/*
The descriptions in the footer should also be styled, 
e.g. a rounded border with a background color. 
They should appear 
in a column for mobile and in a row for desktop.
*/
let footer = document.querySelector('.footer');
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.marginTop = "3em";
footer.style.alignItems = "center";


let footerDesc = document.querySelectorAll(".food-desc");


footerDesc.forEach((item) => {
  item.style.fontSize = "1.5rem";
  item.style.border = "5px solid orange";
  item.style.padding = "2em";
  item.style.borderRadius = "50%";
  item.style.width = "7rem";
  item.style.margin = "1em 1.5em";
  item.style.textAlign = "center";
  item.style.display = "flex";
  item.style.justifyContent = "center";
});











// foodCategories.forEach(({
//   style: categoryBox 
// }) => {
//     categoryBox.width = "100%"
// });
=======
//change font of body
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
menuCategories.forEach(({
    style: category
}) => {
    category.fontStyle = "italic";
    category.fontSize = "2rem";
    category.borderBottom = "1px solid black";
});

//change font size of warning at bottom of page
let warning = document.getElementById("warning");
warning.style.fontSize = "1.5rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//color generator
function colorGenerator() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
}

//assigning a random color to each list item
const foodCategories = document.querySelectorAll(".food-category");

foodCategories.forEach((item) => {
    item.style.backgroundColor = colorGenerator();
    item.style.width = '30%';
});


const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';

const classList = main.classList;
console.log(classList);
main.classList.add('anotherclass');
console.log(classList);
main.classList.remove('main');
console.log(classList);
// Combine this methods with some predefined CSS!!! 
// removing class from several labels
document.querySelectorAll('label').forEach(item => console.log(item.classList.remove('category')));
// adding classes for several labels
document.querySelectorAll('label').forEach(item => console.log(item.classList.add('category', 'nagster')));
// Adding classes to H1
document.querySelector('h1').classList.add('julia');
// removing classes to H1
document.querySelector('h1').classList.remove('julia');

console.log(document.querySelector('h1').innerText); // get text on the console
document.querySelector('h1').innerText = 'Put a different text for showcase'; // change text
document.querySelector('h1').innerText = ''; // hide text / hide nodes 
// error messaging - feedback to the user in case of errors
document.querySelector('h1').innerText = 'You forgot to put in your birthday';
console.log(document.querySelector('ul').innerHTML);
document.querySelector('ul').innerHTML = document.querySelector('ul').innerHTML + '<li>new list item</li>';
document.querySelector('ul').innerHTML += '<li>new third item</li>';
document.querySelector('h1').innerHTML = '<i>' + document.querySelector('h1').innerHTML + '</i>';
document.querySelector('h1').innerHTML = '<a>' + document.querySelector('h1').innerHTML;
// make sure to still use proper html valid = check with validator after executing js 
document.write(''); // deletes the whole dom = will not be executed by good browsers!!
// DONT USE EVER EVER!!!
// document.write('<script>alert("hello world");</script>');
// XSS CROSS SITE SCRIPTING ATTACK 
// TAKE CARE VERY PROPERLY !!! 
// PLEASE BE AWARE OF THESE PROBLEMS IF YOU INCLUDE ANY THIRD PARTY CODE 
let a = document.createElement('a');
console.log(a);
a.innerText = 'hello world';
console.log(a);
a.setAttribute('href', 'http://helloworld.com');
// Create a fully link
document.querySelector('.title').appendChild(a);
<<<<<<< HEAD
// add newly created element to the title




        const foodItems = document.querySelectorAll(".food-item"); foodItems.forEach(({
            style: item
        }) => {
            item.marginTop = "1rem";
            item.listStyle = "none";
        });
>>>>>>> ac7a6bcf68d3cbb79cb2c61654b42c126dfdbb42
=======
// add newly created element to the title
>>>>>>> 7237e84f3079b2a6f4c7e11bd8e3706136025680
