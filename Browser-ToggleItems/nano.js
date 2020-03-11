// document.querySelector("").addEventListener("click", myFunction);
function myFunction() {
    let hide = document.querySelector(".list-group");
    if (hide.style.display === "none") {
      hide.style.display = "block";
    } else {
      hide.style.display = "none";
    }
  }
  document.querySelector("button").addEventListener("click", myFunction);