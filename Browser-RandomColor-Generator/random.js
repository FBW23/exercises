
let userInput = document.getElementById("userInput");
let button = document.getElementById("create").addEventListener("click", myFunction);
function myFunction() {
  event.preventDefault();
  let numberSquare = userInput.value;
  for (let i = 0; i < numberSquare; i++) {
    let div = document.createElement("div");
    document.getElementById("squareArea").appendChild(div);
    div.classList.add("quote");
    let color = colorPalette();
    div.style.backgroundColor = color;
    div.innerHTML = color;
  }
}

function colorPalette() {
  const colorRange = "0123456789ABCDEF";
  let finalColor = "#";
  for (let i = 0; i < 6; i++) {
    finalColor += colorRange[Math.floor(Math.random() * 16)];
  }
  return finalColor;
}

