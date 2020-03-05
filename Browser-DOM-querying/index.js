<<<<<<< HEAD
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

=======
let body = document.querySelector('body');


body.style.fontFamily = 'arial';

document.querySelector('.title').style.textAlign = ('center');
let categories = document.querySelectorAll('.category');


for (let i = 0; i < categories.length; i++) {
    categories[i].style.color = 'pink';
    categories[i].style.fontStyle = "italic";
}



let foodCategories = document.querySelectorAll('.food-category');

function colorGenerator() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


for (let i = 0; i < foodCategories.length; i++) {
    foodCategories[i].style.backgroundColor = colorGenerator();
    foodCategories[i].style.width = '30%';
    foodCategories[i].style.paddingTop = '20px';
    foodCategories[i].style.marginLeft = '8px';
    foodCategories[i].style.paddingBottom = '20px';

}
>>>>>>> 0d75aa08a5dd6caacf4b3b90520b5cfa52513ce2

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';

<<<<<<< HEAD
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
// add newly created element to the title
=======
const warning = document.getElementById('warning');
warning.style.fontFamily = 'roboto';
warning.style.fontSize = '30px';
warning.style.textAlign = 'center';

const allergyInfo = document.querySelectorAll('.allergy-info:nth-child(even)');
for (let i = 0; i < allergyInfo.length; i++) {
    allergyInfo[i].style.background = 'yellow';

}
const allAlergyInfo = document.querySelector('.allergies');
allAlergyInfo.style.listStyle = 'none';
allAlergyInfo.style.display = 'flex';
allAlergyInfo.style.flexDirection = 'column';
allAlergyInfo.style.width = '30%';
allAlergyInfo.style.margin = 'auto'


const footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.flexDirection = 'row';
footer.style.paddingTop = '50px';
footer.style.justifyContent = 'space-between';
footer.style.margin = 'auto';
footer.style.paddingRight = '300px';
footer.style.paddingLeft = '300px'




const footerDesc = document.querySelectorAll('.food-desc');
for (let i = 0; i < footerDesc.length; i++) {
    footerDesc[i].style.border = 'thick solid orange';
    footerDesc[i].style.borderRadius = '50%';
    footerDesc[i].style.height = '100px';
    footerDesc[i].style.width = '100px';
    footerDesc[i].style.padding = '30px'


}

const h3 = document.querySelectorAll('h3');
h3.forEach((item )=> {
    item.style.paddingTop = '20px';
    item.style.paddingLeft = '8px'
});


>>>>>>> 0d75aa08a5dd6caacf4b3b90520b5cfa52513ce2
