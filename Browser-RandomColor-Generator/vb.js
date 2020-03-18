const colors = document.querySelector("#colors");
const closing = document.querySelector(".close");
const button = document.querySelector("#submit");



const colorGenerator = () => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * 10)
        randomColor += randomNumber;
    }
    return randomColor;
}


const divGenerator = () => {
    const colorNumber = document.querySelector("#number").value;
    const myNum = Number(colorNumber);
    for (let i = 0; i < myNum; i++) {
        const myDiv = document.createElement('div');
        myDiv.style.background = colorGenerator();
        myDiv.classList.add('color');
        myDiv.setAttribute('id', `color${i}`);
        const paragraph = document.createElement("p");
        paragraph.classList.add("close");
        paragraph.setAttribute('id', `x${i}`);
        paragraph.innerText="x"
        myDiv.append(paragraph);
        colors.append(myDiv);
    }
}
divGenerator();


const hideIt = () => {
    for(let i=0;i<document.querySelector(".close").clientHeight;i++){
        
        document.querySelector(`p`).parentElement.style.display = "none";
       
    }
    console.log(typeof(document.querySelector(".close")))
}

button.addEventListener("click", divGenerator);
document.querySelector("p").addEventListener("click", hideIt);