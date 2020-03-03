//1. 
document.querySelector('body').style.fontFamily = 'Trade Winds';


document.querySelector("h1").style.textAlign = "center";

let x = document.querySelectorAll(".category");

for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
    x[i].style.fontFamily = 'Tangerine';
}

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let a = document.querySelectorAll('.food-category');
for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = generateRandomColor();
}

function myFunction(b) {
    if (b.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  let b = window.matchMedia("(max-width: 700px)")
  myFunction(b) // Call listener function at run time
  b.addListener(myFunction) // Attach listener function on state changes