
const section = document.querySelectorAll('section');
const color = document.querySelectorAll('#color')

const colorGenerator = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    for(let i=0; i<section.length; i++){
    section[i].style.backgroundColor = "#" + randomColor;
    section[i].append( "#" + randomColor);
}
  }
  
  
const button = document.querySelector('button')
button.addEventListener('click', colorGenerator)
 

// function colorGenerator() {
//     let letters = "0123456789ABCDEF";
//     let randomColor = "#";
//     for (let j = 0; j < 6; j++) {
//         randomColor += letters[Math.floor(Math.random() * 16)];
//     }
//     return randomColor;
// }

// console.log(section.length);

// for (let i = 0; i < section.length; i++) {
//     section[i].style.background = colorGenerator();
//     section[i].append(colorGenerator());

// }

