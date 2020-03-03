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
    // a[b].style.flexbox.insertRow();
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

  
 