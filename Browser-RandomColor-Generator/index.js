<<<<<<< HEAD
let section = document.querySelectorAll(".box");
let a = document.querySelectorAll("a");
let button = document.querySelector("button");
let main = document.querySelector(".main");

main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.flexWrap = "wrap";

function colorGenerator() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function createSquares() {
    let inputValue = document.querySelector("#color").value;
    for (let i = 0; i < parseInt(inputValue); i++) {
        let newSection = document.createElement("section");
        let backColor = colorGenerator(); 
        newSection.classList.add("box");
        newSection.style.background = backColor;
        newSection.style.width = "30%";
        newSection.style.height = "200px";
        newSection.style.margin = "20px";
        newSection.style.textAlign = "center";
        newSection.innerText=backColor;

    }
}

createSquares();

button.addEventListener("click", createSquares);
=======
const hexLetter = 'abcdef0123456789';

for (let i = 0; i < 6; i++) {
    let hex = "";
    const colorNumber = Math.floor(Math.random() * hexLetter.length); 
    hex += `#${hexLetter[colorNumber]}`;
    console.log(hex);
}

>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b
