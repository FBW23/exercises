






// mybutton.addEventListener('click', () => {
//   mydiv.style.backgroundColor=randmColor(); 

//   });
 
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

console.log(section.length);


button.addEventListener('click' , ()=>{
    for (let i = 0; i < section.length; i++) {
        section[i].style.background = colorGenerator();
        section[i].append(colorGenerator());
    
    }
})

