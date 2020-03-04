// let category = document.querySelectorAll('.category');
// console.log(category);
// category.style.color= 'blue';

document.querySelector('body').style.fontFamily = "Impact,Charcoal,sans-serif";

document.querySelector('h1').style.textAlign = "center";

//Food Category

let category = document.querySelectorAll('.category');
for (let i = 0; i < category.length; i++) {
    category[i].style.fontFamily = "Andale Mono, monospace";
    category[i].style.fontSize = '1.5rem';
    category[i].style.fontStyle = 'italic';
    category[i].style.textDecoration = 'underline';
}

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let a = document.querySelectorAll('.food-category');
for (let b = 0; b < a.length; b++) {
    a[b].style.backgroundColor = generateRandomColor();
}
function myFunction(b) {
    if (b.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "white";
    }
}
let b = window.matchMedia("(max-width: 700px)")
myFunction(b) // Call listener function at run time
b.addListener(myFunction) // Attach listener function on state changes


const foodCategories = document.querySelectorAll(".food-category");
foodCategories.forEach(({
    style: categoryBox
}) => {
    categoryBox.backgroundColor = generateRandomColor();
    categoryBox.width = '29%';
    categoryBox.border = 'solid', '1px';
    categoryBox.lineHeight = '2rem';


})

//Allergy Warning

const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';


let warning = document.getElementById("warning");
warning.style.fontSize = '2rem';
warning.style.fontFamily = 'Garamond';
warning.style.textAlign = 'center';

let evenNumber = document.querySelectorAll('.allergy-info:nth-child(even)');

for (let i = 0; i < evenNumber.length; i++) {
    evenNumber[i].style.backgroundColor = 'green';
}


const secondCenter = document.querySelectorAll('.allergy-info');
secondCenter.forEach(({
    style: alergyBox
}) => {
    alergyBox.display = 'flex';
    alergyBox.margin = '0 auto';
    alergyBox.width = '30%';
    alergyBox.listStyle = 'none';

});

//Footer

let footer = document.querySelector('.footer');
footer.style.display = 'flex';
footer.style.marginTop = '3em';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';

let borderRad = document.querySelectorAll('.food-desc');
borderRad.forEach((data) => {
    data.style.borderRadius = '50%';
    data.style.border = '5px solid orange';
    data.style.width = '150px';
    data.style.height = '150px';
    data.style.textAlign = 'center';
    data.style.padding = '1em';
    data.style.margin = '1em 1.5em';
});

let lastMargin = document.querySelectorAll('h3');
lastMargin.forEach((last) => {
    last.style.marginTop = '65px';
});

// this is to overwrite on HTML index
// document.querySelector('h1').innerText = 'Testing for the New InnerText';

// to add more classes
//document.querySelector('h1').classList.add('Nags');

//to remove class
// document.querySelector('h1').classList.remove('Nags');

//document.write(); is to delete all site!!!!!!! Becarefull

//document.write('<script>alert("hello world");</script>');
// Cross site scripting ATTACk. 
// Please be aware of this problems if you include any third party

let h = document.createElement('a');
h.innerText ='hello world';
h.setAttribute('href', 'http://hellowworld.com');
// create a fully link
document.querySelector('.title').appendChild(h);
// add newly created element of the title



