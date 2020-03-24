let nameLabel = document.getElementById("nameLabel");
let birthDateLabel = document.getElementById("birthDateLabel");
let nationalityLabel = document.getElementById("nationalityLabel");
let addressLabel = document.getElementById("addressLabel");
let usernameLabel = document.getElementById("usernameLabel");
let passwordLabel = document.getElementById("passwordLabel");
let photoLabel = document.getElementById("photoLabel");

//create function that Open Registration Form wen click on Register Button
let registerBtn = document.getElementById("registerBtn");
function registration() {
  document.getElementById("registrationForm").style.display = "block";

}
registerBtn.addEventListener("click", registration);

//cancel Registration 
let cancelRegistration = document.getElementById('closeBtn');
function noRegistration() {
    document.getElementById("registrationForm").style.display= 'none';
}
cancelRegistration.addEventListener("click",noRegistration);


//creating Function go to NEXT Step Registration
let firstStep = document.getElementById("firstStep");
function nextDiv() {
  document.getElementById("personalDiv").style.display = "none";
  document.getElementById("addressDiv").style.display = "block";
  document.getElementById("profileDiv").style.display = "none";
  
}
firstStep.addEventListener("click", nextDiv);

let secondStep = document.getElementById("stepTwo");
function stepTwo() {
  document.getElementById("addressDiv").style.display = "none";
  document.getElementById("personalDiv").style.display = "none";
  document.getElementById("profileDiv").style.display = "block";
}
secondStep.addEventListener("click", stepTwo);

let finalStep = document.getElementById("finalStep");
function goToResult() {
  document.getElementById("addressDiv").style.display = "none";
  document.getElementById("personalDiv").style.display = "none";
  document.getElementById("profileDiv").style.display = "none";
  document.getElementById("resultDiv").style.display = "block";
}
finalStep.addEventListener("click", goToResult);



// creating function GO Back
//go back First Step
let previousBtn = document.getElementById("previousBtn");
function goBack() {
  document.getElementById("addressDiv").style.display = "none";
  document.getElementById("personalDiv").style.display = "block";
  document.getElementById("resultDiv").style.display = "none";
}
previousBtn.addEventListener("click", goBack);

//go Back secondStep

let finalStepPrevious = document.getElementById("finalStepPrevious");
function previousFinalStep() {
  document.getElementById("profileDiv").style.display = "none";
  document.getElementById("personalDiv").style.display = "none";
  document.getElementById("resultDiv").style.display = "none";
  document.getElementById("addressDiv").style.display = "block";
}
finalStepPrevious.addEventListener("click", previousFinalStep);

   // DROP DOWN
   document.addEventListener('DOMContentLoaded', function() {
    // Grab corona section from the DOM
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
 