

function colorGenerator() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    // randomColor += "80";
    return randomColor;
}

const gridCategories = document.querySelectorAll(".gridItem");

gridCategories.forEach((item) => {
    item.style.backgroundColor = colorGenerator();
    item.style.width = '80%';
    item.style.textAlign = "center";
});

gridCategories.forEach((item) => {
    item.innerText = colorGenerator();
       
});

window.document.onload = function(e){ 
    for (let i = 0; i < 3; i++) {
        gridCategories.item
    }
}