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
// add newly created element to the title