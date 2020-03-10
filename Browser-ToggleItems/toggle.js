let button = document.querySelector("button");
let list = document.querySelector("ul");

let listVisible = false;

button.addEventListener("click", function listener() {
  listVisible = !listVisible; 
  if (listVisible) {
    list.style.display = "block";
    button.innerHTML = "Get them out of here!";
  } else {
    list.style.display = "none";
    button.innerHTML = "Show favourite destinations";
  }
});