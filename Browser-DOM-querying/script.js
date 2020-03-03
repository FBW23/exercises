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

let main = document.querySelector(".main");
let screenWidth = window.matchMedia("(max-width: 700px)");
main.style.display = "flex";
main.style.width = "100%";
