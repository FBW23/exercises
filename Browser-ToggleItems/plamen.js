const button = document.querySelector('.btn');

button.addEventListener('click', function () {
  if (button.innerText === 'Hide Destinations!') {
    button.innerText = "Show Destinations!"
  } else if(button.innerText === 'Show Destinations!') {
    button.innerText = "Hide Destinations!"
  }
})
