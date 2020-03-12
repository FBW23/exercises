// function tool(ctr) {
//   let tooltip = document.getElementById("pop-up-window");
//   let posY = ctr.offsetLeft;
//   let posX = ctr.offsetTop;
//   tooltip.style.left = posY + 100 + "px";
//   tooltip.style.top = posX + 10 + "px";
//   tooltip.style.display = "block";
// }
// function hide() {
//   document.getElementById("pop-up-window").style.display = "none";
// }
// function show() {
//   document.getElementById("pop-up-window").style.display = "block";
// }
// tooltip.addEventListener('mousemove', show);
const container = document.getElementById('pop-up-window');

function showPopup() {
  if (event.clientY > 200) {
    document.getElementById("pop-up-window").style.display = "block";
  }
}
const closeButton = document.getElementById("close");
function close(){
  document.getElementById("pop-up-window").style.display = "none";
}

window.addEventListener('mousemove', showPopup);
closeButton.addEventListener('click', close);
