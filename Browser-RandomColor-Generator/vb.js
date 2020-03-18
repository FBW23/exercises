const colors = document.querySelector("#colors");
const button = document.querySelector("#submit");

const colorGenerator = () => {
    let randomColor = "#";
    let letters='ABCDEF0123456789';
    for (let i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * letters.length);
        randomColor += letters[randomNumber];
    }
    return randomColor; // '#ABD456'
}

const hideIt = (event) => {
  
    const parent = event.target.parentNode;
    parent.remove();
    
}

const divGenerator = () => {
    const colorNumber = document.querySelector("#number").value;
    const myNum = Number(colorNumber);
    for (let i = 0; i < myNum; i++) {
        const myDiv = document.createElement('div');
        const hexcode = colorGenerator();
        myDiv.style.background = hexcode;
        myDiv.classList.add('color');
        
        myDiv.innerText = hexcode;
        const paragraph = document.createElement("p");
        paragraph.classList.add("close");
        
        paragraph.innerText = "x";
        paragraph.addEventListener("click", hideIt);
        myDiv.append(paragraph);
        colors.append(myDiv);
    }
}
divGenerator();




button.addEventListener("click", divGenerator);