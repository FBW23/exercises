const button = document.querySelector('.btn');

button.addEventListener('click', function () {
  if (button.innerText === 'Hide destinations') {
    button.innerText = "Show destinations"
  } else {
    button.innerText = "Hide destinations"

  }
})