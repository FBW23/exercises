let section = document.querySelectorAll(".box");

let main = document.querySelector(".main");
main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.flexWrap = "wrap";


function colorGenerator() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);;
}

for (let i = 0; i < section.length; i++) {
    section[i].style.background = colorGenerator();
    section[i].style.width = "30%";
    section[i].style.height = "200px";
    section[i].style.margin = "20px";
    section[i].innerText = colorGenerator();
    section[i].style.textAlign = "center";
}