<<<<<<< HEAD
const btn = document.querySelector("#btn");
const num = document.querySelector("#numFields");
const colorPallette = document.querySelector("#colorPallette");

btn.addEventListener("click", createUnit);

function rndClr() {
    const signs = "0123456789ABCDEF";
    let clr = "#";
    for (let i = 0; i < 6; i++) {
        clr += signs[Math.floor(Math.random() * 16)];
      }
    return clr;
}

function createUnit() {
    event.preventDefault();
    const numFields = num.value;
    for (let index = 0; index < numFields; index++) {
        const closeBtn = document.createElement("span");
        const colorCode = document.createElement("span");
        closeBtn.classList.add("delCol");
        const unit = document.createElement("div");
        closeBtn.addEventListener("click", () => {
            colorPallette.removeChild(unit);
        });
        const color = rndClr();
        unit.classList.add("pallette");
        unit.style.backgroundColor = color;
        colorCode.innerText = color;
        unit.appendChild(closeBtn);
        unit.appendChild(colorCode);
        colorPallette.appendChild(unit);
    }
}
=======
const btn = document.querySelector("#btn");
const num = document.querySelector("#numFields");
const form = document.querySelector("form");
const colorPallette = document.querySelector("#colorPallette");

btn.addEventListener("click", createUnit);

function rndClr() {
    const signs = '0123456789ABCDEF';
    let clr = "#";
    for (let i = 0; i < 6; i++) {
        clr += signs[Math.floor(Math.random() * 16)];
      }
    return clr;
}

function createUnit() {
    event.preventDefault();
    let numFields = num.value;
    for (let index = 0; index < numFields; index++) {
        let unit = document.createElement("div");
        unit.addEventListener("dblclick", () => {
            colorPallette.removeChild(unit);
        });
        let color = rndClr();
        unit.classList.add("pallette");
        unit.style.backgroundColor = color
        unit.innerText = color;
        colorPallette.appendChild(unit);
    }
}
>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b
