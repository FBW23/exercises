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
