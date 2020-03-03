// let category = document.querySelectorAll('.category');
// console.log(category);
// category.style.color= 'blue';

document.querySelector('body').style.fontFamily= "Impact,Charcoal,sans-serif";

document.querySelector('h1').style.textAlign= "center";

let category = document.querySelectorAll('.category');
for (let i =0; i<category.length; i++) {
    category[i].style.color = 'blue';
    category[i].style.fontFamily = "Andale Mono, monospace";
}

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let a=document.querySelectorAll('.food-category');
for (let b = 0; b < a.length; b++) {
    a[b].style.backgroundColor = generateRandomColor();
}

// function myFunction() {
//     var table = document.getElementById(".food-category");
//     var row = table.insertRow(0);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // cell1.innerHTML = "NEW CELL1";
    // cell2.innerHTML = "NEW CELL2";