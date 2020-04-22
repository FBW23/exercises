

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
    const newColor = colorGenerator();
    item.style.backgroundColor = newColor;
    item.style.width = '80%';
    item.style.textAlign = "center";
    item.innerText = newColor;
});


// function addElement () { 
//     // create a new div element 
//     let newDiv = document.createElement("div"); 
//     // and give it some content 
//     let newContent = document.newColor; 
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);  
  
//     // add the newly created element and its content into the DOM 
//     let currentDiv = document.querySelector("div1"); 
//     document.body.insertBefore(newDiv, currentDiv)}


//     const colors = document.querySelector("#colors");
// const button = document.querySelector("#submit");
// const colorGenerator = () => {
//     let randomColor = "#";
//     let letters='ABCDEF0123456789';
//     for (let i = 0; i < 6; i++) {
//         randomNumber = Math.floor(Math.random() * letters.length);
//         randomColor += letters[randomNumber];
//     }
//     return randomColor; // '#ABD456'
// }
// const hideIt = (event) => {
//     const parent = event.target.parentNode;
//     parent.remove();
// }
// const divGenerator = () => {
//     const colorNumber = document.querySelector("#number").value;
//     const myNum = Number(colorNumber);
//     for (let i = 0; i < myNum; i++) {
//         const myDiv = document.createElement('div');
//         const hexcode = colorGenerator();
//         myDiv.style.background = hexcode;
//         myDiv.classList.add('color');
//         myDiv.innerText = hexcode;
//         const paragraph = document.createElement("p");
//         paragraph.classList.add("close");
//         paragraph.innerText = "x";
//         paragraph.addEventListener("click", hideIt);
//         myDiv.append(paragraph);
//         colors.append(myDiv);
//     }
// }
// divGenerator();
// // button.addEventListener("click", divGenerator);