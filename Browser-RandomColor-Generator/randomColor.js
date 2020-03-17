
//  1. Create a function to generate a random color HEX code

const randomColorGenerator = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

console.log(randomColorGenerator())

const colorCodes = document.querySelectorAll('.color-code');
const cardsBodies = document.querySelectorAll('.card');
const x = document.querySelectorAll('a');

for(let i = 0; i < colorCodes.length; i++) {
  
  // Add the random color string to the card body
  colorCodes[i].innerHTML = randomColorGenerator();
  
  // Add background color to the card-bodies
  cardsBodies[i].style.backgroundColor = randomColorGenerator();
  
  // removes the random colors on 'X' click
  x[i].addEventListener('click', function() {
    cardsBodies[i].style.display = 'none';
  })
}




// 2. Create a function to add a new color item to the list, passing the color code as argument


function createACardElement () {
  const body = document.querySelector('body');
  let div = document.createElement('div');
  div.classList.add = 'card';
  let a = document.createElement('a');
  let p = document.createElement('p');
  
  body.appendChild(div);
}
const button = document.querySelector('.button');
button.addEventListener('click', createACardElement);
