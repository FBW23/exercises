let title = document.querySelector('.title');
title.style.textAlign = "center";


document.querySelector("body").style.fontFamily = "arial";
document.querySelector(".main").style.color = 'black';
document.querySelector(".food-category").style.display = "row";
document.querySelector(".category").style.fontFamily = "helvetica";
let category = document.querySelectorAll(".category");
for (let i = 0; i < category.length; i++) {
    category[i].style.color = 'grey';
    category[i].style.fontSize = "30px";
}

function randomColors() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 0.8)';
}

let foodie = document.querySelectorAll('.food-category');
for (let i = 0; i < foodie.length; i++) {
    foodie[i].style.background = randomColors();
    foodie[i].style.width = "30%";


}
const main = document.querySelector('main');
main.style.display = 'flex';
main.style.justifyContent = 'space-between';

document.getElementById("warning").style.fontFamily = "roboto";
document.getElementById('warning').style.fontSize = "50px";
document.getElementById('warning').style.textAlign = 'center';

let infofo = document.querySelectorAll(".allergy-info:nth-child(even)");

for (let i = 0; i < infofo.length; i++) {
    infofo[i].style.background = "red";

}
const labrador = document.querySelector('.allergies');
labrador.style.listStyleType = "none";
labrador.style.display = 'flex';
labrador.style.flexDirection = 'column';
labrador.style.width = "30%";
labrador.style.margin = "auto";

labrador.style.textAlign = "center";

let roundy = document.querySelectorAll(".food-desc");
for (let i = 0; i < roundy.length; i++) {
    roundy[i].style.border = "solid orange";
    roundy[i].style.borderRadius = '50%';
    roundy[i].style.textAlign = "center";
    roundy[i].style.width = "200px";
    roundy[i].style.height = "200px";

    // roundy[i].style.display="inline-block";

}

let footy = document.querySelector('.footer');
footy.style.display = "flex";
footy.style.flexDirection = "row";
footy.style.justifyContent = "space-around";
footy.style.padding = "20px"

let h3 = document.querySelectorAll(".footer h3");
for (let i = 0; i < h3.length; i++) {
    h3[i].style.marginTop = "45%";

}