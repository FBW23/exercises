
//  1. Create a function to generate a random color HEX code

const randomColorGenerator = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

console.log(randomColorGenerator())

// 2. Create a function to add a new color item to the list, passing the color code as argument

const createCards = () => {
  const parentDiv = document.querySelector('.flex-box-container');
  let div = document.createElement('div');
  let i = document.createElement('i')
  let a = document.createElement('a');
  let p = document.createElement('p');
  let innerDiv = document.createElement('div');

  div.classList.add('card');
  div.style.width = '20rem';
  div.appendChild(a);
  a.appendChild(i);
  i.classList.add('fa');
  i.classList.add('fa-times');
  div.appendChild(innerDiv);
  innerDiv.classList.add('card-body');
  innerDiv.appendChild(p);
  p.classList.add('color-code');
  div.appendChild(innerDiv);
  parentDiv.appendChild(div);

}


createCards()
createCards()
createCards()
createCards()
createCards()
createCards()
createCards()
createCards()
createCards()
// ===================================================================
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




