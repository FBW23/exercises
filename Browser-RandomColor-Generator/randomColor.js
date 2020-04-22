// Random color function
const randomColorGenerator = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


// Function that creates and deletes cards
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

  // delete the created colors
  const x = document.querySelectorAll('a');
  const cardsBodies = document.querySelectorAll('.card');
  const colorCodes = document.querySelectorAll('.color-code');


  for (let i = 0; i < colorCodes.length; i++) {
    console.log(x[i])
    // removes the random colors on 'X' click
    x[i].addEventListener('click', function () {
      cardsBodies[i].style.display = 'none';
    })
  }

  // Add the random color string to the card body
  const newColor = randomColorGenerator();
  p.innerHTML = newColor;

  // Add background color to the card-bodies
  div.style.backgroundColor = newColor;
}


// Create 3 random color cards
createCards();
createCards();
createCards();



// ==============================Event listeners===================================
const form = document.querySelector('form');
form.addEventListener('submit', function () {
  event.preventDefault();
  const colorNumberInput = document.querySelector('.form-control');
  const numberColors = colorNumberInput.value;
  console.log(numberColors);
  for (let i = 0; i < numberColors; i++) {
    createCards();
  }
});
// ===============================================================================

// delete the first 3 created cards
const x = document.querySelectorAll('a');
const cardsBodies = document.querySelectorAll('.card');
const colorCodes = document.querySelectorAll('.color-code');


for (let i = 0; i < colorCodes.length; i++) {
  console.log(x[i])
  // removes the random colors on 'X' click
  x[i].addEventListener('click', function () {
    cardsBodies[i].style.display = 'none';
  })
}