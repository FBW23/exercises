function showPopup() {
  if (event.clientY > 10) {
    document.getElementById("pop-up-window").style.display = "block";
  }
}
const closeButton = document.getElementById("close");
function close(){
  document.getElementById("pop-up-window").style.display = "none";
}

window.addEventListener('mousemove', showPopup);
closeButton.addEventListener('click', close);
