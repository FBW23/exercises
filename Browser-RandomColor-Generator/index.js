<<<<<<< HEAD

 
const section=document.querySelectorAll('section'); 
const button=document.querySelector('button');


function colorGenerator() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

function colorForAll (){
    const myLength = document.querySelector('#length').value;
    for (let i = 0; i < parseInt(myLength) ; i++) {
        const newColor = colorGenerator();
        const newElement = document.createElement('div')
        section[i].style.background = newColor;
        section[i].append(newColor);
        
    
    } 
}
colorForAll()

console.log(section.length);

// function closeBox (){
    
// }
button.addEventListener('click' , colorForAll)
=======
const hexLetter = 'abcdef0123456789';

for (let i = 0; i < 6; i++) {
    let hex = "";
    const colorNumber = Math.floor(Math.random() * hexLetter.length); 
    hex += `#${hexLetter[colorNumber]}`;
    console.log(hex);
}
>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b

