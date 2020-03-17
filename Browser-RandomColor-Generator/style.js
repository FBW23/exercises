
function changeColor() { //button to change color
    let box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        let newColor = makeColor();
        box[i].style.backgroundColor = newColor;
        box[i].querySelector('.rgb').innerHTML = newColor;
    }
}

// function makeColor() {
//     // #123FEF instead of rgb(200, 0, 0)
//     const charSet = '0123456789ABCDEF';
//     let arr = [];
//     for (let i = 0; i < 3; i++) {
//         let num = Math.floor(Math.random() * 256);
//         arr.push(num);
//     }
//     let newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
//     return newRgb;
// }

function makeColor() {
    // #123FEF instead of rgb(200, 0, 0)
    const charSet = '0123456789ABCDEF';
    let arr = "#";
    for (let i = 0; i < 6; i++) {
        arr += charSet[Math.floor(Math.random() * 16)];    
    }    
    return arr;
}

// function deleteBox (event) {

    // your function for deletion
    // use eventTarget! 
    // go up in the tree to the parent, delete the parent! 
    // find nearest box, delete itself... 
//     console.log('delete me!');
// }

let deleteBox = document.querySelector('.box');
let i;
for (i = 0; i < deleteBox.length; i++) {
    deleteBox[i].addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
}
// Crap still doesnt work!!!!!!



const myButton = document.querySelector('.changeColor');
myButton.addEventListener('click', changeColor);

const closeButtons = document.querySelectorAll('.close');
for(let i=0; i< closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', deleteBox);
}