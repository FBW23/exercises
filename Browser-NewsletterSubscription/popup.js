const container = document.querySelector('.container');

function showPopup() {
  if (event.clientY > 100) {
    container.classList.remove('hide');
  }
}

window.addEventListener('mousemove', showPopup);