<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
  // Grab corona section from the DOM
  const coronas = document.querySelectorAll(".corona-header");
  // Grab dropdown menu from the DOM
  
  const hideAll = function (){
    const dropDowns = document.querySelectorAll(".corona-dropdown");
    // Creates function to add dropdown menu
    for(let i=0; i < dropDowns.length; i++) {
      dropDowns[i].classList.remove("on"); // REMOVE FROM ALL
    } // HIDE ALL DROPDOWNS FIRST 
  };

  const addMenu = function addDropDownMenu() {
    hideAll();
    const myDropdown = event.target.nextElementSibling;
    myDropdown.classList.add("on"); // SHOW THE CORRECT ONE
    console.log("hi");
  };
  // Creates function to remove dropdown menu
  const removeMenu = function removeDropDownMenu() {
    hideAll();
    console.log("bye");
  };
  // Add mouse over event to show menu
  for (let i=0; i<coronas.length; i++){
    coronas[i].addEventListener("mouseover", addMenu);
    // Add mouse out event to remove menu
    coronas[i].addEventListener("mouseout", removeMenu);
  
  };
  }
);
=======
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const list5 = document.querySelector("#list5");

document.querySelector("#btn1").addEventListener("click", () => {
    list1.classList.toggle("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn2").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.toggle("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn3").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.toggle("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn4").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.toggle("show");
    list5.classList.remove("show");
});

document.querySelector("#btn5").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.toggle("show");
});


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let lists = document.querySelectorAll(".dropdown-list");
        for (let index = 0; index < lists.length; index++) {
            let element = lists[index];
            element.classList.remove('show');
        }
    }
} 
>>>>>>> 5d4bb976a7ed3d2f1edb7c65f0e2d4efeb683592
